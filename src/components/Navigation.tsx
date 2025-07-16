
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-[20px] border-b border-white/30 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="text-xl font-outfit font-extrabold text-foreground hover:text-foreground/80 transition-colors duration-200"
              >
                PZVC
              </Link>
              
              <div className="flex items-center space-x-8">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-blue-400'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute inset-x-0 -bottom-px h-px bg-blue-400"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  );
};

export default Navigation;
