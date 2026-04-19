'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const BENEFITS = [
  "Master-level Barbers with Years of Experience",
  "Premium, High-end Grooming Tools",
  "Impeccable Hygiene & Sanitation Standards",
  "Modern & Classic Haircut Techniques",
  "Fast, Efficient, and Punctual Service",
  "Comfortable, Luxury-inspired Atmosphere",
  "Unmatched Attention to Detail",
  "Consistent Quality on Every Visit"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full hidden lg:block border border-white/5 rounded-sm overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/razor/800/1000?grayscale"
              alt="Professional Barbershop Tools"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#050505]/40" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-600/20 blur-3xl rounded-full" />
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
            >
              The DiRasche Standard
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display italic uppercase text-white mb-8"
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mb-10 text-lg leading-relaxed"
            >
              We don&apos;t just cut hair; we craft confidence. Our barbershop is designed for men who demand excellence, precision, and a superior grooming experience in Caballito.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {BENEFITS.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.05) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
