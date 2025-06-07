
import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Account for scroll offset to get the correct position relative to the document
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY + window.scrollY 
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateMousePosition);
    };
  }, []);

  return mousePosition;
};
