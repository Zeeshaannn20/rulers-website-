'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative border-t-2 border-white/10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-between min-h-[50vh]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div>
            <h4 className="font-display font-black text-2xl uppercase tracking-tighter text-brand-lime mb-6">
              Rulers Studio
            </h4>
            <p className="font-sans text-white/50 text-sm max-w-xs leading-relaxed">
              We merge cutting-edge AI generation with cinematic storytelling to create impossible worlds for visionary brands.
            </p>
          </div>
          
          <div>
            <h5 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-white/70">Connect</h5>
            <ul className="space-y-4 font-sans font-medium">
              <li><a href="#" className="hover:text-brand-lime transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-white/70">Location</h5>
            <ul className="space-y-4 font-sans font-medium text-white/70">
              <li>101 Metaverse Blvd</li>
              <li>New York, NY 10012</li>
              <li>United States</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono font-bold uppercase tracking-widest text-sm mb-6 text-white/70">Inquiries</h5>
            <a href="mailto:hello@rulersstudio.com" className="font-display font-bold text-2xl hover:text-brand-lime transition-colors">
              hello@rulersstudio.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-auto">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rulers Studio. All Rights Reserved.
          </p>
          <div className="flex gap-6 font-mono text-xs text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Giant R Watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none translate-y-1/4 translate-x-1/4 opacity-[0.03]">
        <svg 
          width="800" 
          height="800" 
          viewBox="0 0 120 120" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 100 V10 H70 C85 10 95 20 95 35 C95 50 85 60 70 60 H50 V100 M50 60 L90 100" stroke="white" strokeWidth="20" strokeLinecap="square" strokeLinejoin="miter"/>
        </svg>
      </div>
    </footer>
  );
}
