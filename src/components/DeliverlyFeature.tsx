import { useState, useRef } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const DeliverlyFeature = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mockupRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !mockupRef.current) return;
    
    const rect = mockupRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    
    setMousePosition({ x: x * 12, y: y * -12 }); // Subtle tilt range
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setMousePosition({ x: 0, y: 0 });
    }
  };

  const handleMockupClick = () => {
    if (!isMobile) {
      setIsCardExpanded(!isCardExpanded);
    }
  };

  const navigateToProject = () => {
    // Navigate to Projects page and scroll to Deliverly case study
    window.location.href = '/projects#deliverly';
    
    // If already on projects page, scroll directly to Deliverly
    if (window.location.pathname === '/projects') {
      setTimeout(() => {
        const deliverlyProject = document.querySelector('[data-project-id="2"]');
        if (deliverlyProject) {
          deliverlyProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Featured prototype
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring emotionally intelligent design through thoughtful user experiences
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative px-8 xl:px-6">
          <div className="flex items-center justify-center relative transition-all duration-700 ease-out max-w-5xl xl:max-w-6xl mx-auto">
            {/* Deliverly Mockup */}
            <div
              className={`transition-all duration-700 ease-out ${
                isCardExpanded ? 'transform -translate-x-12 lg:-translate-x-20 xl:-translate-x-32' : ''
              }`}
            >
              <div
                ref={mockupRef}
                className="relative cursor-pointer transition-all duration-500 ease-out hover:scale-105 z-10"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleMockupClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleMockupClick();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="View Deliverly prototype details"
                aria-expanded={isCardExpanded}
              >
                <div className="relative">
                  <img
                    src="/lovable-uploads/bd12014a-c65a-4ffa-ad65-b93088964d27.png"
                    alt="Deliverly mobile app prototype showing profile, login, and delivery tracking screens"
                    className="w-96 h-auto rounded-3xl shadow-2xl transition-all duration-500"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
                      boxShadow: isCardExpanded ? '0 0 0 2px hsl(var(--primary) / 0.3)' : 'none',
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Animated Connection Line */}
            {isCardExpanded && (
              <svg 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5"
                width="200" 
                height="100" 
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line
                  x1="-30"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="animate-pulse"
                  style={{
                    animation: 'draw-line 0.8s ease-out forwards, pulse 2s ease-in-out infinite 0.8s',
                  }}
                />
              </svg>
            )}

            {/* Expandable Info Card */}
            <div 
              className={`absolute transition-all duration-700 ease-out ${
                isCardExpanded 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ 
                left: '50%', 
                top: '50%', 
                transform: `translate(${isCardExpanded ? '6rem' : '8rem'}, -50%) ${!isCardExpanded ? 'scale(0.95)' : ''}`,
                minWidth: '280px',
                maxWidth: '320px',
                width: 'auto'
              }}
            >
              <div 
                className="relative bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 100%)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px hsl(var(--border) / 0.3)',
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsCardExpanded(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border/50 bg-background/50 hover:bg-accent transition-all duration-200 flex items-center justify-center group"
                  aria-label="Close project details"
                >
                  <X size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Active Prototype</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Deliverly
                    </h3>
                    <p className="text-sm text-muted-foreground">
                    Feedback-driven delivery experience
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Exploring emotionally aware feedback mechanisms for couriers and customers through real-time interaction cues and ethical delivery UX design.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={navigateToProject}
                      className="group inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm font-medium"
                    >
                      View full project
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Simple centered mockup */}
        <div className="lg:hidden flex justify-center px-6">
          <div className="relative flex flex-col items-center">
            <img
              src="/lovable-uploads/bd12014a-c65a-4ffa-ad65-b93088964d27.png"
              alt="Deliverly mobile app prototype showing profile, login, and delivery tracking screens"
              className="w-80 h-auto rounded-3xl shadow-2xl mx-auto"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
              }}
            />
            <div className="mt-6 text-center space-y-4 max-w-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Deliverly – Feedback-driven delivery experience
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring emotionally aware feedback mechanisms for couriers and customers through thoughtful interaction design.
              </p>
              <button
                onClick={navigateToProject}
                className="group inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
              >
                View full project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DeliverlyFeature;