
import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SpacetimeGridProps {
  className?: string;
  mousePosition?: { x: number; y: number };
}

const SpacetimeGrid = ({ className = '', mousePosition }: SpacetimeGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    let animationId: number;

    const calculateSphericalWarp = (x: number, y: number, mouseX: number, mouseY: number) => {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200;
      
      if (distance < maxDistance) {
        const normalizedDistance = distance / maxDistance;
        
        // Create spherical warping using a smoother falloff function
        const sphericalFactor = Math.pow(Math.cos(normalizedDistance * Math.PI * 0.5), 2);
        const warpStrength = sphericalFactor * 60;
        
        // Add depth effect - points closer to center warp more inward
        const depthFactor = Math.pow(1 - normalizedDistance, 3);
        const radialPull = depthFactor * 25;
        
        // Calculate spherical coordinates for smooth curvature
        const angle = Math.atan2(dy, dx);
        const warpX = -(Math.cos(angle) * warpStrength) - (dx / distance) * radialPull;
        const warpY = -(Math.sin(angle) * warpStrength) - (dy / distance) * radialPull;
        
        return { warpX, warpY };
      }
      
      return { warpX: 0, warpY: 0 };
    };

    const drawSmoothLine = (points: { x: number; y: number }[]) => {
      if (points.length < 2) return;
      
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length; i++) {
        const currentPoint = points[i];
        const previousPoint = points[i - 1];
        
        if (i === 1) {
          ctx.lineTo(currentPoint.x, currentPoint.y);
        } else {
          // Use quadratic curves for smoother lines
          const controlX = (previousPoint.x + currentPoint.x) / 2;
          const controlY = (previousPoint.y + currentPoint.y) / 2;
          ctx.quadraticCurveTo(previousPoint.x, previousPoint.y, controlX, controlY);
        }
      }
      
      // Final point
      if (points.length > 2) {
        const lastPoint = points[points.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Adaptive colors based on theme
      const gridColor = isDarkMode ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.3)';
      const gradientColor1 = isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)';
      const gradientColor2 = isDarkMode ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.08)';
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      const cols = Math.ceil(canvas.offsetWidth / gridSize);
      const rows = Math.ceil(canvas.offsetHeight / gridSize);

      // Draw curved vertical lines with higher resolution for smoother curves
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        const points = [];
        
        // Generate more points for smoother curves
        const steps = rows * 3; // Triple the resolution
        for (let step = 0; step <= steps; step++) {
          let x = i * gridSize;
          let y = (step / steps) * (rows * gridSize);

          // Apply spherical spacetime curvature
          if (mousePosition) {
            const { warpX, warpY } = calculateSphericalWarp(x, y, mousePosition.x, mousePosition.y);
            x += warpX;
            y += warpY;
          }

          points.push({ x, y });
        }
        
        drawSmoothLine(points);
        ctx.stroke();
      }

      // Draw curved horizontal lines with higher resolution
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        const points = [];
        
        // Generate more points for smoother curves
        const steps = cols * 3; // Triple the resolution
        for (let step = 0; step <= steps; step++) {
          let x = (step / steps) * (cols * gridSize);
          let y = j * gridSize;

          // Apply spherical spacetime curvature
          if (mousePosition) {
            const { warpX, warpY } = calculateSphericalWarp(x, y, mousePosition.x, mousePosition.y);
            x += warpX;
            y += warpY;
          }

          points.push({ x, y });
        }
        
        drawSmoothLine(points);
        ctx.stroke();
      }

      // Draw enhanced gravitational well visualization
      if (mousePosition) {
        // Outer gradient
        const outerGradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, 180
        );
        outerGradient.addColorStop(0, gradientColor1);
        outerGradient.addColorStop(0.3, gradientColor2);
        outerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = outerGradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 180, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner intense glow
        const innerGradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, 80
        );
        innerGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
        innerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = innerGradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SpacetimeGrid;
