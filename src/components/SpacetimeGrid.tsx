
import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SpacetimeGridProps {
  className?: string;
  mousePosition?: { x: number; y: number };
}

const SpacetimeGrid = ({ className = '', mousePosition }: SpacetimeGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const animationRef = useRef<number>();
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const frameCountRef = useRef(0);

  const calculateWarp = useCallback((x: number, y: number, mouseX: number, mouseY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { warpX: 0, warpY: 0 };
    
    const canvasMouseX = mouseX - rect.left;
    const canvasMouseY = mouseY - rect.top;
    
    const dx = x - canvasMouseX;
    const dy = y - canvasMouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 120; // Reduced for better performance
    
    if (distance < maxDistance && distance > 0) {
      const normalizedDistance = distance / maxDistance;
      const warpStrength = (1 - normalizedDistance) * 20; // Reduced intensity
      const pullFactor = Math.pow(1 - normalizedDistance, 2); // Reduced complexity
      const warpX = -(dx / distance) * warpStrength * pullFactor;
      const warpY = -(dy / distance) * warpStrength * pullFactor;
      
      return { warpX, warpY };
    }
    
    return { warpX: 0, warpY: 0 };
  }, []);

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Only redraw if mouse moved significantly or every 5th frame for smooth animation
    const mouseChanged = mousePosition && (
      Math.abs(mousePosition.x - lastMouseRef.current.x) > 5 ||
      Math.abs(mousePosition.y - lastMouseRef.current.y) > 5
    );

    frameCountRef.current++;
    const shouldRedraw = mouseChanged || frameCountRef.current % 5 === 0;

    if (!shouldRedraw) {
      animationRef.current = requestAnimationFrame(drawGrid);
      return;
    }

    if (mousePosition) {
      lastMouseRef.current = { x: mousePosition.x, y: mousePosition.y };
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const gridColor = isDarkMode ? 'rgba(156, 163, 175, 0.15)' : 'rgba(156, 163, 175, 0.2)';
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;

    const gridSize = 60; // Slightly larger for better performance
    const cols = Math.ceil(canvas.offsetWidth / gridSize);
    const rows = Math.ceil(canvas.offsetHeight / gridSize);

    // Simplified grid drawing - only draw every other line for performance
    for (let i = 0; i <= cols; i += 1) {
      ctx.beginPath();
      for (let j = 0; j <= rows; j++) {
        let x = i * gridSize;
        let y = j * gridSize;

        if (mousePosition) {
          const { warpX, warpY } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
          x += warpX;
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

    for (let j = 0; j <= rows; j += 1) {
      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        let x = i * gridSize;
        let y = j * gridSize;

        if (mousePosition) {
          const { warpX, warpY } = calculateWarp(x, y, mousePosition.x, mousePosition.y);
          x += warpX;
          y += warpY;
        }

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Simplified gravitational well - only draw if mouse is present
    if (mousePosition) {
      const rect = canvas.getBoundingClientRect();
      const canvasMouseX = mousePosition.x - rect.left;
      const canvasMouseY = mousePosition.y - rect.top;
      
      if (canvasMouseX >= 0 && canvasMouseY >= 0 && 
          canvasMouseX <= canvas.offsetWidth && canvasMouseY <= canvas.offsetHeight) {
        
        const gradient = ctx.createRadialGradient(
          canvasMouseX, canvasMouseY, 0,
          canvasMouseX, canvasMouseY, 80 // Reduced radius
        );
        gradient.addColorStop(0, isDarkMode ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.12)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(canvasMouseX, canvasMouseY, 80, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    animationRef.current = requestAnimationFrame(drawGrid);
  }, [mousePosition, isDarkMode, calculateWarp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    
    // Throttled resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resizeCanvas, 100);
    };
    
    window.addEventListener('resize', handleResize);
    drawGrid();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [drawGrid]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none spacetime-grid ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SpacetimeGrid;
