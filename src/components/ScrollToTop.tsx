import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a hash (like #contact)
    if (!location.hash) {
      // Reset scroll position instantly without animation
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;