'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring || !text) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Dot follows instantly
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX - 4, y: mouseY - 4 });
    };

    // Ring lerps behind with RAF
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let rafId: number;
    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      gsap.set(ring, { x: ringX, y: ringY });
      rafId = requestAnimationFrame(tick);
    };
    tick();

    // State machine
    const setState = (state: 'default' | 'hover' | 'view') => {
      if (state === 'default') {
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(ring, { width: 40, height: 40, x: ringX - 20, y: ringY - 20, backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)', duration: 0.4, ease: 'power2.out' });
        gsap.to(text, { opacity: 0, scale: 0.8, duration: 0.2 });
      } else if (state === 'hover') {
        gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(ring, { width: 64, height: 64, x: ringX - 32, y: ringY - 32, backgroundColor: '#D7FF00', border: 'none', duration: 0.4, ease: 'power2.out' });
        gsap.to(text, { opacity: 0, scale: 0.8, duration: 0.2 });
      } else if (state === 'view') {
        gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(ring, { width: 96, height: 96, x: ringX - 48, y: ringY - 48, backgroundColor: '#D7FF00', border: 'none', duration: 0.4, ease: 'power2.out' });
        gsap.to(text, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest('[data-cursor]') as HTMLElement | null;
      const isLink = target.closest('a') || target.closest('button');

      if (el?.dataset.cursor === 'view') {
        setState('view');
        if (text) text.textContent = 'VIEW →';
      } else if (isLink) {
        setState('hover');
      } else {
        setState('default');
      }
    };

    // Initial set
    gsap.set(dot, { x: mouseX - 4, y: mouseY - 4 });
    gsap.set(ring, { x: ringX - 20, y: ringY - 20, width: 40, height: 40, border: '1.5px solid rgba(255,255,255,0.4)', backgroundColor: 'transparent' });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — instant follower */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-white mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Ring — lagged follower */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        <span
          ref={textRef}
          className="text-black font-bold text-[10px] uppercase tracking-widest opacity-0 scale-75 select-none"
          style={{ fontFamily: 'var(--font-mono)' }}
        />
      </div>
    </>
  );
}
