export default function VideoGrid({ titleLabel = "// SELECTED WORK", titleMain = "Featured", titleHighlight = "Reels" }) {
    const videos = [
        { src: '/vids/ROLEX.mp4', title: 'ROLEX — Timeless Precision', tag: 'AI FILM / 2026' },
        { src: '/vids/Boat Lifestyle.mp4', title: 'BOAT LIFESTYLE — Sound Waves', tag: 'AI AD / 2026' },
        { src: '/vids/Tanishq Jewllerys.mp4', title: 'TANISHQ — Cinematic Jewel', tag: 'AI FILM / 2026' },
        { src: '/vids/Dot & Key Skincare.mp4', title: 'DOT & KEY — Pure Flow', tag: 'AI AD / 2026' },
        { src: '/vids/Amul.mp4', title: 'AMUL — Taste of Future', tag: 'GENERATIVE / 2026' },
        { src: '/vids/Monster.mp4', title: 'MONSTER — Energy Surge', tag: 'AI FILM / 2026' },
        { src: '/vids/Akshmala.mp4', title: 'AKSHMALA — Eternal', tag: 'AI STORYTELLING / 2026' },
        { src: '/vids/Paper Boat.mp4', title: 'PAPER BOAT — Nostalgia', tag: 'AI AD / 2026' },
    ];

    return (
        <section className="section" id="work" style={{ paddingTop: '150px' }}>
            <div className="reveal">
                <p className="section-label">{titleLabel}</p>
                <h2 className="section-title">{titleMain} <span className="lime">{titleHighlight}</span></h2>
            </div>
            <div className="work-grid">
                {videos.map((vid, i) => (
                    <div className="work-tile reveal" style={{ animationDelay: `${(i+1)*0.1}s` }} key={i}>
                        <div className={`work-tile-bg tile-${(i % 6) + 1}`} style={{ background: 'none' }}>
                            <video 
                                src={vid.src} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                            ></video>
                            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.8))', pointerEvents: 'none'}}></div>
                        </div>
                        <div className="work-tile-info">
                            <h3>{vid.title}</h3>
                            <span className="tag">{vid.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
