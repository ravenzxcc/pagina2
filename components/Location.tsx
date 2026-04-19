'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
            >
              Visit DiRasche
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display italic uppercase text-white mb-8"
            >
              Conveniently Located in Caballito
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Address</h4>
                  <p className="text-zinc-400 font-light">Av. Rivadavia 4800<br />Caballito, Buenos Aires, Argentina<br />(Easily accessible via Subte Line A)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Working Hours</h4>
                  <p className="text-zinc-400 font-light">Mon - Sat: 09:00 - 21:00<br />Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Contact</h4>
                  <p className="text-zinc-400 font-light">+54 9 11 1234-5678</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto min-h-[400px] w-full glass rounded-sm relative overflow-hidden"
          >
            {/* Visual placeholder for Map since we can't reliably embed a dynamic one without an API key */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800?grayscale')] opacity-30 bg-cover bg-center" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-[#050505]/40 backdrop-blur-sm">
              <MapPin className="w-12 h-12 text-gold-500 mb-4" />
              <h3 className="text-2xl font-bold uppercase text-white mb-2">View on Maps</h3>
              <a href="#" className="inline-block px-6 py-3 border border-gold-500 text-gold-500 uppercase font-bold text-xs tracking-widest hover:bg-gold-500 hover:text-bg-dark transition-colors rounded-sm">
                Get Directions
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
