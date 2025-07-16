
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  if (!isMobile) return null;

  return (
    <>
      {/* Mobile Navbar Background */}
      <nav className="fixed top-0 left-0 right-0 z-[55] bg-white/20 dark:bg-black/20 backdrop-blur-[20px] border-b border-white/30 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Mobile Logo */}
          <Link 
            to="/" 
            className="text-lg font-outfit font-extrabold text-foreground hover:text-foreground/80 transition-colors duration-200"
          >
            PZVC
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-white/20 dark:bg-black/20 backdrop-blur-[20px] border border-white/30 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={cn(
                  "absolute inset-0 w-6 h-6 text-foreground transition-all duration-300",
                  isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X 
                className={cn(
                  "absolute inset-0 w-6 h-6 text-foreground transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-[20px] border-b border-white/30 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 ease-in-out",
          isOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        )}
      >
        {/* Navigation Content */}
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center space-y-8">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "relative text-2xl font-medium transition-all duration-300 transform",
                  "hover:text-blue-400 hover:scale-105",
                  location.pathname === link.path
                    ? 'text-blue-400'
                    : 'text-foreground',
                  isOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms'
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Subtle decoration */}
          <div 
            className={cn(
              "mt-16 w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-700",
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
            style={{
              transitionDelay: isOpen ? '600ms' : '0ms'
            }}
          />
        </div>
      </div>

      {/* Background overlay for blur effect */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default MobileNavigation;
