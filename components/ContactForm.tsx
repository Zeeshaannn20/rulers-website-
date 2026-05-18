'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-black text-white py-32 overflow-hidden relative border-t-2 border-white/10">
      <div className="absolute inset-0 bg-brand-lime mix-blend-multiply opacity-5 pointer-events-none film-grain"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-black text-6xl md:text-[6rem] uppercase tracking-tighter leading-[0.85] mb-6"
          >
            Ready to <span className="text-brand-lime text-glow-lime">Scale?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-white/50 text-lg max-w-lg mx-auto"
          >
            Initiate protocol. Share your brand parameters below and our growth engineers will synthesize a custom ROAS blueprint.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-lime/10 border-2 border-brand-lime p-12 text-center rounded-sm"
          >
            <div className="font-mono text-brand-lime text-xl uppercase tracking-widest font-bold mb-4">
              ROAS PROTOCOL: ENGAGED
            </div>
            <p className="font-sans text-white text-lg">
              Data received. Our performance directors are compiling your strategy blueprint. Expect transmission shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-md rounded-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Full Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-brand-lime transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Work Email</label>
                <input required type="email" className="w-full bg-black/50 border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-brand-lime transition-colors" placeholder="john@brand.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Brand / Company</label>
                <input required type="text" className="w-full bg-black/50 border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-brand-lime transition-colors" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Monthly Ad Spend</label>
                <select className="w-full bg-black/50 border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-brand-lime transition-colors appearance-none cursor-pointer">
                  <option>&lt; $10k</option>
                  <option>$10k - $50k</option>
                  <option>$50k - $200k</option>
                  <option>$200k+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Campaign Objectives</label>
              <textarea required rows={4} className="w-full bg-black/50 border border-white/20 p-4 text-white font-sans focus:outline-none focus:border-brand-lime transition-colors resize-none" placeholder="Describe your current CPA bottlenecks and scale targets..."></textarea>
            </div>

            <button 
              type="submit"
              data-cursor="SUBMIT"
              className="w-full group relative p-6 bg-brand-lime text-black font-mono font-bold uppercase tracking-widest text-lg overflow-hidden mt-4"
            >
              <span className="relative z-10 flex items-center justify-center gap-4 transition-colors duration-300 group-hover:text-white">
                Initialize Sequence
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
