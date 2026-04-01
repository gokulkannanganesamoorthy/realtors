import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import { motion } from 'framer-motion';
import { Home, Briefcase, PencilRuler, ShieldCheck } from 'lucide-react';

const serviceList = [
  {
    title: 'Residential Development',
    description: 'Phase-based complex development with heritage precision.',
    icon: Home,
    features: ['Performance architecture', 'Efficient space planning'],
  },
  {
    title: 'Project Collections',
    description: 'Signature residential units built with structural integrity.',
    icon: PencilRuler,
    features: ['Customizable layouts', 'Modern landscaping'],
  },
  {
    title: 'Property Management',
    description: 'Comprehensive post-purchase support and site maintenance.',
    icon: Briefcase,
    features: ['Systematic checks', 'Value appreciation'],
  },
  {
    title: 'Technical Advisory',
    description: 'Expert consultation for design, budget, and delivery.',
    icon: ShieldCheck,
    features: ['Feasibility studies', 'Project coordination'],
  },
];

export default function Services() {
  return (
    <>
      <SEO title="Our Specialized Real Estate Services" />
      <main>
        <PageHeader
          title="Expertise. Power."
          subtitle="Real estate solutions for high-performance homeowners."
        />

        <section className="py-20 bg-brand-secondary text-brand-primary">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceList.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group bg-white p-8 rounded-[2rem] border border-brand-primary/5 hover:border-brand-primary transition-all duration-700 shadow-xl"
                >
                  <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-all duration-700 shadow-md">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-heading font-bold mb-3 text-brand-primary uppercase tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-primary/40 mb-6 leading-relaxed font-para max-w-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {service.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="text-[7.5px] text-brand-primary/60 font-bold uppercase tracking-[0.3em] font-para flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full opacity-30" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPACT STATS SECTION - BEIGE ONLY */}
        <section className="py-20 bg-brand-secondary text-brand-primary text-center px-6 border-t border-brand-primary/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Design', val: 'A+' },
              { label: 'Speed', val: '2x' },
              { label: 'Stability', val: '100%' },
              { label: 'Heritage', val: '2010' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-brand-primary/5 shadow-sm"
              >
                <h4 className="text-xl font-heading font-bold text-brand-primary mb-1 tracking-tighter uppercase leading-none">
                  {stat.val}
                </h4>
                <p className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-30 font-para leading-none">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
