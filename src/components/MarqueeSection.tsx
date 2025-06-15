
import { Figma, Code, Database, Image, Brain } from 'lucide-react';

const MarqueeSection = () => {
  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'VS Code', icon: Code },
    { name: 'Lovable', icon: Database },
    { name: 'Adobe Creative Suite', icon: Image },
    { name: 'AI Tools', icon: Brain }
  ];

  // Create multiple duplicates for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="relative py-12 overflow-hidden border-y border-border/20 bg-gradient-to-r from-transparent via-muted/30 to-transparent">
      <div className="marquee-wrapper">
        <div className="marquee-content-infinite">
          {duplicatedTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div key={index} className="marquee-item">
                <div className="group flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 group-hover:bg-muted transition-all duration-300 group-hover:scale-110">
                    <IconComponent 
                      size={16} 
                      className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
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
