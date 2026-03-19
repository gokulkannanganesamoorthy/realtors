import { motion } from 'framer-motion'
import { Shield, Clock, Compass, Zap } from 'lucide-react'

const features = [
  {
    title: "Absolute Reliability",
    desc: "15+ years of delivering on our heritage promises.",
    icon: Shield
  },
  {
    title: "Time Precision",
    desc: "Rigorous schedules with multi-check transparency.",
    icon: Clock
  },
  {
    title: "Urban Vision",
    desc: "Strategic selection of Coimbatore's top corridors.",
    icon: Compass
  },
  {
    title: "High Performance",
    desc: "Engineering in each brick for permanent stability.",
    icon: Zap
  }
]

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Features() {
  return (
    <section className="py-20 bg-brand-secondary text-brand-primary border-t border-brand-primary/5">
      <div className="section-container">
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="group p-8 bg-white rounded-[2rem] border border-brand-primary/5 hover:border-brand-primary transition-all duration-700 shadow-xl"
            >
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-all duration-700 shadow-md">
                <feature.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-heading font-bold mb-3 text-brand-primary uppercase tracking-tighter leading-none">
                {feature.title}
              </h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-primary/40 leading-relaxed font-para">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
