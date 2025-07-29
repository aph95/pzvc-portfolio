
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
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Account for zoom by using actual display size
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Set canvas display size
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // Scale context to match device pixel ratio
      ctx.scale(dpr, dpr);
      
      // Ensure transparent background
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    let animationId: number;

    const calculateWarp = (x: number, y: number, mouseX: number, mouseY: number) => {
      // Get canvas position relative to the viewport
      const rect = canvas.getBoundingClientRect();
      const canvasMouseX = mouseX - rect.left;
      const canvasMouseY = mouseY - rect.top;
      
      const dx = x - canvasMouseX;
      const dy = y - canvasMouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200;
      
      if (distance < maxDistance && distance > 0) {
        const normalizedDistance = distance / maxDistance;
        const warpStrength = (1 - normalizedDistance) * 40;
        
        // Create gravitational pull effect - points bend towards the mouse
        const pullFactor = Math.pow(1 - normalizedDistance, 3);
        const warpX = -(dx / distance) * warpStrength * pullFactor;
        const warpY = -(dy / distance) * warpStrength * pullFactor;
        
        return { warpX, warpY };
      }
      
      return { warpX: 0, warpY: 0 };
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Adaptive colors based on theme
      const gridColor = isDarkMode ? 'rgba(156, 163, 175, 0.2)' : 'rgba(156, 163, 175, 0.3)';
      const gradientColor1 = isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.15)';
      const gradientColor2 = isDarkMode ? 'rgba(59, 130, 246, 0.05)' : 'rgba(59, 130, 246, 0.08)';
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Use getBoundingClientRect for zoom-aware dimensions
      const rect = canvas.getBoundingClientRect();
      const cols = Math.ceil(rect.width / gridSize);
      const rows = Math.ceil(rect.height / gridSize);

      // Draw curved vertical lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        
        let prevX = i * gridSize;
        let prevY = 0;
        
        // Apply warp to starting point
        if (mousePosition) {
          const { warpX, warpY } = calculateWarp(prevX, prevY, mousePosition.x, mousePosition.y);
          prevX += warpX;
          prevY += warpY;
        }
        
        ctx.moveTo(prevX, prevY);
        
        // Draw curved line by connecting multiple warped points
        for (let j = 1; j <= rows; j++) {
          let x = i * gridSize;
          let y = j * gridSize;

          // Apply spacetime curvature
          if (mousePosition) {
            const { warpX, warpY } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
            x += warpX;
            y += warpY;
          }

          // Create smooth curves using quadratic curves
          const controlX = (prevX + x) / 2;
          const controlY = (prevY + y) / 2;
          
          if (j === 1) {
            ctx.lineTo(x, y);
          } else {
            ctx.quadraticCurveTo(controlX, controlY, x, y);
          }
          
          prevX = x;
          prevY = y;
        }
        ctx.stroke();
      }

      // Draw curved horizontal lines
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        
        let prevX = 0;
        let prevY = j * gridSize;
        
        // Apply warp to starting point
        if (mousePosition) {
          const { warpX, warpY } = calculateWarp(prevX, prevY, mousePosition.x, mousePosition.y);
          prevX += warpX;
          prevY += warpY;
        }
        
        ctx.moveTo(prevX, prevY);
        
        // Draw curved line by connecting multiple warped points
        for (let i = 1; i <= cols; i++) {
          let x = i * gridSize;
          let y = j * gridSize;

          // Apply spacetime curvature
          if (mousePosition) {
            const { warpX, warpY } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
            x += warpX;
            y += warpY;
          }

          // Create smooth curves using quadratic curves
          const controlX = (prevX + x) / 2;
          const controlY = (prevY + y) / 2;
          
          if (i === 1) {
            ctx.lineTo(x, y);
          } else {
            ctx.quadraticCurveTo(controlX, controlY, x, y);
          }
          
          prevX = x;
          prevY = y;
        }
        ctx.stroke();
      }

      // Draw gravitational well visualization around mouse
      if (mousePosition) {
        const rect = canvas.getBoundingClientRect();
        const canvasMouseX = mousePosition.x - rect.left;
        const canvasMouseY = mousePosition.y - rect.top;
        
        // Validate that all values are finite before creating gradient
        if (isFinite(canvasMouseX) && isFinite(canvasMouseY) && 
            canvasMouseX >= 0 && canvasMouseY >= 0 &&
            canvasMouseX <= rect.width && canvasMouseY <= rect.height) {
          
          const gradient = ctx.createRadialGradient(
            canvasMouseX, canvasMouseY, 0,
            canvasMouseX, canvasMouseY, 150
          );
          gradient.addColorStop(0, gradientColor1);
          gradient.addColorStop(0.5, gradientColor2);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(canvasMouseX, canvasMouseY, 150, 0, Math.PI * 2);
          ctx.fill();
        }
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
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent',
        zIndex: -1
      }}
    />
  );
};

export default SpacetimeGrid;
