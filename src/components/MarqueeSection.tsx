
import { useRef, useEffect } from 'react';
import { Figma, Code, Database, Image, Brain } from 'lucide-react';

const MarqueeSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'VS Code', icon: Code },
    { name: 'Lovable', icon: Database },
    { name: 'Adobe Creative Suite', icon: Image },
    { name: 'AI Tools', icon: Brain }
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate the content for seamless loop
    const marqueeContent = marquee.querySelector('.marquee-content');
    if (marqueeContent) {
      const clone = marqueeContent.cloneNode(true);
      marquee.appendChild(clone);
    }
  }, []);

  return (
    <section className="relative py-12 overflow-hidden border-y border-border/20 bg-gradient-to-r from-transparent via-muted/30 to-transparent">
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap hover:[animation-play-state:paused] marquee-container"
      >
        <div className="marquee-content flex items-center animate-marquee">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="flex items-center mx-12">
                <div className="group flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <IconComponent 
                    size={24} 
                    className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {index < tools.length - 1 && (
                  <div className="w-0.5 h-0.5 bg-primary/40 rounded-full mx-12 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default MarqueeSection;
