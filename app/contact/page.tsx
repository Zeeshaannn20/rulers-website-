'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-24 relative overflow-hidden flex flex-col justify-center">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-lime rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-lime rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Ready to <br />
            <span className="text-brand-lime text-super-glow-lime">
              Transcend?
            </span>
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-md">
            Leave the ordinary behind. Drop us a line and let's engineer the future of your brand's visual identity.
          </p>
          
          <div className="space-y-6 text-sm uppercase tracking-widest text-white/50">
            <div>
              <p className="text-brand-lime mb-1 text-xs">Email</p>
              <p className="text-white">hello@rulers.studio</p>
            </div>
            <div>
              <p className="text-brand-lime mb-1 text-xs">Phone</p>
              <p className="text-white">+1 (555) 019-2837</p>
            </div>
            <div>
              <p className="text-brand-lime mb-1 text-xs">HQ</p>
              <p className="text-white">123 Innovation Drive, Cyber City</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative group"
        >
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-lime transition-colors duration-500 pointer-events-none shadow-[0_0_0_rgba(215,255,0,0)] group-hover:shadow-[0_0_30px_rgba(215,255,0,0.2)]" />
          
          <form className="relative z-10 space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors"
                placeholder="john@company.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-brand-lime transition-colors group/btn">
              Send Transmission
              <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
