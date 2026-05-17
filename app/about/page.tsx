'use client';

import VideoBackground from '@/components/VideoBackground';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-8 md:px-24">
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-30 pointer-events-none mix-blend-screen">
        <video 
          src="/vids/Akshmala.mp4" 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover object-left"
          style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12"
        >
          About <span className="text-brand-lime text-super-glow-lime">Rulers</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed border-l border-brand-lime/30 pl-8"
        >
          <p>
            We are not just an ad agency. We are a collective of cinematic storytellers, AI engineers, and visual artists dedicated to redefining how brands communicate in the digital age.
          </p>
          <p>
            Born from the intersection of high-end Hollywood production and bleeding-edge generative AI, RulersStudio constructs commercials that defy physical constraints. 
          </p>
          <p>
            Our mission is simple: <strong className="text-white font-medium">To engineer desire.</strong> We take the ordinary and inject it with the extraordinary, producing visuals that stop scrollers in their tracks and burn into the memory of your audience.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          <div>
            <h4 className="text-4xl font-black text-brand-lime mb-2">50+</h4>
            <p className="text-xs uppercase tracking-widest text-white/50">Brands Elevated</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-brand-lime mb-2">10M+</h4>
            <p className="text-xs uppercase tracking-widest text-white/50">Views Generated</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-brand-lime mb-2">100%</h4>
            <p className="text-xs uppercase tracking-widest text-white/50">AI Native</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-brand-lime mb-2">24/7</h4>
            <p className="text-xs uppercase tracking-widest text-white/50">Global Delivery</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
