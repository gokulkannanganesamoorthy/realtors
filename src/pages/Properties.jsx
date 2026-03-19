import { useState } from 'react'
import SEO from '../components/shared/SEO'
import PageHeader from '../components/shared/PageHeader'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, ArrowRight } from 'lucide-react'

const allProperties = [
  {
    id: 1,
    title: "The Urban Zenith",
    location: "Saravanampatti",
    type: "Apartment",
    price: "₹75L - 1.2Cr",
    status: "Completed",
    image: "/assets/images/hero_house.png"
  },
  {
    id: 2,
    title: "Aura Meadows",
    location: "Kovaipudur",
    type: "Villa",
    price: "₹1.2Cr - 2.5Cr",
    status: "Ongoing",
    image: "/assets/images/hero_house.png"
  },
  {
    id: 3,
    title: "Nova Greens",
    location: "Thudiyalur",
    type: "Plot",
    price: "₹45L - 85L",
    status: "Selling Fast",
    image: "/assets/images/hero_house.png"
  },
  {
    id: 4,
    title: "Celestial Heights",
    location: "Peelamedu",
    type: "Apartment",
    price: "₹95L - 1.8Cr",
    status: "Pre-launch",
    image: "/assets/images/hero_house.png"
  }
]

export default function Properties() {
  const [filter, setFilter] = useState('All')

  const filteredProperties = filter === 'All' 
    ? allProperties 
    : allProperties.filter(p => p.type === filter)

  return (
    <>
      <SEO title="Our Curated Property Portfolio" />
      <main>
        <PageHeader 
          title="Portfolio. Pure." 
          subtitle="Explore our range of high-performance residential developments across Coimbatore."
        />
        
        <section className="py-20 bg-brand-secondary text-brand-primary">
          <div className="section-container">
            {/* Filter Bar - Compact */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 bg-white p-6 rounded-[2rem] border border-brand-primary/5 shadow-xl">
               <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  {['All', 'Apartment', 'Villa', 'Plot'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`text-[9px] font-bold uppercase tracking-[0.3em] px-6 py-2.5 rounded-full transition-all duration-500 whitespace-nowrap font-subhead ${
                        filter === cat 
                          ? 'bg-brand-primary text-brand-secondary' 
                          : 'text-brand-primary/30 hover:text-brand-primary'
                      }`}
                    >
                      {cat}s
                    </button>
                  ))}
               </div>
               <div className="relative group w-full md:w-auto">
                  <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-primary/30" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full md:w-64 pl-12 pr-6 py-3 bg-brand-secondary/10 border border-brand-primary/5 rounded-full focus:outline-none focus:border-brand-primary transition-all text-[9px] font-para uppercase tracking-widest font-bold"
                  />
               </div>
            </div>

            {/* Grid - Reduced Heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <AnimatePresence mode='popLayout'>
                  {filteredProperties.map((property) => (
                    <motion.div
                      key={property.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative overflow-hidden rounded-[3rem] bg-white text-brand-primary border border-brand-primary/5 shadow-xl h-[450px]"
                    >
                       <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                       <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-brand-secondary via-brand-secondary/95 to-transparent">
                          <div className="flex justify-between items-end">
                             <div>
                                <span className="text-[8px] uppercase tracking-[0.3em] text-brand-primary/40 font-bold mb-3 block font-para">{property.type} • {property.status}</span>
                                <h3 className="text-2xl font-heading font-bold mb-4 tracking-tighter uppercase leading-none">{property.title}</h3>
                                <div className="flex items-center gap-3 text-[9px] text-brand-primary/40 font-bold uppercase tracking-widest font-para">
                                   <MapPin size={12} className="text-brand-primary" />
                                   {property.location}
                                </div>
                             </div>
                             <div className="text-right">
                                <span className="text-lg font-para text-brand-primary font-bold">{property.price}</span>
                             </div>
                          </div>
                       </div>
                       
                       <div className="absolute top-10 right-10">
                          <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-12 group-hover:translate-x-0 cursor-pointer shadow-xl">
                             <ArrowRight size={24} />
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
