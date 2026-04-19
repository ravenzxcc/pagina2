'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const BARBERS = [
  {
    name: 'Carlos',
    role: 'Senior Barber',
    experience: '12 Years Experience',
    specialty: 'Specialist in fades and beard styling',
    image: 'https://picsum.photos/seed/barber1/500/600',
  },
  {
    name: 'Mateo',
    role: 'Master Barber',
    experience: '15 Years Experience',
    specialty: 'Classic cuts and hot towel shaves',
    image: 'https://picsum.photos/seed/barber2/500/600?grayscale',
  },
  {
    name: 'Enzo',
    role: 'Style Director',
    experience: '8 Years Experience',
    specialty: 'Modern textures and precision lines',
    image: 'https://picsum.photos/seed/barber3/500/600',
  }
];

export function Team() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Meet The Masters
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display italic uppercase text-white"
          >
            Our Barbers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {BARBERS.map((barber, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-white/5 rounded-sm mx-auto max-w-sm">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-1">{barber.name}</h3>
              <p className="text-gold-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-2">{barber.role}</p>
              <p className="text-zinc-400 text-xs italic font-light mb-1">{barber.experience}</p>
              <p className="text-zinc-500 text-xs">{barber.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
