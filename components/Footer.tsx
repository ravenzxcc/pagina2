'use client';

import { Scissors } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display italic font-bold tracking-tighter text-white">
              DiRasche
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 ml-2">Caballito, BA</span>
          </div>
          
          <div className="flex gap-6 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Location</a>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            {/* Social Placeholders */}
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <p>&copy; {new Date().getFullYear()} DiRasche Caballito. Professional Grooming.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
