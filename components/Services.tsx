'use client';

import { motion } from 'motion/react';
import { Scissors, Sparkles, User, Clock } from 'lucide-react';

const SERVICES = [
  {
    id: 'haircut',
    name: 'Executive Haircut',
    description: 'A precision haircut tailored to your face shape and lifestyle. Includes consultation, wash, style, and neck shave.',
    price: '$20', // Placeholder price
    duration: '45 Min',
    icon: Scissors,
  },
  {
    id: 'fade',
    name: 'Premium Fade',
    description: 'Flawless zero or skin fades using modern barbering techniques. Sharp, clean, and perfectly blended.',
    price: '$22',
    duration: '45 Min',
    icon: Sparkles,
  },
  {
    id: 'beard',
    name: 'Beard Sculpting',
    description: 'Expert beard trimming and shaping to define your jawline. Finished with straight razor line-up and beard oils.',
    price: '$15',
    duration: '30 Min',
    icon: User,
  },
  {
    id: 'package',
    name: 'The DiRasche Package',
    description: 'Our signature service. The Executive Haircut combined with Beard Sculpting and a relaxing hot towel treatment.',
    price: '$35',
    duration: '75 Min',
    icon: Clock,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="md:w-1/3 sticky top-24">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
            >
              Grooming Excellence
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold uppercase text-white mb-6"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mb-8 leading-relaxed"
            >
              We combine traditional barbering techniques with modern style. Experience premium grooming where every detail is perfected to elevate your confidence.
            </motion.p>
            <motion.a
              href="#booking"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block px-6 py-3 border border-gold-500 text-gold-500 uppercase font-bold text-sm tracking-wide hover:bg-gold-500 hover:text-zinc-950 transition-colors"
            >
              View Full Menu
            </motion.a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass p-8 rounded-sm transition-all"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 group-hover:text-gold-500 group-hover:border-gold-500/50 transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display italic uppercase text-white flex justify-between items-end mb-3">
                  <span>{service.name}</span>
                  <span className="text-xl font-mono not-italic text-gold-500">{service.price}</span>
                </h3>
                
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{service.duration}</span>
                </div>
                
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
