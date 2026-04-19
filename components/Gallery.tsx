'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const IMAGES = [
  'https://picsum.photos/seed/cut1/600/800?grayscale',
  'https://picsum.photos/seed/cut2/600/800',
  'https://picsum.photos/seed/cut3/600/800?grayscale',
  'https://picsum.photos/seed/cut4/600/800',
];

export function Gallery() {
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
            Sharp Details
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display italic uppercase text-white"
          >
            Before & After
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[3/4] group overflow-hidden bg-transparent border border-white/5 hover:border-gold-500/30 rounded-sm transition-all duration-500"
            >
              <Image
                src={src}
                alt={`Premium haircut result ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
