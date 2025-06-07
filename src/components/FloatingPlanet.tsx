
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
  const [isVisible, setIsVisible] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  // Create unique animation durations based on speed and position for natural variation
  const primaryDuration = (20 / speed).toFixed(1);
  const secondaryDuration = (14 / speed).toFixed(1);

  useEffect(() => {
    // Delay initial visibility to stagger animations
    const timer = setTimeout(() => setIsVisible(true), Math.random() * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute rounded-full ${sizeClasses[size]} ${color} transition-opacity duration-1000 ${isVisible ? 'opacity-40' : 'opacity-0'} ${className}`}
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        animation: `float-primary ${primaryDuration}s ease-in-out infinite, float-secondary ${secondaryDuration}s ease-in-out infinite`,
        filter: 'blur(0.5px)',
        boxShadow: '0 0 12px rgba(59, 130, 246, 0.3)'
      }}
    />
  );
};

export default FloatingPlanet;
