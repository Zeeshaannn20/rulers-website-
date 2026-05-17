export default function Process() {
    return (
        <main>
            <section className="process-section section" id="process" style={{ paddingTop: '150px' }}>
                <div className="process-header reveal">
                    <p className="section-label">// OUR PROCESS</p>
                    <h2 className="section-title">How We <span className="lime">Create</span></h2>
                </div>
                <div className="process-track">
                    <div className="process-step reveal">
                        <div className="step-number">01</div>
                        <div className="step-title">Concept</div>
                        <p className="step-desc">We start with your vision and refine it through AI-augmented creative direction. Strategy meets imagination at the speed of thought.</p>
                    </div>
                    <div className="process-step reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="step-number">02</div>
                        <div className="step-title">AI Direction</div>
                        <p className="step-desc">Our directors collaborate with custom AI models to explore visual territories impossible through traditional production pipelines.</p>
                    </div>
                    <div className="process-step reveal" style={{ transitionDelay: '0.3s' }}>
                        <div className="step-number">03</div>
                        <div className="step-title">Render & Edit</div>
                        <p className="step-desc">State-of-the-art AI rendering meets human editorial craft. Every frame is intentional, every cut is deliberate.</p>
                    </div>
                    <div className="process-step reveal" style={{ transitionDelay: '0.45s' }}>
                        <div className="step-number">04</div>
                        <div className="step-title">Deliver</div>
                        <p className="step-desc">Final assets delivered in every format you need — social cuts, cinema DCP, broadcast-ready masters. All from one production run.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
