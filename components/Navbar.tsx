'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none"
    >
      <div className="container mx-auto flex justify-between items-center pointer-events-auto">
        <div className="font-display font-black text-xl tracking-widest uppercase" data-cursor="HOME">
          Rulers Studio
        </div>
        
        <button 
          data-cursor="MENU"
          className="font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-lime transition-colors"
        >
          <div className="w-8 h-px bg-current"></div>
          Menu
        </button>
      </div>
    </motion.header>
  );
}
