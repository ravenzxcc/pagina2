'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/barber-chair/1920/1080?blur=1"
          alt="Premium Barbershop Interior"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-16 lg:pt-0">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gold-500 mb-6 font-medium tracking-wider text-sm uppercase"
          >
            <MapPin className="w-4 h-4" />
            <span>Caballito, Buenos Aires</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[80px] font-display italic text-white leading-[0.85] mb-6 uppercase"
          >
            Buenos Aires&apos; <br className="hidden sm:block" />
            <span className="text-[#c5a059]">Most Trusted</span> Barbershop
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl font-light leading-relaxed"
          >
            Professional haircuts and grooming services designed for modern men who value style, precision, and confidence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#booking"
              className="px-8 py-4 gold-gradient text-[#050505] font-bold uppercase tracking-widest text-sm shadow-[0_10px_30px_-10px_rgba(197,160,89,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Appointment
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 border border-zinc-800 text-zinc-200 font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-all duration-300"
            >
              Chat on WhatsApp
            </Link>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-8 border-t border-zinc-800 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-white font-bold block">4.9/5 Rating</span>
                <span className="text-zinc-500">From 500+ Reviews</span>
              </div>
            </div>
            
            <div className="w-px h-10 bg-zinc-800 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="text-3xl font-display font-bold text-gold-500">10+</div>
              <div className="text-sm">
                <span className="text-white font-bold block">Years of</span>
                <span className="text-zinc-500">Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
