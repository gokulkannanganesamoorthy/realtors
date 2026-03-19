import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component to reset scroll position on route changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset browser scroll
    window.scrollTo(0, 0);
    
    // Also reset Lenis scroll if accessible (it hooks into window automatically usually)
    // but just to be sure we can trigger a scroll to top.
    const scrollHandler = () => {
       window.scrollTo(0, 0);
    };
    
    // Some browsers or Lenis might need a small delay
    const timer = setTimeout(scrollHandler, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
