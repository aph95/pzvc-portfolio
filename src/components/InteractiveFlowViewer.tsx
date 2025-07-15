import React, { useState, useRef } from 'react';
import { Search, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const flowImage = '/lovable-uploads/286ca92a-7e56-4992-8387-b8f7919c7c06.png';

const InteractiveFlowViewer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });

    // Calculate the zoom position for the background image
    const imageRect = imageRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const relativeX = (x / containerRect.width) * 100;
    const relativeY = (y / containerRect.height) * 100;
    
    setImagePosition({ x: relativeX, y: relativeY });
  };

  const handleDownload = () => {
    // In a real app, this would download the actual PDF
    // For demo purposes, we'll download the flow image
    const link = document.createElement('a');
    link.href = flowImage;
    link.download = 'patient-zero-gameplay-flow.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const lensSize = 150;

  return (
    <div className="my-8 space-y-6">
      {/* Interactive Image Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-lg border border-border bg-accent/20 cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        style={{ height: '500px' }}
      >
        {/* Base Image */}
        <img
          ref={imageRef}
          src={flowImage}
          alt="Patient Zero Gameplay Flow"
          className="w-full h-full object-contain transition-transform duration-200 ease-out"
          style={{ 
            transform: isHovering ? 'scale(0.8)' : 'scale(1)',
            filter: isHovering ? 'brightness(0.7)' : 'brightness(1)'
          }}
        />

        {/* Magnifying Glass Lens */}
        {isHovering && (
          <div
            className="absolute pointer-events-none border-4 border-primary/60 rounded-full overflow-hidden shadow-lg"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: `${mousePosition.x - lensSize / 2}px`,
              top: `${mousePosition.y - lensSize / 2}px`,
              backgroundImage: `url(${flowImage})`,
              backgroundSize: '250%',
              backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`,
              backgroundRepeat: 'no-repeat',
              backdropFilter: 'brightness(1.2) contrast(1.1)',
            }}
          >
            {/* Lens Ring Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
          </div>
        )}

        {/* Magnifying Glass Cursor Icon */}
        {isHovering && (
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: `${mousePosition.x + lensSize / 2 + 10}px`,
              top: `${mousePosition.y - lensSize / 2 - 10}px`,
            }}
          >
            <Search className="h-6 w-6 text-primary drop-shadow-lg" />
          </div>
        )}

        {/* Mobile Hint */}
        <div className="absolute bottom-4 left-4 right-4 md:hidden">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center">
            <p className="text-sm text-muted-foreground">
              Tap the button below to view the full gameplay flow
            </p>
          </div>
        </div>

        {/* Desktop Hint */}
        <div className="absolute bottom-4 left-4 right-4 hidden md:block">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center opacity-75 transition-opacity duration-300 hover:opacity-100">
            <p className="text-sm text-muted-foreground">
              Hover over the image to explore details with the magnifying lens
            </p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <Button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Download className="h-4 w-4" />
          View full gameplay flow
        </Button>
      </div>

      {/* Caption */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground font-medium mb-1">
          Interactive Gameplay Flow Diagram
        </p>
        <p className="text-xs text-muted-foreground/70">
          Detailed flowchart showing game logic, role mechanics, and decision paths
        </p>
      </div>
    </div>
  );
};

export default InteractiveFlowViewer;