
import { useEffect, useRef } from 'react';

interface FloatingPlanetProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  initialX?: number;
  initialY?: number;
  speed?: number;
  className?: string;
}

const FloatingPlanet = ({ 
  size = 'md', 
  color = 'bg-blue-500', 
  initialX = 50, 
  initialY = 50, 
  speed = 1,
  className = ''
}: FloatingPlanetProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) * 0.001 * speed;
      
      // Calculate offset positions
      const offsetX = Math.sin(elapsed) * 30;
      const offsetY = Math.cos(elapsed * 0.7) * 20;
      
      // Use CSS transform for hardware acceleration
      element.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={`absolute rounded-full ${sizeClasses[size]} ${color} opacity-60 blur-sm transition-all duration-300 hover:opacity-80 hover:blur-none ${className}`}
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
        willChange: 'transform'
      }}
    />
  );
};

export default FloatingPlanet;
