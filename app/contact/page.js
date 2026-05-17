'use client';
import { useState } from 'react';

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.c_name.value,
            email: e.target.c_email.value,
            number: e.target.c_number.value,
            company: e.target.c_company.value,
            requirement: e.target.c_requirement.value,
            date: new Date().toISOString()
        };
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(data);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <main>
            <section className="section" id="contact" style={{ paddingTop: '150px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="reveal" style={{ maxWidth: '600px', width: '100%', padding: '40px', background: 'var(--surface)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', position: 'relative' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '30px', textTransform: 'uppercase' }}>
                        Get In <span style={{ color: 'var(--lime)' }}>Touch</span>
                    </h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', marginBottom: '8px', display: 'block', textTransform: 'uppercase' }}>Name</label>
                            <input type="text" id="c_name" required style={{ width: '100%', padding: '14px', background: 'var(--black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--white)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', marginBottom: '8px', display: 'block', textTransform: 'uppercase' }}>Email</label>
                            <input type="email" id="c_email" required style={{ width: '100%', padding: '14px', background: 'var(--black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--white)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', marginBottom: '8px', display: 'block', textTransform: 'uppercase' }}>Number</label>
                            <input type="tel" id="c_number" required style={{ width: '100%', padding: '14px', background: 'var(--black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--white)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', marginBottom: '8px', display: 'block', textTransform: 'uppercase' }}>Company</label>
                            <input type="text" id="c_company" required style={{ width: '100%', padding: '14px', background: 'var(--black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--white)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s', fontFamily: "'Inter', sans-serif" }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--muted)', marginBottom: '8px', display: 'block', textTransform: 'uppercase' }}>Company Requirement</label>
                            <textarea id="c_requirement" rows="4" required style={{ width: '100%', padding: '14px', background: 'var(--black)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--white)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s', fontFamily: "'Inter', sans-serif", resize: 'vertical' }}></textarea>
                        </div>
                        <button type="submit" className="btn-primary magnetic-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '10px', cursor: 'pointer' }}>Submit Request</button>
                        {success && <div style={{ marginTop: '15px', color: 'var(--lime)', fontSize: '14px', textAlign: 'center' }}>Your request has been submitted successfully!</div>}
                    </form>
                </div>
            </section>
        </main>
    );
}
