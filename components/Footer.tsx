import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-16 px-8 mt-24 relative overflow-hidden">
      {/* Subtle neon glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-lime rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image src="/logo/Rulers Studio Logo-1.jpg" alt="Rulers Studio Logo" width={48} height={48} className="rounded-md" />
            <span className="text-3xl font-black tracking-tighter uppercase text-super-glow-lime">
              Rulers<span className="text-brand-lime">Studio</span>
            </span>
          </Link>
          <p className="text-white/60 font-light max-w-sm mb-8">
            We engineer desire through cinematic AI commercials and brand experiences that refuse to look ordinary.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-brand-lime hover:text-brand-lime transition-colors text-xs font-bold">
              IG
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-brand-lime hover:text-brand-lime transition-colors text-xs font-bold">
              X
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:border-brand-lime hover:text-brand-lime transition-colors text-xs font-bold">
              LI
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Navigation</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="/" className="hover:text-brand-lime transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-lime transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-lime transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-brand-lime transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-center gap-2 group cursor-pointer hover:text-brand-lime transition-colors">
              hello@rulers.studio <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li>+1 (555) 019-2837</li>
            <li className="pt-4 text-white/40">
              123 Innovation Drive<br />
              Cyber City, CA 90210
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} NexusAds Agency. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
