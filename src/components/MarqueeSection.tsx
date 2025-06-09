
import { useRef, useEffect } from 'react';

const MarqueeSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const tools = [
    'Figma',
    'VS Code', 
    'Lovable',
    'Adobe Creative Suite',
    'AI Tools'
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
    <section className="relative py-8 overflow-hidden border-y border-border/20 bg-gradient-to-r from-transparent via-muted/30 to-transparent">
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap hover:[animation-play-state:paused] marquee-container"
      >
        <div className="marquee-content flex items-center animate-marquee">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
                {tool}
              </span>
              {index < tools.length - 1 && (
                <div className="w-1 h-1 bg-primary/60 rounded-full mx-8 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient fade effects */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default MarqueeSection;
