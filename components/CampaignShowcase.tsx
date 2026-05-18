'use client';

import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';

const CAMPAIGNS = [
  { brand: 'Amul', title: 'The Taste of Tomorrow', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Amul.mp4', metric: '2M+ Views' },
  { brand: 'boAt', title: 'Rhythm of the AI', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Boat%20Lifestyle%20(1).mp4', metric: '4.5M+ Views' },
  { brand: 'Paper Boat', title: 'Nostalgia Synthesized', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Paper%20Boat%20(1).mp4', metric: '1.2M+ Shares' },
  { brand: 'Tanishq', title: 'Ethereal Elegance', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Tanishq%20Jewllerys%20(1).mp4', metric: '300% ROI' },
  { brand: 'Nike', title: 'Beyond Human Limits', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/1778780553222774.mp4', metric: '8M+ Views' },
  { brand: 'Zomato', title: 'Cravings Calculated', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/hf_20260515_025644_da6fa8df-ba1c-48bb-93ef-2cfdf8fa5d7b.mp4', metric: '#1 Trending' },
  { brand: 'Mamaearth', title: 'Nature Meets Node', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Akshmala.mp4', metric: 'Eco-Award' },
  { brand: 'CRED', title: 'Premium Protocol', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Monster.mp4', metric: '500k Installs' },
  { brand: 'Swiggy', title: 'Hyperlocal Dreams', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Dot%20&%20Key%20Skincare%20(1).mp4', metric: '2X Orders' },
  { brand: 'Asian Paints', title: 'Colors of the Void', img: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/ROLEX.mp4', metric: '99% Recall' }
];

export default function CampaignShowcase() {
  return (
    <section className="relative bg-[#F4F4F1] text-black py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter"
        >
          Campaigns
        </motion.h2>
        <div className="w-full h-px bg-black mt-6"></div>
      </div>

      <div className="flex gap-6 md:gap-10 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {CAMPAIGNS.map((campaign, idx) => (
          <div 
            key={idx} 
            className="group relative w-[85vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 aspect-[4/5] md:aspect-video rounded-sm overflow-hidden bg-black snap-center md:snap-start cursor-grab active:cursor-grabbing"
            data-cursor="VIEW &rarr;"
          >
            <LazyVideo 
              src={campaign.img}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 group-hover:grayscale"
            />
            {/* Hover overlay that slides up */}
            <div className="absolute inset-0 bg-brand-lime/90 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between p-8">
              <div className="font-mono text-black font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                {campaign.brand}
              </div>
              <div>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter text-black leading-none mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  {campaign.title}
                </h3>
                <div className="inline-block border-2 border-black px-4 py-2 font-mono font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-400">
                  {campaign.metric}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
