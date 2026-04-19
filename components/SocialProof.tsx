'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Matias R.',
    role: 'Business Executive',
    text: "Best haircut I've had in Buenos Aires. Highly professional, and the attention to detail is unmatched. Finding a reliable barber is tough, but DiRasche nails it every time.",
    image: 'https://picsum.photos/seed/matias/150/150'
  },
  {
    id: 2,
    name: 'Julian C.',
    role: 'Software Engineer',
    text: "Professional service and perfect attention to detail. The atmosphere is premium and relaxing. I finally found a barber I trust in Caballito. 100% recommended.",
    image: 'https://picsum.photos/seed/julian/150/150'
  },
  {
    id: 3,
    name: 'Federico M.',
    role: 'Local Resident',
    text: "Top-tier experience from the moment you walk in. The hot towel shave is a game-changer. Excellent service, clean style, and real confidence boost.",
    image: 'https://picsum.photos/seed/federico/150/150'
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Real Results. Real Confidence.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display italic uppercase text-white"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800 group-hover:text-gold-500/20 transition-colors" />
              
              <div className="flex gap-1 text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-8 italic relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-sm text-zinc-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
