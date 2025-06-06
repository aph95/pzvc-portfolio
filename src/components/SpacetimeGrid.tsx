
import { useEffect, useRef } from 'react';

interface SpacetimeGridProps {
  className?: string;
  mousePosition?: { x: number; y: number };
}

const SpacetimeGrid = ({ className = '', mousePosition }: SpacetimeGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const calculateWarp = (x: number, y: number, mouseX: number, mouseY: number) => {
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        const normalizedDistance = distance / maxDistance;
        const warpStrength = (1 - normalizedDistance) * 30;
        
        // Create a more realistic curvature effect
        const curvatureFactor = Math.pow(1 - normalizedDistance, 2);
        const warpX = (dx / distance) * warpStrength * curvatureFactor;
        const warpY = (dy / distance) * warpStrength * curvatureFactor;
        
        return { warpX, warpY };
      }
      
      return { warpX: 0, warpY: 0 };
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
      ctx.lineWidth = 1;

      const cols = Math.ceil(canvas.offsetWidth / gridSize);
      const rows = Math.ceil(canvas.offsetHeight / gridSize);

      // Draw vertical lines with curvature
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          let y = j * gridSize;

          // Apply spacetime curvature
          if (mousePosition) {
            const { warpY } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
            y += warpY;
          }

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw horizontal lines with curvature
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        
        for (let i = 0; i <= cols; i++) {
          let x = i * gridSize;
          const y = j * gridSize;

          // Apply spacetime curvature
          if (mousePosition) {
            const { warpX } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
            x += warpX;
          }

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw gravitational well visualization around mouse
      if (mousePosition) {
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, 100
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SpacetimeGrid;
