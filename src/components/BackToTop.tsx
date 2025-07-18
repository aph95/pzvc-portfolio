import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls beyond first viewport height
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-14 h-14 rounded-full
        hidden lg:flex items-center justify-center
        transition-all duration-500 ease-out
        group
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        filter: 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.backdropFilter = 'blur(24px) saturate(200%) brightness(1.1)';
        e.currentTarget.style.filter = 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15)) hue-rotate(5deg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backdropFilter = 'blur(20px) saturate(180%)';
        e.currentTarget.style.filter = 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1))';
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid hsl(var(--primary))';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      {/* Distortion overlay for liquid glass effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
          filter: 'blur(1px)',
        }}
      />
      
      {/* Refraction effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)',
          transform: 'perspective(100px) rotateX(5deg)',
        }}
      />
      
      <ChevronUp 
        size={20} 
        className="relative z-10 text-foreground/80 transition-all duration-200 group-hover:text-foreground group-hover:-translate-y-0.5" 
        strokeWidth={2.5}
      />
    </button>
  );
};

export default BackToTop;