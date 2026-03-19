import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle, bgImage = "/assets/images/hero_house.png" }) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-secondary border-b-4 border-brand-primary">
      {/* Very subtle image if provided, but mostly light bg */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-10 contrast-125"
        />
      </div>

      <div className="section-container relative z-10 text-center text-brand-primary pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-brand-primary/40 mb-8 block font-para">Premium Developers</span>
          <h1 className="text-fluid-h1 font-heading font-bold mb-8 tracking-tighter uppercase text-brand-primary leading-none">{title}</h1>
          <p className="text-lg text-brand-primary/60 max-w-2xl mx-auto font-para leading-relaxed font-bold">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
