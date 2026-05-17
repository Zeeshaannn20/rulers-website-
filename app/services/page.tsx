'use client';

import { motion } from 'framer-motion';
import { Film, Sparkles, MonitorPlay, Infinity } from 'lucide-react';

const services = [
  {
    title: 'AI Native Commercials',
    description: 'Full-scale video production utilizing generative models to create photorealistic ads without the constraints of physical shoots.',
    icon: Film,
    color: 'border-brand-lime text-brand-lime',
    glow: 'group-hover:shadow-[0_0_30px_rgba(215,255,0,0.3)]'
  },
  {
    title: 'VFX & Post-Production',
    description: 'Enhancing traditional footage with AI-driven visual effects, upscaling, and dynamic motion graphics.',
    icon: Sparkles,
    color: 'border-brand-lime text-brand-lime',
    glow: 'group-hover:shadow-[0_0_30px_rgba(215,255,0,0.3)]'
  },
  {
    title: 'Social & Vertical Video',
    description: 'High-retention, hyper-engaging short-form content tailored for TikTok, Reels, and YouTube Shorts.',
    icon: MonitorPlay,
    color: 'border-brand-lime text-brand-lime',
    glow: 'group-hover:shadow-[0_0_30px_rgba(215,255,0,0.3)]'
  },
  {
    title: 'Infinite Brand Worlds',
    description: 'Persistent 3D and immersive environments for your brand across web, spatial computing, and interactive media.',
    icon: Infinity,
    color: 'border-white text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-24 bg-[url('/vids/Dot%20&%20Key%20Skincare.mp4')] bg-cover bg-center relative">
      {/* Fallback styling since bg video via CSS isn't great. We'll use a fixed video background. */}
      <div className="fixed inset-0 z-0">
         <video 
           src="/vids/Dot & Key Skincare.mp4"
           autoPlay muted loop playsInline
           className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-[#030303]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Our <span className="text-brand-lime text-super-glow-lime">Capabilities</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We offer end-to-end production pipelines powered by the latest advancements in artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-10 bg-black/50 backdrop-blur-xl border border-white/5 rounded-2xl transition-all duration-500 hover:border-transparent ${service.glow}`}
            >
              <div className={`w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-black group-hover:${service.color} transition-colors`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 group-hover:text-white text-white/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
