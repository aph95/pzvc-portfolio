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
    
    setMousePosition({ x: x * 15, y: y * -15 }); // Subtle tilt range
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setMousePosition({ x: 0, y: 0 });
    }
  };

  const handleMockupClick = () => {
    setIsCardExpanded(true);
  };

  const navigateToProject = () => {
    // Scroll to projects section or navigate to projects page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/projects';
    }
  };

  return (
    <section className="relative py-20 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Featured prototype
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring emotionally intelligent design through thoughtful user experiences
          </p>
        </div>

        <div className="flex justify-center relative">
          {/* Deliverly Mockup */}
          <div
            ref={mockupRef}
            className="relative cursor-pointer transition-all duration-300 ease-out hover:scale-105"
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
          >
            <div className="relative">
              <img
                src="/lovable-uploads/fa5f55aa-fc88-4725-ab83-1f9e1c8c3e68.png"
                alt="Deliverly mobile app prototype showing delivery interface"
                className="w-80 h-auto rounded-3xl shadow-2xl transition-shadow duration-300 hover:shadow-3xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
                }}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              {/* Interaction hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-all duration-300">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-1 text-sm text-muted-foreground">
                  Click to explore
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Card */}
          {isCardExpanded && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
              <div 
                className="relative bg-background border border-border rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-scale-in"
                style={{
                  background: 'rgba(var(--background), 0.95)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsCardExpanded(false)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full border border-border bg-background hover:bg-accent transition-colors duration-200 flex items-center justify-center"
                  aria-label="Close project details"
                >
                  <X size={16} className="text-muted-foreground" />
                </button>

                {/* Connection line (decorative) */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-primary to-transparent" />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Deliverly – Feedback-Driven Delivery Experience
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Deliverly explores how delivery services can offer emotionally aware feedback mechanisms for couriers and customers. The prototype includes elements like real-time feedback cues and interaction-aware design to support ethical, intelligent delivery UX.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={navigateToProject}
                      className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      View Full Project
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeliverlyFeature;