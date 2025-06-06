
import { useEffect, useState } from 'react';

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
  const [time, setTime] = useState(0);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01 * speed);
    }, 16);

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    setPosition({
      x: initialX + Math.sin(time) * 30,
      y: initialY + Math.cos(time * 0.7) * 20
    });
  }, [time, initialX, initialY]);

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
