'use client';

import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  src: string;
  overlayOpacity?: number;
}

export default function VideoBackground({ src, overlayOpacity = 0.6 }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <motion.video
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark gradient overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
