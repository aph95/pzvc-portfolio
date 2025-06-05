
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface GuideArrowProps {
  direction?: 'down' | 'right' | 'left' | 'up';
  animated?: boolean;
  pulse?: boolean;
  delay?: number;
  className?: string;
}

const GuideArrow = ({ 
  direction = 'down', 
  animated = true, 
  pulse = true,
  delay = 0,
  className = ""
}: GuideArrowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const rotationMap = {
    down: 'rotate-0',
    right: 'rotate-90',
    left: '-rotate-90',
    up: 'rotate-180'
  };

  return (
    <div
      className={`
        ${animated ? 'transition-all duration-1000' : ''} 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      <ChevronDown 
        className={`w-6 h-6 text-blue-600 opacity-60 ${rotationMap[direction]}`}
      />
    </div>
  );
};

export default GuideArrow;
