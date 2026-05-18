'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    brand: 'Rolex',
    quote: "THEY DIDN'T JUST MAKE AN AD. THEY SYNTHESIZED A LEGACY.",
    name: 'Jean-Frederic Dufour',
    title: 'Global Marketing',
    company: 'Rolex SA',
    video: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/ROLEX.mp4',
    poster: '/logo/Rulers Studio Logo-1.jpg' // Placeholder poster
  },
  {
    brand: 'Boat',
    quote: "UNREAL METRICS. THE AI ENGINE DELIVERED BEYOND HUMAN LIMITS.",
    name: 'Aman Gupta',
    title: 'Co-founder & CMO',
    company: 'boAt Lifestyle',
    video: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Boat%20Lifestyle%20(1).mp4',
    poster: '/logo/Rulers Studio Logo-1.jpg'
  },
  {
    brand: 'Amul',
    quote: "PRESERVING NOSTALGIA WHILE PUSHING ALGORITHMIC BOUNDARIES.",
    name: 'R.S. Sodhi',
    title: 'Managing Director',
    company: 'GCMMF',
    video: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Amul.mp4',
    poster: '/logo/Rulers Studio Logo-1.jpg'
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setIsPlaying(false);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-rich-black text-warm-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-8">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter">
            Client <span className="text-brand-lime text-glow-lime">Codex</span>
          </h2>
          <div className="font-mono text-xl text-white/50">
            0{selectedIndex + 1} / 0{TESTIMONIALS.length}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((testim, idx) => (
              <div className="flex-[0_0_100%] min-w-0" key={idx}>
                
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 border border-white/10">
                  
                  {/* LEFT: Video Player (60%) */}
                  <div className="w-full lg:w-[60%] relative aspect-video lg:aspect-auto lg:h-[600px] bg-black group border-r border-white/10">
                    
                    {/* Lazy load: Only render actual video tag if it's the current slide to save performance */}
                    {selectedIndex === idx ? (
                      <>
                        <video 
                          className="w-full h-full object-cover"
                          preload="metadata"
                          poster={testim.poster}
                          autoPlay={isPlaying}
                          loop
                          muted={false}
                          controls={isPlaying}
                          playsInline
                          /* 
                           * HOSTING RECOMMENDATION:
                           * Replace local MP4 src with Cloudflare Stream / Bunny.net / Mux HLS (.m3u8) URLs. 
                           * DO NOT use YouTube or compress source files. Adaptive streaming maintains source 
                           * quality while loading fast. Requires hls.js wrapper for standard video elements.
                           */
                          src={testim.video}
                        />
                        
                        {!isPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-black/20 transition-all">
                            <button 
                              onClick={() => setIsPlaying(true)}
                              data-cursor="PLAY"
                              className="w-24 h-24 rounded-full bg-brand-lime flex items-center justify-center text-black shadow-[0_0_40px_rgba(215,255,0,0.4)] hover:scale-110 transition-transform"
                            >
                              <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      // Placeholder for inactive slides
                      <div 
                        className="w-full h-full object-cover bg-center bg-cover opacity-50 grayscale"
                        style={{ backgroundImage: `url('${testim.poster}')` }}
                      />
                    )}
                  </div>

                  {/* RIGHT: Content (40%) */}
                  <div className="w-full lg:w-[40%] flex flex-col justify-between p-12 bg-[#050505]">
                    <div>
                      <h4 className="font-mono text-brand-lime tracking-widest uppercase mb-8 text-sm font-bold">
                        {testim.brand}
                      </h4>
                      <p className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-12">
                        "{testim.quote}"
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="h-px w-full bg-white/20 mb-8"></div>
                      <h5 className="font-sans font-bold text-xl uppercase tracking-wider">{testim.name}</h5>
                      <p className="font-mono text-white/50 text-sm mt-2">{testim.title}, {testim.company}</p>
                      
                      <button data-cursor="CLICK" className="mt-8 flex items-center gap-2 text-brand-lime font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                        VIEW CASE STUDY
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation & Thumbnails */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev} 
              className="w-14 h-14 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <div className="flex gap-2">
            {TESTIMONIALS.map((testim, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`font-mono text-xs font-bold px-4 py-2 uppercase tracking-widest border transition-all ${
                  selectedIndex === idx 
                    ? 'border-brand-lime text-brand-lime' 
                    : 'border-white/10 text-white/30 hover:text-white/80 hover:border-white/50'
                }`}
              >
                {testim.brand}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
