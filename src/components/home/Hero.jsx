import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

export default function Hero() {
  return (
    // Changed bg-brand-primary to bg-brand-secondary (Beige) to avoid black flash
    <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-secondary">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 pointer-events-none"
        />
        {/* Subtle Black Overlay for text readability - remains as requested */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="section-container relative z-10 text-center pt-10">
        <motion.div
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-8"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-brand-secondary font-para">
              Reliability Since 2010
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-fluid-h1 text-brand-secondary tracking-tighter uppercase font-heading leading-tight mb-8 max-w-4xl"
          >
            Distinctive Quality. <br />
            Absolute Reliability.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-fluid-body text-brand-secondary leading-relaxed font-para max-w-2xl mb-12 uppercase tracking-widest font-bold opacity-80"
          >
            Reliable homes in Coimbatore's most coveted corridors. A legacy of
            high-performance excellence.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              to="/properties"
              className="px-10 py-4 bg-brand-secondary text-brand-primary rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 font-subhead shadow-xl"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border-2 border-brand-secondary text-brand-secondary rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-secondary hover:text-brand-primary transition-all duration-700 font-subhead shadow-xl"
            >
              Connect
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[8px] uppercase tracking-[0.6em] font-bold text-brand-secondary font-para">
          Discover
        </span>
        <div className="w-[1px] h-10 bg-brand-secondary/30 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-4 bg-brand-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
