'use client';

import { motion } from 'framer-motion';

export default function AIEngine() {
  return (
    <section className="bg-black text-white pt-12 pb-24 border-y-2 border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-brand-lime mix-blend-multiply opacity-5 pointer-events-none film-grain"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-[0.9]">
              The Marketing <br />
              <span className="text-brand-lime text-glow-lime">Engine</span>
            </h2>
            <p className="font-sans text-lg text-white/70 max-w-lg">
              Behind every conversion is a performance engine trained on millions of data points. We don't just generate creative; we build scaling algorithms designed to monopolize attention.
            </p>
          </motion.div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {['Dynamic Audience Hyper-Targeting', 'Automated Creative Optimization', 'ROAS Maximization Playbooks', 'Cinematic Content Synthesis at Scale'].map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-6 border border-white/10 p-6 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-3 h-3 rounded-full bg-brand-lime shadow-[0_0_10px_rgba(215,255,0,0.8)]"></div>
                <div className="font-mono font-bold uppercase tracking-widest text-sm text-white/90">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Abstract Pipeline Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-64 md:h-96 border-2 border-white/10 flex items-center justify-center relative bg-gradient-to-r from-black via-white/5 to-black"
        >
          {/* Animated connections */}
          <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none">
            <motion.path 
              d="M0,150 C200,150 200,50 400,50 C600,50 600,250 800,250 C1000,250 1000,150 1200,150" 
              stroke="#D7FF00" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="font-mono text-brand-lime font-bold uppercase tracking-widest text-2xl md:text-3xl z-10 bg-black px-8 py-3 border-2 border-brand-lime shadow-[0_0_30px_rgba(215,255,0,0.3)]">
            MARKETING PROTOCOL: ACTIVE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
