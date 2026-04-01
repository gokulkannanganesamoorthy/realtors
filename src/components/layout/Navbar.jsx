import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/properties' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'py-4 bg-brand-secondary/95 backdrop-blur-md shadow-sm border-b border-brand-primary/5'
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Brand Logo - Compact */}
        <Link to="/" className="flex flex-col group py-1">
          <span
            className={`text-xl font-heading font-bold tracking-tighter transition-colors duration-500 uppercase leading-none ${
              !isScrolled && isHome
                ? 'text-brand-secondary'
                : 'text-brand-primary'
            }`}
          >
            Sky High <span className="opacity-40 font-normal">Developers</span>
          </span>
          <div
            className={`h-[1px] w-0 bg-brand-secondary group-hover:w-full transition-all duration-500 mb-0.5 ${
              !isScrolled && isHome ? 'bg-brand-secondary' : 'bg-brand-primary'
            }`}
          />
          <span
            className={`text-[7px] uppercase tracking-[0.4em] font-bold font-para transition-opacity duration-500 ${
              !isScrolled && isHome
                ? 'text-brand-secondary/40'
                : 'text-brand-primary/40'
            }`}
          >
            Coimbatore Heritage
          </span>
        </Link>

        {/* Desktop Navigation - Micro Scale */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[9px] font-bold uppercase tracking-[0.4em] font-subhead transition-all duration-500 hover:tracking-[0.6em] relative group ${
                  !isScrolled && isHome
                    ? 'text-brand-secondary/60 hover:text-brand-secondary'
                    : 'text-brand-primary/60 hover:text-brand-primary'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                    !isScrolled && isHome
                      ? 'bg-brand-secondary'
                      : 'bg-brand-primary'
                  }`}
                />
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className={`px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] transition-all duration-700 font-subhead border ${
              !isScrolled && isHome
                ? 'border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary'
                : 'border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary'
            }`}
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors duration-500 ${
            !isScrolled && isHome
              ? 'text-brand-secondary'
              : 'text-brand-primary'
          }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Ultra Compact Light View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-secondary border-b border-brand-primary/10 shadow-2xl py-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-heading font-bold text-brand-primary uppercase tracking-tighter flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"
                  />
                </Link>
              ))}
              <div className="h-px bg-brand-primary/5 my-2" />
              <Link
                to="/contact"
                className="w-full py-4 bg-brand-primary text-brand-secondary text-center rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] font-subhead"
              >
                Inquire Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
