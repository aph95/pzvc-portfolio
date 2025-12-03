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
      {/* Desktop Navigation - Floating Pill Style */}
      {!isMobile && (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-1 px-2 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 shadow-lg">
            <Link 
              to="/" 
              className="px-4 py-1.5 text-sm font-outfit font-bold text-foreground hover:text-foreground/80 transition-colors duration-200"
            >
              PZVC
            </Link>
            
            <div className="w-px h-4 bg-white/20 dark:bg-white/10" />
            
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-white/20 dark:bg-white/10 text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
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
