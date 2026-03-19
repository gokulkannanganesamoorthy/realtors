import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Arjun Krishnan",
    role: "IT Pro",
    location: "Saravanampatti",
    text: "Reliable performance redefined in Coimbatore.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
  },
  {
    name: "Deepika R",
    role: "Director",
    location: "Kovaipudur",
    text: "Attention to detail that exceeds all promises.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika"
  },
  {
    name: "Senthil Kumar",
    role: "Ops Head",
    location: "Thudiyalur",
    text: "Transparent process from day one.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Senthil"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-secondary overflow-hidden text-brand-primary border-t border-brand-primary/5">
      <div className="section-container">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-brand-primary/40 mb-3 block font-para">Validation</span>
          <h2 className="text-fluid-h2 font-heading font-bold text-brand-primary leading-tight uppercase tracking-tighter">
            Shared by our <br />
            <span className="opacity-40">Community.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 bg-white rounded-[2rem] border border-brand-primary/5 hover:border-brand-primary transition-all duration-700 shadow-xl group"
            >
              <Quote className="absolute top-6 right-6 text-brand-primary/5" size={32} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-primary/5 border border-brand-primary/5 flex items-center justify-center p-0.5">
                  <img src={test.image} alt={test.name} className="w-full h-full object-cover rounded-[0.8rem]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-primary text-base uppercase tracking-tighter leading-none">{test.name}</h4>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-brand-primary/40 font-bold font-para mt-1">
                    {test.role} • {test.location}
                  </p>
                </div>
              </div>

              <p className="text-brand-primary/60 leading-relaxed font-para text-[10px] uppercase font-bold tracking-widest opacity-80">
                "{test.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
