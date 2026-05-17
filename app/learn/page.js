import HeroCanvas from '@/components/HeroCanvas';
import Link from 'next/link';

export default function Learn() {
    return (
        <main>
            <section className="hero" style={{ height: '60vh' }}>
                <div className="hero-bg">
                    <HeroCanvas />
                </div>
                <div className="hero-content">
                    <h1>
                        <span className="line"><span className="line-inner">Rulerstudio</span></span>
                        <span className="line"><span className="line-inner"><span className="lime glitch-text">Learn</span></span></span>
                    </h1>
                    <p className="hero-sub">// MASTER AI DIRECTING</p>
                </div>
            </section>
            
            <section className="section" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', paddingBottom: '120px' }}>
                <p className="reveal" style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '60px' }}>
                    Welcome to the academy. Our upcoming courses will teach you the exact frameworks, prompts, and editing workflows we use to direct cinematic AI films and high-impact ads for top global brands.
                </p>

                <div className="services-grid" style={{ marginBottom: '60px', textAlign: 'left' }}>
                    <div className="service-card reveal">
                        <div style={{ padding: '4px 8px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(215, 255, 0, 0.1)', color: 'var(--lime)', display: 'inline-block', marginBottom: '16px' }}>PRE-ORDER</div>
                        <h3>AI Commercial Mastery</h3>
                        <p style={{ marginBottom: '20px' }}>Learn how to generate photorealistic product shots and direct high-end commercials entirely using generative AI.</p>
                        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--white)', marginBottom: '20px' }}>$499</div>
                        <button className="btn-ghost magnetic-btn" style={{ width: '100%', justifyContent: 'center' }}>Coming Soon</button>
                    </div>

                    <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
                        <div style={{ padding: '4px 8px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(215, 255, 0, 0.1)', color: 'var(--lime)', display: 'inline-block', marginBottom: '16px' }}>PRE-ORDER</div>
                        <h3>Cinematic Storytelling</h3>
                        <p style={{ marginBottom: '20px' }}>The ultimate masterclass on turning text prompts into emotionally resonant short films and cinematic trailers.</p>
                        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--white)', marginBottom: '20px' }}>$399</div>
                        <button className="btn-ghost magnetic-btn" style={{ width: '100%', justifyContent: 'center' }}>Coming Soon</button>
                    </div>
                </div>

                <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--lime)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '2px' }}>WANT EARLY ACCESS?</p>
                    <Link href="/contact" className="btn-primary magnetic-btn" style={{ display: 'inline-flex' }}>
                        Join the Waitlist
                    </Link>
                </div>
            </section>
        </main>
    );
}
