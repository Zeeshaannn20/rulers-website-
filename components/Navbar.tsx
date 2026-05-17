'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo/Rulers Studio Logo-1.jpg" alt="Rulers Studio Logo" width={40} height={40} className="rounded-md" />
        <span className="text-xl font-black tracking-tighter uppercase text-super-glow-lime hidden md:block">
          Rulers<span className="text-brand-lime">Studio</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
              pathname === link.path ? 'text-brand-lime text-glow-lime' : 'text-white/70 hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact" 
          className="ml-4 px-6 py-2 border border-brand-lime text-brand-lime font-bold uppercase text-xs tracking-widest rounded-full hover:bg-brand-lime hover:text-black transition-all shadow-[0_0_15px_rgba(215,255,0,0.3)]"
        >
          Book Call
        </Link>
      </div>

      {/* Mobile Nav Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 flex flex-col p-8 gap-6 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold uppercase tracking-widest ${
                pathname === link.path ? 'text-brand-lime' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
