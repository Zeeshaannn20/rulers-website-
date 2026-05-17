'use client';
import { useEffect } from 'react';
import VideoGrid from '@/components/VideoGrid';

export default function About() {
    useEffect(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        let statsCounted = false;

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsCounted) {
                    statsCounted = true;
                    statNumbers.forEach(num => {
                        const target = parseInt(num.dataset.target);
                        const suffix = num.dataset.suffix || '+';
                        let current = 0;
                        const increment = target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            num.textContent = Math.floor(current) + suffix;
                        }, 25);
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-item').forEach(s => statsObserver.observe(s));
        return () => {
            document.querySelectorAll('.stat-item').forEach(s => statsObserver.unobserve(s));
        };
    }, []);

    return (
        <main>
            <section className="stats-section" id="about" style={{ paddingTop: '150px' }}>
                <div className="stats-grid">
                    <div className="stat-item reveal">
                        <div className="stat-number" data-target="120">0</div>
                        <div className="stat-label">Films Directed</div>
                    </div>
                    <div className="stat-item reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="stat-number" data-target="45" data-suffix="M">0</div>
                        <div className="stat-label">Views Generated</div>
                    </div>
                    <div className="stat-item reveal" style={{ transitionDelay: '0.3s' }}>
                        <div className="stat-number" data-target="30">0</div>
                        <div className="stat-label">Brands Trusted</div>
                    </div>
                </div>
            </section>

            <section className="clients-section">
                <div className="clients-track">
                    <span className="client-logo">MERIDIAN</span>
                    <span className="client-logo">ATMOS TECH</span>
                    <span className="client-logo">VAULT AI</span>
                    <span className="client-logo">NEON LABS</span>
                    <span className="client-logo">CIPHER CO</span>
                    <span className="client-logo">PRISM GROUP</span>
                    <span className="client-logo">ORBIT</span>
                    <span className="client-logo">HELIX MEDIA</span>
                    <span className="client-logo">MERIDIAN</span>
                    <span className="client-logo">ATMOS TECH</span>
                    <span className="client-logo">VAULT AI</span>
                    <span className="client-logo">NEON LABS</span>
                    <span className="client-logo">CIPHER CO</span>
                    <span className="client-logo">PRISM GROUP</span>
                    <span className="client-logo">ORBIT</span>
                    <span className="client-logo">HELIX MEDIA</span>
                </div>
            </section>

            <VideoGrid titleLabel="// CLIENT VOICES" titleMain="Video" titleHighlight="Testimonials" />
            
        </main>
    );
}
