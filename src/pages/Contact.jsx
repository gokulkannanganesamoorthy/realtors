import SEO from '../components/shared/SEO'
import PageHeader from '../components/shared/PageHeader'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <SEO title="Get in Touch with our Concierge" />
      <main>
        <PageHeader 
          title="Direct. Connect." 
          subtitle="Our dedicated team is ready to assist you in securing the perfect address in Coimbatore."
        />
        
        <section className="py-20 bg-brand-secondary text-brand-primary">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information - COMPACT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                   <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-brand-primary/40 mb-3 block font-para">Contact</span>
                   <h2 className="text-fluid-h2 font-heading font-bold text-brand-primary mb-5 leading-none uppercase tracking-tighter">The Project <br /> Starts Here.</h2>
                   <p className="text-brand-primary/60 font-para leading-relaxed max-w-sm text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                     Ready for a site visit or technical consultation in Coimbatore.
                   </p>
                </div>

                <div className="space-y-6">
                   {[
                     { icon: Phone, title: "Line", info: "+91 98765 43210" },
                     { icon: Mail, title: "Email", info: "hello@premiumdev.com" },
                     { icon: MapPin, title: "Office", info: "Avinashi Road, Coimbatore" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-brand-secondary shadow-lg">
                           <item.icon size={16} strokeWidth={1.5} />
                        </div>
                        <div>
                           <h4 className="font-heading font-bold text-brand-primary mb-0.5 text-[10px] uppercase tracking-[0.2em]">{item.title}</h4>
                           <p className="text-base font-para text-brand-primary font-bold tracking-tighter">{item.info}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* Inquiry Form - LIGHT VERSION WITH BLACK BORDERS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-brand-primary border border-brand-primary/10"
              >
                 <form className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 ml-2 font-para">Name</label>
                          <input type="text" placeholder="Entry name" className="w-full px-6 py-3 bg-transparent border-2 border-brand-primary rounded-[1rem] focus:outline-none focus:bg-brand-secondary/5 transition-all font-para text-[10px] text-brand-primary font-bold uppercase tracking-widest" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 ml-2 font-para">Phone</label>
                          <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-3 bg-transparent border-2 border-brand-primary rounded-[1rem] focus:outline-none focus:bg-brand-secondary/5 transition-all font-para text-[10px] text-brand-primary font-bold uppercase tracking-widest" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 ml-2 font-para">Email</label>
                       <input type="email" placeholder="email@address.com" className="w-full px-6 py-3 bg-transparent border-2 border-brand-primary rounded-[1rem] focus:outline-none focus:bg-brand-secondary/5 transition-all font-para text-[10px] text-brand-primary font-bold uppercase tracking-widest" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 ml-2 font-para">Project</label>
                       <select className="w-full px-6 py-3 bg-transparent border-2 border-brand-primary rounded-[1rem] focus:outline-none focus:bg-brand-secondary/5 transition-all font-para text-[10px] text-brand-primary appearance-none cursor-pointer font-bold uppercase tracking-widest">
                          <option>All Developments</option>
                          <option>Urban Zenith</option>
                          <option>Aura Meadows</option>
                          <option>Nova Greens</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 ml-2 font-para">Requirement</label>
                       <textarea rows="3" placeholder="Brief technical requirement" className="w-full px-6 py-3 bg-transparent border-2 border-brand-primary rounded-[1rem] focus:outline-none focus:bg-brand-secondary/5 transition-all font-para text-[10px] text-brand-primary resize-none font-bold uppercase tracking-widest"></textarea>
                    </div>
                    <button className="w-full group flex items-center justify-center gap-4 py-5 bg-brand-primary text-brand-secondary rounded-full font-bold uppercase tracking-[0.5em] text-[9px] hover:scale-[0.98] transition-all duration-500 font-subhead shadow-xl">
                       Dispatch
                       <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
