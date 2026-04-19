'use client';

import { motion } from 'motion/react';

export function FinalCta() {
  return (
    <section className="py-32 font-display italic relative overflow-hidden bg-zinc-900" id="booking">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080?grayscale')] opacity-10 mix-blend-multiply" />
      <div className="absolute inset-0 gold-gradient opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl uppercase text-white mb-6 leading-[0.85]"
          >
            Don&apos;t Settle For Less.<br /><span className="text-gold-500">Book Today.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-300 font-sans not-italic font-light mb-12 max-w-2xl mx-auto"
          >
            Spaces fill up fast. Secure your spot now and experience the best grooming in Caballito.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center font-sans tracking-widest uppercase font-bold text-sm"
          >
            <a 
              href="#"
              className="px-10 py-5 gold-gradient text-[#050505] shadow-2xl hover:opacity-90 transition-all rounded-sm"
            >
              Book Online Now
            </a>
            <a 
              href="#"
              className="px-10 py-5 glass border border-white/20 text-white hover:bg-white/10 transition-colors rounded-sm"
            >
              Contact via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
