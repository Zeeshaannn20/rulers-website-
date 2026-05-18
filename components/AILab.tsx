'use client';

import { motion } from 'framer-motion';

const ARTICLES = [
  { date: 'MAY 2026', title: 'The Fall of Traditional Render Farms', category: 'THOUGHT PIECE' },
  { date: 'APR 2026', title: 'Sora vs Gen-3: The Cinematic Showdown', category: 'BENCHMARK' },
  { date: 'MAR 2026', title: 'How We Built the Rolex AI Campaign', category: 'CASE STUDY' }
];

export default function AILab() {
  return (
    <section className="bg-rich-black text-white py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-20 border-b border-white/20 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter"
          >
            The <span className="text-brand-lime">Lab</span>
          </motion.h2>
          <a href="#" className="font-mono text-sm uppercase tracking-widest hover:text-brand-lime transition-colors hidden md:block">
            View All Dispatches
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group border border-white/10 bg-[#050505] hover:border-brand-lime transition-colors block"
              data-cursor="READ"
            >
              <div className="aspect-[4/3] bg-black relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-brand-lime/5 group-hover:bg-brand-lime/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-6xl text-white/5 group-hover:text-white/10 transition-colors">
                  RULERS
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs text-brand-lime font-bold uppercase tracking-widest">{article.category}</span>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-widest">{article.date}</span>
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight leading-tight group-hover:text-brand-lime transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
