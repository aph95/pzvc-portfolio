import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ZoomIn, Download, X, Move, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InteractiveGameFlowViewerProps {
  imageUrl: string;
  alt: string;
  downloadUrl?: string;
}

const InteractiveGameFlowViewer: React.FC<InteractiveGameFlowViewerProps> = ({
  imageUrl,
  alt,
  downloadUrl
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset zoom and position when lightbox opens
  useEffect(() => {
    if (isLightboxOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isLightboxOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setIsLightboxOpen(false);
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, scale]);

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev * 1.2, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.5), 5));
  }, []);

  // Touch handling for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    }
  }, [position]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  }, [isDragging, dragStart]);

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'patient-zero-gameplay-flow.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-4">
      {/* Preview Image */}
      <div className="relative group">
        <div 
          className="relative cursor-pointer overflow-hidden rounded-lg border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto max-h-96 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center text-white">
              <ZoomIn className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">Click to explore full flow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      {downloadUrl && (
        <div className="flex justify-center">
          <Button
            onClick={handleDownload}
            variant="outline"
            className="group border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Download className="h-4 w-4 mr-2" />
            View full gameplay flow
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button
              variant="secondary"
              size="icon"
              onClick={handleZoomOut}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ZoomIn className="h-4 w-4 scale-x-[-1]" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={handleZoomIn}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={resetZoom}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            {downloadUrl && (
              <Button
                variant="secondary"
                size="icon"
                onClick={handleDownload}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setIsLightboxOpen(false)}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Zoom info */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm">
              {Math.round(scale * 100)}%
            </div>
          </div>

          {/* Image container */}
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden cursor-move flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            <img
              ref={imageRef}
              src={imageUrl}
              alt={alt}
              className="max-w-none transition-transform duration-100 select-none"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              draggable={false}
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-md text-sm text-center">
              <p className="mb-1">
                <span className="hidden md:inline">Scroll to zoom • Drag to pan • </span>
                <span className="md:hidden">Pinch to zoom • Drag to pan • </span>
                Press ESC to close
              </p>
              <p className="text-xs opacity-75">
                <span className="hidden md:inline">+ / - keys for zoom • 0 to reset</span>
                <span className="md:hidden">Tap controls above for zoom/reset</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveGameFlowViewer;