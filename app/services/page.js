export default function Services() {
    return (
        <main>
            <section className="section" id="services" style={{ paddingTop: '150px' }}>
                <div className="reveal">
                    <p className="section-label">// CAPABILITIES</p>
                    <h2 className="section-title">What We <span className="lime">Direct</span></h2>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal">
                        <div className="service-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M8 12 L24 4 L40 12 L40 36 L24 44 L8 36 Z M24 4 L24 44 M8 12 L40 12" />
                            </svg>
                        </div>
                        <h3>AI Ad Films</h3>
                        <p>High-impact commercial content generated and directed with AI — from concept through final render. Studio quality, zero waste.</p>
                    </div>
                    <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
                        <div className="service-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M6 14 L6 34 L42 34 L42 14 Z M16 8 L32 8 L36 14 L12 14 Z M20 24 A4 4 0 1 0 28 24 A4 4 0 1 0 20 24" />
                            </svg>
                        </div>
                        <h3>Brand Cinematics</h3>
                        <p>Cinematic brand stories that feel like short films. We craft visual identities that move audiences and define culture.</p>
                    </div>
                    <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="service-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M12 8 L12 40 M24 4 L24 44 M36 12 L36 36 M6 24 L42 24 M8 14 L40 14 M8 34 L40 34" />
                            </svg>
                        </div>
                        <h3>Generative Campaigns</h3>
                        <p>Dynamic, scalable creative powered by generative AI. Infinite variations, one creative direction. Built for the algorithm age.</p>
                    </div>
                    <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
                        <div className="service-icon">
                            <svg viewBox="0 0 48 48">
                                <path d="M14 8 L34 8 L38 16 L24 44 L10 16 Z M10 16 L38 16 M17 8 L12 16 M31 8 L36 16 M24 44 L18 16 M24 44 L30 16 M24 44 L24 16" />
                            </svg>
                        </div>
                        <h3>Product Storytelling</h3>
                        <p>We turn products into protagonists. AI-driven visuals that showcase every angle, texture, and story behind your product.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
