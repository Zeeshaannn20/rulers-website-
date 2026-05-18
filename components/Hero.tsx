'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import LazyVideo from './LazyVideo';

const CLIENTS = [
  'AMUL', 'BOAT', 'PAPER BOAT', 'TANISHQ', 'NIKE',
  'ZOMATO', 'MAMAEARTH', 'CRED', 'SWIGGY', 'ASIAN PAINTS',
];

const HERO_LINES = ['WE MAKE', 'ADS THAT', 'MACHINES', 'DREAM OF.'];

const HERO_VIDEOS = [
  { brand: 'AMUL', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Amul.mp4' },
  { brand: 'BOAT', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Boat%20Lifestyle%20(1).mp4' },
  { brand: 'PAPER BOAT', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Paper%20Boat%20(1).mp4' },
  { brand: 'TANISHQ', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Tanishq%20Jewllerys%20(1).mp4' },
  { brand: 'NIKE', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/1778780553222774.mp4' },
  { brand: 'MAMAEARTH', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/Akshmala.mp4' },
  { brand: 'ROLEX', src: 'https://pub-7d891e1943604382ad234dd2e6a5d379.r2.dev/vids/ROLEX.mp4' }
];

export default function HeroSection() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const preloaderRef = useRef<HTMLDivElement>(null);
  const svgPath1Ref = useRef<SVGPathElement>(null);
  const svgPath2Ref = useRef<SVGPathElement>(null);
  const logoMarkRef = useRef<HTMLDivElement>(null);

  // 3D tilt state
  const cardRef = useRef<HTMLDivElement>(null);

  const [activeVideo, setActiveVideo] = useState(HERO_VIDEOS[0]);

  useEffect(() => {
    setActiveVideo(HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)]);

    const tl = gsap.timeline();

    // Get path lengths dynamically
    const paths = [svgPath1Ref.current, svgPath2Ref.current].filter(Boolean) as SVGPathElement[];

    paths.forEach((p) => {
      const len = (p as SVGGeometryElement).getTotalLength();
      gsap.set(p, {
        attr: { 'stroke-dasharray': len, 'stroke-dashoffset': len },
        fill: 'transparent',
        stroke: '#ffffff',
        strokeWidth: 3,
      });
    });

    // 1. Draw strokes
    tl.to(paths, {
      attr: { 'stroke-dashoffset': 0 },
      duration: 1.1,
      ease: 'power3.inOut',
      stagger: 0.2,
    }, 0.3);

    // 2. Fill lime
    tl.to(paths, {
      fill: '#D7FF00',
      stroke: '#D7FF00',
      strokeWidth: 0,
      duration: 0.45,
      ease: 'power2.out',
      stagger: 0.08,
    }, '+=0.15');

    // 3. Brief scale pulse
    tl.to('.preloader-logo-svg', {
      scale: 1.12,
      duration: 0.25,
      ease: 'power2.out',
    });

    // 4. Shrink + fly to navbar corner
    tl.to('.preloader-logo-svg', {
      scale: 0.22,
      x: -340,
      y: -230,
      duration: 0.65,
      ease: 'power4.inOut',
    }, '+=0.1');

    // 5. Fade + slide preloader out upward
    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power4.inOut',
      onComplete: () => {
        setPreloaderDone(true);
        // Small delay before triggering content reveal
        setTimeout(() => setShowContent(true), 100);
      },
    }, '-=0.25');
  }, []);

  // Mouse tilt on video card
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 10;
    const y = ((e.clientY - top) / height - 0.5) * -10;
    gsap.to(cardRef.current, { rotateY: x, rotateX: y, duration: 0.6, ease: 'power2.out', transformPerspective: 1000 });
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power2.out' });
  };

  // Text reveal variants — cast as any to satisfy strict Framer Motion v12 types
  const containerVariants: any = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const lineVariants: any = {
    hidden: { y: '105%', skewX: 3 },
    visible: {
      y: '0%',
      skewX: 0,
      transition: { duration: 0.85, ease: 'easeOut' },
    },
  };

  const fadeUpVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* ─── PRELOADER ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {!preloaderDone && (
          <div
            ref={preloaderRef}
            className="fixed inset-0 z-[300] bg-black flex items-center justify-center overflow-hidden"
          >
            {/* Progress text */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-32 h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-brand-lime"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'linear' }}
                />
              </div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Loading</span>
            </div>

            {/* SVG Logo draw */}
            <svg
              className="preloader-logo-svg origin-center"
              viewBox="0 0 100 100"
              width="140"
              height="140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ willChange: 'transform' }}
            >
              {/* R body: top rectangle + curve */}
              <path
                ref={svgPath1Ref}
                d="M20 10 H65 C80 10 90 20 90 33 C90 46 80 55 65 55 H45 L80 90 H60 L28 55 V90 H20 Z"
                fillRule="evenodd"
              />
              {/* Counter / inner cutout implied by shape */}
              <path
                ref={svgPath2Ref}
                d="M45 22 H62 C70 22 76 27 76 33 C76 39 70 44 62 44 H45 Z"
                fill="#000000"
                stroke="#000000"
              />
            </svg>
          </div>
        )}
      </AnimatePresence>

      {/* ─── NAVBAR ─────────────────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 left-0 w-full z-[100] px-8 py-5 flex items-center justify-between"
        initial={{ y: -80, opacity: 0 }}
        animate={preloaderDone ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo mark */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative overflow-hidden rounded-[4px] flex-shrink-0 transition-transform group-hover:scale-90 duration-300">
            <Image
              src="/logo/Rulers Studio Logo-1.jpg"
              alt="Rulers Studio"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span
            className="font-black text-[15px] tracking-[0.18em] uppercase text-white"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            RULERS STUDIO
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Work', href: '#work' },
            { label: 'Process', href: '#process' },
            { label: 'Clients', href: '#clients' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="relative overflow-hidden border border-brand-lime px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-lime group inline-block"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Let&apos;s Talk
            </span>
            <span className="absolute inset-0 bg-brand-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </a>
        </nav>

        {/* Mobile menu */}
        <button className="md:hidden font-mono text-[11px] uppercase tracking-widest text-white/60 flex items-center gap-2">
          <span className="w-6 h-px bg-white/40" />
          Menu
        </button>
      </motion.header>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row">

          {/* LEFT: Typography */}
          <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-36 pb-16 lg:pt-0 lg:pb-0 lg:w-[52%]">

            {/* Eyebrow */}
            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: '110%' }}
                animate={showContent ? { y: '0%' } : { y: '110%' }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-3"
              >
                <span className="w-6 h-[1.5px] bg-brand-lime inline-block" />
                <span
                  className="text-brand-lime text-[11px] uppercase tracking-[0.35em] font-bold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  AI Ad Marketing Agency
                </span>
              </motion.div>
            </div>

            {/* ── HEADLINE with Framer Motion stagger ── */}
            <motion.h1
              className="font-black uppercase leading-[0.88] tracking-tighter text-white mb-10"
              style={{
                fontFamily: 'var(--font-space)',
                fontSize: 'clamp(3.2rem, 7.5vw, 6.5rem)',
              }}
              variants={containerVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
            >
              {HERO_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    className="block"
                    variants={lineVariants}
                    style={{
                      color: i === 3 ? '#D7FF00' : '#ffffff',
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-10"
              style={{ fontFamily: 'var(--font-inter)' }}
              variants={fadeUpVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
              transition={{ delay: 0.55 }}
            >
              We blend generative AI with performance marketing to engineer high-converting campaigns that stop the scroll, crush your CPA, and scale your brand.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              variants={fadeUpVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#work"
                className="relative overflow-hidden bg-brand-lime text-black font-bold text-[11px] uppercase tracking-[0.25em] px-8 py-4 inline-flex items-center gap-3 group"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                  View Campaigns
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="square" d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </a>

              <div className="flex items-center gap-3 text-white/30">
                <span className="w-10 h-px bg-white/20 inline-block" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Est. 2022</span>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-16 flex gap-10 border-t border-white/10 pt-8"
              variants={fadeUpVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
              transition={{ delay: 0.85 }}
            >
              {[
                { n: '150+', label: 'Campaigns' },
                { n: '50M+', label: 'Views' },
                { n: '99%', label: 'AI-Native' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-black text-3xl text-white"
                    style={{ fontFamily: 'var(--font-space)' }}
                  >
                    {stat.n}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Video */}
          <motion.div
            className="relative lg:w-[48%] min-h-[55vh] lg:min-h-full"
            initial={{ opacity: 0 }}
            animate={preloaderDone ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div
              ref={cardRef}
              data-cursor="view"
              className="relative w-full h-full overflow-hidden border-l border-white/10"
              style={{ willChange: 'transform' }}
            >
              {/* Real Random video */}
              <LazyVideo
                src={activeVideo.src}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: 'scale(1.04)' }}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Corner decoration */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-1.5">
                <span className="w-8 h-px bg-brand-lime inline-block" />
                <span className="font-mono text-[10px] text-brand-lime uppercase tracking-[0.3em]">Live Reel</span>
              </div>

              {/* Bottom brand credit */}
              <div className="absolute bottom-8 left-8">
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.25em] mb-1">Currently Showing</p>
                <p
                  className="font-black text-2xl text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  {activeVideo.brand}
                </p>
              </div>

              {/* Right edge scroll cue */}
              <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-x-0 top-0 bg-brand-lime"
                    animate={{ height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                  />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Marquee ──────────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 border-t border-white/10 py-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="marquee-track flex items-center">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="flex-shrink-0 mx-10 font-black uppercase text-white/20 hover:text-brand-lime transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  letterSpacing: '0.3em',
                }}
              >
                {c}
                <span className="inline-block w-2 h-2 rounded-full bg-brand-lime/30 mx-10 align-middle" />
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
          white-space: nowrap;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </>
  );
}
