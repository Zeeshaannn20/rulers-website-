'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Admin() {
    const [submissions, setSubmissions] = useState([]);
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        setSubmissions(data.reverse());
    }, []);

    // Hide global layout elements in Admin
    useEffect(() => {
        document.body.style.background = 'var(--black)';
        const cursor = document.getElementById('cursor');
        const dot = document.getElementById('cursorDot');
        const glow = document.getElementById('cursorGlow');
        const grain = document.querySelector('.grain');
        const nav = document.getElementById('navbar');
        
        if (cursor) cursor.style.display = 'none';
        if (dot) dot.style.display = 'none';
        if (glow) glow.style.display = 'none';
        if (grain) grain.style.display = 'none';
        if (nav) nav.style.display = 'none';
        
        return () => {
            if (cursor) cursor.style.display = 'block';
            if (dot) dot.style.display = 'block';
            if (glow) glow.style.display = 'block';
            if (grain) grain.style.display = 'block';
            if (nav) nav.style.display = 'flex';
        };
    }, []);

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', background: 'var(--black)', color: 'var(--white)', overflow: 'hidden', position: 'fixed', top: 0, left: 0, zIndex: 1000000 }}>
            {/* Sidebar */}
            <aside style={{ width: '280px', background: 'var(--surface)', borderRight: '1px solid rgba(255, 255, 255, 0.05)', padding: '30px 20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Rulers <span style={{ color: 'var(--lime)' }}>Studio</span>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column' }}>
                    <button 
                        onClick={() => setActiveTab('dashboard')}
                        style={{ padding: '14px 20px', background: activeTab === 'dashboard' ? 'rgba(215, 255, 0, 0.1)' : 'transparent', color: activeTab === 'dashboard' ? 'var(--lime)' : 'var(--muted)', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '8px', marginBottom: '8px', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                        Messages Dashboard
                    </button>
                    <button 
                        onClick={() => setActiveTab('lms')}
                        style={{ padding: '14px 20px', background: activeTab === 'lms' ? 'rgba(215, 255, 0, 0.1)' : 'transparent', color: activeTab === 'lms' ? 'var(--lime)' : 'var(--muted)', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '8px', marginBottom: '8px', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                        LMS Portal (Courses)
                    </button>
                    
                    <Link href="/" style={{ padding: '14px 20px', color: 'var(--muted)', textDecoration: 'none', borderRadius: '8px', marginTop: 'auto', fontSize: '14px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                        Back to Site
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <header style={{ height: '80px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', background: 'var(--black)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>{activeTab === 'dashboard' ? 'Messages Overview' : 'LMS Management'}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                        Admin User
                        <div style={{ width: '36px', height: '36px', background: 'var(--lime)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', fontWeight: 700 }}>A</div>
                    </div>
                </header>

                <div style={{ flex: 1, padding: '40px', overflowY: 'auto', background: 'var(--black)' }}>
                    {activeTab === 'dashboard' ? (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Total Submissions</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--lime)' }}>{submissions.length}</div>
                                </div>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>New Projects</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)' }}>12</div>
                                </div>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Active Clients</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)' }}>30</div>
                                </div>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Views</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)' }}>45M</div>
                                </div>
                            </div>

                            <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255, 255, 0, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Recent Contact Submissions</h3>
                                </div>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Date</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Name</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Company</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Email</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {submissions.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)', fontSize: '14px' }}>No contact submissions found.</td>
                                            </tr>
                                        ) : (
                                            submissions.map((sub, i) => (
                                                <tr key={i} style={{ transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                                    <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)' }}>{new Date(sub.date).toLocaleDateString()}</td>
                                                    <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)', fontWeight: 600 }}>{sub.name}</td>
                                                    <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)' }}>{sub.company}</td>
                                                    <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--muted)' }}>{sub.email}</td>
                                                    <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sub.requirement}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* LMS Portal View */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Course Management</h2>
                                <button style={{ background: 'var(--lime)', color: 'var(--black)', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>+ Upload New Module</button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Total Enrolled Students</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--lime)' }}>1,245</div>
                                </div>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Active Courses</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)' }}>2</div>
                                </div>
                                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '12px' }}>Waitlist Signups</div>
                                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--white)' }}>8,420</div>
                                </div>
                            </div>

                            <div style={{ background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255, 255, 0, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Active Courses</h3>
                                </div>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Course Name</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Price</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Status</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Enrolled</th>
                                            <th style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)', fontWeight: 600 }}>AI Commercial Mastery</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)' }}>$499</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <span style={{ padding: '4px 8px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(215, 255, 0, 0.1)', color: 'var(--lime)' }}>Pre-Order</span>
                                            </td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--muted)' }}>842</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--lime)', cursor: 'pointer' }}>Edit</td>
                                        </tr>
                                        <tr style={{ transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)', fontWeight: 600 }}>Cinematic Storytelling</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--white)' }}>$399</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <span style={{ padding: '4px 8px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: 'rgba(215, 255, 0, 0.1)', color: 'var(--lime)' }}>Pre-Order</span>
                                            </td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--muted)' }}>403</td>
                                            <td style={{ padding: '16px 24px', fontSize: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--lime)', cursor: 'pointer' }}>Edit</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
