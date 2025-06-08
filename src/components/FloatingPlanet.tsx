
import { useEffect, useState, useRef } from 'react';

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
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) * 0.001 * speed; // Convert to seconds and apply speed

      setPosition({
        x: initialX + Math.sin(elapsed) * 30,
        y: initialY + Math.cos(elapsed * 0.7) * 20
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initialX, initialY, speed]);

  return (
    <div
      className={`absolute rounded-full ${sizeClasses[size]} ${color} opacity-60 blur-sm transition-all duration-300 hover:opacity-80 hover:blur-none ${className}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
      }}
    />
  );
};

export default FloatingPlanet;
