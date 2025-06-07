
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SpacetimeOrbProps {
  className?: string;
}

const SpacetimeOrb = ({ className = '' }: SpacetimeOrbProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Try WebGL first, fallback to 2D if not supported
    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
      setIsWebGLSupported(false);
    }

    if (!gl) {
      setIsWebGLSupported(false);
      return renderFallback(canvas);
    }

    return renderWebGL(canvas, gl, isDarkMode);
  }, [isDarkMode]);

  const renderFallback = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const gridSize = 40;
      const orbRadius = 60;
      
      // Colors based on theme
      const gridColor = isDarkMode ? 'rgba(156, 163, 175, 0.3)' : 'rgba(156, 163, 175, 0.4)';
      const orbColor = isDarkMode ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.9)';
      const glowColor = isDarkMode ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.5)';
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Draw warped grid
      const cols = Math.ceil(canvas.offsetWidth / gridSize);
      const rows = Math.ceil(canvas.offsetHeight / gridSize);
      
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          let x = i * gridSize;
          let y = j * gridSize;
          
          // Apply gravitational warp
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxWarpDistance = 120;
          
          if (distance < maxWarpDistance && distance > 0) {
            const warpStrength = (1 - distance / maxWarpDistance) * 20;
            const angle = Math.atan2(dy, dx);
            x += Math.cos(angle) * warpStrength;
            y += Math.sin(angle) * warpStrength;
          }
          
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          let x = i * gridSize;
          let y = j * gridSize;
          
          // Apply gravitational warp
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxWarpDistance = 120;
          
          if (distance < maxWarpDistance && distance > 0) {
            const warpStrength = (1 - distance / maxWarpDistance) * 20;
            const angle = Math.atan2(dy, dx);
            x += Math.cos(angle) * warpStrength;
            y += Math.sin(angle) * warpStrength;
          }
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw orb with glow
      const orbX = centerX + Math.cos(time * 0.5) * 8;
      const orbY = centerY + Math.sin(time * 0.3) * 6;
      
      // Glow effect
      const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbRadius * 2);
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbRadius * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Main orb
      ctx.fillStyle = orbColor;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner highlight
      const highlightGradient = ctx.createRadialGradient(
        orbX - orbRadius * 0.3, orbY - orbRadius * 0.3, 0,
        orbX, orbY, orbRadius
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(orbX, orbY, orbRadius, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  };

  const renderWebGL = (canvas: HTMLCanvasElement, gl: WebGLRenderingContext, isDarkMode: boolean) => {
    // WebGL implementation would go here
    // For now, fallback to 2D canvas for broader compatibility
    return renderFallback(canvas);
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default SpacetimeOrb;
