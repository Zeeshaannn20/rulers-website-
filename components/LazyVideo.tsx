'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  style?: React.CSSProperties;
}

export default function LazyVideo({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster = '',
  style,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: '600px', // start loading early
        threshold: 0.15, // triggered when 15% visible
      }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  // Control playback based on intersection state to save CPU/GPU cycles
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isIntersecting) {
      // Play when visible
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented (browser rule), ignore
        });
      }
    } else {
      // Pause immediately when off-screen to release memory and decoder cycles
      video.pause();
    }
  }, [isIntersecting]);

  return (
    <video
      ref={videoRef}
      // Set src when it has intersected at least once to save bandwidth, keep it to prevent black flash
      src={hasIntersected ? src : undefined}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      style={style}
      // Preload metadata early
      preload={hasIntersected ? 'auto' : 'none'}
    />
  );
}
