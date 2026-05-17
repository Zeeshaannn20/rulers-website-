'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLogic() {
  const pathname = usePathname();

  useEffect(() => {
    // Hide preloader
    const preloader = document.getElementById('preloader');
    const navbar = document.getElementById('navbar');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
        if (navbar) navbar.classList.add('visible');
      }, 500); // reduced from 2200 for faster navigation feel
    }

    // Custom cursor logic
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (!cursor || !cursorDot || !cursorGlow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX, cursorY = mouseY;
    let dotX = mouseX, dotY = mouseY;
    let glowX = mouseX, glowY = mouseY;
    let animFrame;

    const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update service card glow position
        document.querySelectorAll('.service-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', x + '%');
            card.style.setProperty('--my', y + '%');
        });
    };

    document.addEventListener('mousemove', handleMouseMove);

    function animateCursor() {
        const ease = 0.15;
        const dotEase = 0.35;
        const glowEase = 0.08;

        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        dotX += (mouseX - dotX) * dotEase;
        dotY += (mouseY - dotY) * dotEase;
        glowX += (mouseX - glowX) * glowEase;
        glowY += (mouseY - glowY) * glowEase;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        animFrame = requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const handleMouseEnter = () => cursor.classList.add('hover');
    const handleMouseLeave = () => cursor.classList.remove('hover');

    const setupInteractions = () => {
        const hoverTargets = document.querySelectorAll('a, button, .work-tile, .service-card, .magnetic-btn');
        hoverTargets.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Magnetic buttons
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });

        // Scroll reveal
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        
        // Hide cursor on touch
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            cursorDot.style.display = 'none';
            cursorGlow.style.display = 'none';
            document.body.style.cursor = 'auto';
        }
    };

    setTimeout(setupInteractions, 100);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animFrame);
    };
  }, [pathname]);

  return null;
}
