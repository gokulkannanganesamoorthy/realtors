import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'

const projects = [
  {
    title: "Urban Zenith",
    location: "Saravanampatti",
    type: "Apartments",
    image: "/assets/images/hero_house.png", 
    status: "Done",
    price: "₹75L+"
  },
  {
    title: "Aura Meadows",
    location: "Kovaipudur",
    type: "Villas",
    image: "/assets/images/hero_house.png",
    status: "Live",
    price: "₹1.2Cr+"
  },
  {
    title: "Nova Greens",
    location: "Thudiyalur",
    type: "Plots",
    image: "/assets/images/hero_house.png",
    status: "Fast",
    price: "₹45L+"
  }
]

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Showcase() {
  return (
    <section className="py-24 bg-brand-secondary text-brand-primary">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16 gap-6"
        >
          <div>
             <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-brand-primary/40 mb-3 block font-para">Featured Assets</span>
             <h2 className="text-fluid-h2 font-heading font-bold leading-none tracking-tighter uppercase mb-2">
               Curated Spaces.
             </h2>
             <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-primary/30 font-subhead">Coimbatore corridors.</p>
          </div>
          <Link to="/properties" className="group flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.3em] hover:opacity-100 transition-all duration-500 text-brand-primary/60 font-subhead">
            Portfolio
            <div className="w-8 h-8 rounded-full border border-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-secondary transition-all duration-500">
               <ArrowUpRight size={14} />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="group relative h-[380px] rounded-[2.5rem] overflow-hidden bg-white border border-brand-primary/5 shadow-xl"
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-secondary via-brand-secondary/95 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[7.5px] uppercase tracking-[0.3em] text-brand-primary/40 mb-3 block font-bold font-para">{project.type}</span>
                    <h3 className="text-xl font-heading font-bold mb-2 tracking-tighter uppercase text-brand-primary leading-none">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-[7.5px] text-brand-primary/40 uppercase tracking-widest font-bold font-para">
                      <MapPin size={10} className="text-brand-primary" />
                      {project.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[14px] font-para text-brand-primary font-bold tracking-tighter">{project.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
