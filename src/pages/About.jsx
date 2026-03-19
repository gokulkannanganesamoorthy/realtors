import SEO from '../components/shared/SEO'
import PageHeader from '../components/shared/PageHeader'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <SEO title="Our Heritage & Vision" />
      <main>
        <PageHeader 
          title="Heritage. Pure." 
          subtitle="Crafting reliable homes across Coimbatore since 2010."
        />
        
        <section className="py-20 bg-brand-secondary text-brand-primary">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-brand-primary/10 shadow-xl">
                   <img src="/assets/images/hero_house.png" alt="Our Work" className="w-full h-full object-cover contrast-110" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-primary/40 block font-para">History</span>
                <h2 className="text-fluid-h2 font-heading font-bold text-brand-primary leading-none uppercase tracking-tighter">
                  A Legacy of <br />
                  <span className="opacity-40">Reliability.</span>
                </h2>
                <div className="space-y-6 text-brand-primary/60 font-para leading-relaxed text-sm uppercase tracking-widest font-bold opacity-70 max-w-sm">
                  <p>
                    Premium Developers has been at the forefront of Coimbatore's residential landscape.
                  </p>
                  <p>
                    We specialize in high-performance properties that don't compromise on architecture.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                   <div className="border-l-2 border-brand-primary pl-6">
                      <h4 className="text-2xl font-heading font-bold text-brand-primary tracking-tighter uppercase leading-none">15+</h4>
                      <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-brand-primary/40 font-para">Years</p>
                   </div>
                   <div className="border-l-2 border-brand-primary pl-6">
                      <h4 className="text-2xl font-heading font-bold text-brand-primary tracking-tighter uppercase leading-none">500+</h4>
                      <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-brand-primary/40 font-para">Families</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LIGHT VERSION OF VALUES SECTION */}
        <section className="py-20 bg-brand-secondary text-brand-primary text-center px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {[
                  { title: "Transparency", desc: "No hidden costs. Just clear, honest communication." },
                  { title: "Innovation", desc: "Modern construction tech for sustainable living." },
                  { title: "Quality", desc: "Rigorous checks at every stage of construction." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-6 group bg-white p-10 rounded-[2.5rem] border border-brand-primary/5 hover:border-brand-primary transition-all duration-700 shadow-xl">
                     <h3 className="text-lg font-heading font-bold text-brand-primary uppercase tracking-tighter">{item.title}</h3>
                     <p className="text-xs text-brand-primary/60 leading-relaxed font-para font-bold uppercase tracking-widest opacity-60">{item.desc}</p>
                  </div>
                ))}
             </div>
        </section>
      </main>
    </>
  )
}
