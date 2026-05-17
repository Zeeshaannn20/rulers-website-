import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-watermark">RULERS STUDIO</div>
            <div className="footer-grid">
                <div className="footer-col">
                    <h4>Work</h4>
                    <Link href="/work">Featured Reels</Link>
                    <Link href="/work">Case Studies</Link>
                    <Link href="/work">Showreel 2026</Link>
                </div>
                <div className="footer-col">
                    <h4>Services</h4>
                    <Link href="/services">AI Ad Films</Link>
                    <Link href="/services">Brand Cinematics</Link>
                    <Link href="/services">Generative Campaigns</Link>
                    <Link href="/services">Product Storytelling</Link>
                </div>
                <div className="footer-col">
                    <h4>Studio</h4>
                    <Link href="/about">About Us</Link>
                    <Link href="/process">Our Process</Link>
                    <Link href="/about">Careers</Link>
                    <Link href="/learn">Academy</Link>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <a href="mailto:hello@rulers.studio">hello@rulers.studio</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter / X</a>
                    <a href="https://linkedin.com/company/rulerstudio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <span className="footer-copy">© 2026 RULERS STUDIO. ALL RIGHTS RESERVED.</span>
                <div className="studio-status">
                    <span className="status-dot"></span>
                    STUDIO ONLINE
                </div>
            </div>
        </footer>
    );
}
