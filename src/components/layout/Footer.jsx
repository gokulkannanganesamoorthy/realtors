import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, ArrowUpIcon } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-secondary text-brand-primary py-20 border-t border-brand-primary/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info - Compact */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-xl font-heading font-bold tracking-tighter uppercase leading-none">
                Sky High{' '}
                <span className="opacity-40 font-normal">Developers</span>
              </span>
              <span className="text-[7px] uppercase tracking-[0.4em] font-bold text-brand-primary/40 font-para mt-1">
                Coimbatore Heritage
              </span>
            </Link>
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-primary/40 leading-relaxed max-w-xs font-para">
              Premier partner for reliable residential developments in
              Coimbatore corridors since 2010.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-brand-primary/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all duration-500"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Micro Links */}
          <div className="space-y-8">
            <h4 className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-30 font-para">
              Direct Access
            </h4>
            <div className="flex flex-col gap-4">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] hover:translate-x-2 transition-transform duration-500 font-subhead opacity-70 hover:opacity-100"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-30 font-para">
              Operations
            </h4>
            <div className="flex flex-col gap-4">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Career Access',
                'Technical Demo',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] hover:translate-x-2 transition-transform duration-500 font-subhead opacity-70 hover:opacity-100"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact - Compact */}
          <div className="space-y-8">
            <h4 className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-30 font-para">
              Registry
            </h4>
            <div className="space-y-4 font-para">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-primary/80">
                123, Avinashi Road, <br />
                Coimbatore, TN 641001
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-primary/80">
                +91 98765 43210
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-primary/80">
                hello@premiumdev.com
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[8px] uppercase tracking-[0.5em] font-bold text-brand-primary/30 font-para">
            © 2026 Sky High Developers. Pure Reliability.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[8px] uppercase tracking-[0.5em] font-bold text-brand-primary/40 hover:text-brand-primary transition-all duration-500 group font-para"
          >
            Terminal Return
            <div className="w-8 h-8 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-secondary transition-all duration-500">
              <ArrowUpIcon size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
