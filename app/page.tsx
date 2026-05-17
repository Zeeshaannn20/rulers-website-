'use client';

import VideoBackground from '@/components/VideoBackground';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SHOWCASE_VIDEOS = [
  { name: 'Rolex', src: '/vids/ROLEX.mp4' },
  { name: 'Tanishq', src: '/vids/Tanishq Jewllerys.mp4' },
  { name: 'Boat Lifestyle', src: '/vids/Boat Lifestyle.mp4' },
  { name: 'Amul', src: '/vids/Amul.mp4' },
  { name: 'Paper Boat', src: '/vids/Paper Boat.mp4' },
  { name: 'Monster', src: '/vids/Monster.mp4' },
  { name: 'Dot & Key', src: '/vids/Dot & Key Skincare.mp4' },
  { name: 'Akshmala', src: '/vids/Akshmala.mp4' },
  { name: 'Campaign 09', src: '/vids/1778780553222774.mp4' },
  { name: 'Campaign 10', src: '/vids/hf_20260515_025644_da6fa8df-ba1c-48bb-93ef-2cfdf8fa5d7b.mp4' },
];

export default function Home() {
  const [heroVideo, setHeroVideo] = useState<string>('');

  useEffect(() => {
    // Pick a random video on mount to avoid hydration mismatch
    const randomIndex = Math.floor(Math.random() * SHOWCASE_VIDEOS.length);
    setHeroVideo(SHOWCASE_VIDEOS[randomIndex].src);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center px-8 md:px-24">
        {heroVideo && <VideoBackground src={heroVideo} overlayOpacity={0.7} />}
        
        <div className="relative z-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              The Next Era of <br />
              <span className="text-brand-lime text-super-glow-lime">
                Visual Ads
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-10"
          >
            We merge cutting-edge AI generation with cinematic storytelling to create impossible worlds for visionary brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="px-10 py-4 border border-brand-lime bg-brand-lime/10 text-brand-lime font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-black transition-all rounded-full shadow-[0_0_20px_rgba(215,255,0,0.4)]">
              View Proof of Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* Proof of Work */}
      <section className="relative w-full bg-black py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Proof of <span className="text-brand-lime text-super-glow-lime">Work</span>
            </h2>
            <p className="text-white/50 uppercase tracking-widest text-sm hidden md:block">01 // Archive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SHOWCASE_VIDEOS.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.1 }}
                className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-brand-lime transition-colors"
              >
                <video 
                  src={video.src}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white group-hover:text-brand-lime transition-colors">
                    {video.name}
                  </h3>
                  <p className="text-white/60 text-sm tracking-wider uppercase mt-1">AI Commercial</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
