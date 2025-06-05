
import { useEffect, useState } from 'react';

interface AnimatedLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  curve?: boolean;
  dashed?: boolean;
  withArrow?: boolean;
  className?: string;
}

const AnimatedLine = ({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
  curve = false,
  dashed = true,
  withArrow = true,
  className = ""
}: AnimatedLineProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const pathData = curve
    ? `M ${startX} ${startY} Q ${startX + (endX - startX) / 2} ${startY - 50} ${endX} ${endY}`
    : `M ${startX} ${startY} L ${endX} ${endY}`;

  return (
    <svg
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="rgb(59, 130, 246)"
            opacity="0.6"
          />
        </marker>
      </defs>
      <path
        d={pathData}
        stroke="rgb(59, 130, 246)"
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeDasharray={dashed ? "8,4" : "none"}
        markerEnd={withArrow ? "url(#arrowhead)" : "none"}
        fill="none"
        strokeDashoffset={isVisible ? 0 : 1000}
        style={{
          transition: 'stroke-dashoffset 2s ease-out',
          strokeDasharray: dashed ? "8,4" : "none",
          strokeDashoffset: isVisible ? 0 : (dashed ? 200 : 1000),
        }}
      />
    </svg>
  );
};

export default AnimatedLine;
