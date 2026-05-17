'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <nav id="navbar" className="visible" style={{transform: 'translateY(0)'}}>
                <Link href="/" className="nav-logo magnetic-btn">
                    <svg viewBox="0 0 40 40" width="40" height="40">
                        <rect width="40" height="40" rx="8" fill="var(--lime)" />
                        <text x="11" y="28" fontSize="22" fontWeight="900" fill="var(--black)" fontFamily="Inter, sans-serif">R</text>
                        <polygon points="24,14 24,26 33,20" fill="var(--black)" />
                    </svg>
                </Link>
                <ul className="nav-links">
                    <li><Link href="/work" className="magnetic-btn">Work</Link></li>
                    <li><Link href="/services" className="magnetic-btn">Services</Link></li>
                    <li><Link href="/process" className="magnetic-btn">Process</Link></li>
                    <li><Link href="/about" className="magnetic-btn">About</Link></li>
                    <li><Link href="/contact" className="magnetic-btn">Contact</Link></li>
                </ul>
                <Link href="/learn" className="nav-cta magnetic-btn" style={pathname === '/learn' ? {background: 'var(--white)'} : {}}>
                    {pathname === '/learn' ? 'Learn Mode' : 'Start a Project'} <span className="arrow">→</span>
                </Link>
                <button className={`hamburger ${mobileOpen ? 'active' : ''}`} id="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                    <span></span><span></span><span></span>
                </button>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`} id="mobileMenu">
                <Link href="/work" onClick={() => setMobileOpen(false)}>Work</Link>
                <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
                <Link href="/process" onClick={() => setMobileOpen(false)}>Process</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                <Link href="/learn" onClick={() => setMobileOpen(false)}>Learn</Link>
            </div>
        </>
    );
}
