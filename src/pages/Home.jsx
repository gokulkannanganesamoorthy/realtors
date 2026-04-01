import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Showcase from '../components/home/Showcase';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  return (
    <>
      <SEO title="Sky High Developers | Coimbatore's Most Reliable Home Builders" />
      <main className="bg-brand-secondary overflow-x-hidden">
        <Hero />

        {/* Quick About - Compact & Fluid */}
        <section className="py-20 bg-brand-secondary text-brand-primary">
          <div className="section-container">
            <motion.div {...slideUp} className="max-w-4xl">
              <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-brand-primary/30 mb-6 block font-para">
                Identity
              </span>
              <h2 className="text-fluid-h1 font-heading font-bold mb-8 uppercase tracking-tighter leading-none">
                Building with absolute <br />
                <span className="opacity-40">Architectural Honor.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary/50 font-para leading-relaxed opacity-70">
                  Reliability meets refined living. Every detail is a calculated
                  effort toward performance architecture.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] font-subhead"
                  >
                    Full Heritage
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Features />
        <Showcase />
        <Testimonials />
      </main>
    </>
  );
}
