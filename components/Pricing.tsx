'use client';

import { motion } from 'motion/react';

const PACKAGES = [
  {
    name: 'The Essential Cut',
    price: '$20',
    description: 'Precision haircut with wash and hot towel neck shave.',
    features: ['Consultation', 'Haircut', 'Wash & Style', 'Neck Shave'],
    highlighted: false,
  },
  {
    name: 'The DiRasche Experience',
    price: '$35',
    description: 'Our premium signature package for the modern gentleman.',
    features: ['Premium Haircut', 'Beard Sculpting', 'Hot Towel Treatment', 'Styling Product'],
    highlighted: true,
  },
  {
    name: 'Executive Grooming',
    price: '$45',
    description: 'The ultimate luxury grooming session to look your absolute best.',
    features: ['Haircut & Wash', 'Full Straight Razor Shave', 'Facial Cleansing', 'Premium Drink'],
    highlighted: false,
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden text-center z-10" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-zinc-900/30 blur-[100px] rounded-full z-[-1]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Transparent Value
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold uppercase text-white mb-6"
          >
            Premium Pricing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-8 border rounded-sm glass ${pkg.highlighted ? 'border-gold-500 shadow-[0_0_40px_rgba(197,160,89,0.15)] transform md:-translate-y-4' : 'border-white/5'} flex flex-col text-left transition-transform duration-300 relative`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-gradient text-[#050505] text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-4 rounded-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display italic uppercase text-white mb-2">{pkg.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10 font-light">{pkg.description}</p>
              
              <div className="text-4xl font-mono font-bold text-gold-500 mb-8 pb-8 border-b border-white/5">
                {pkg.price}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex flex-row items-center gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#booking"
                className={`block text-center py-4 uppercase font-bold text-xs tracking-widest transition-all rounded-sm ${pkg.highlighted ? 'gold-gradient text-bg-dark hover:opacity-90' : 'bg-transparent border border-zinc-700 text-white hover:border-white'}`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
