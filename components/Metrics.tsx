'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const METRICS = [
  { value: 150, suffix: '+', label: 'Cinematic Campaigns' },
  { value: 50, suffix: 'M+', label: 'Views Generated' },
  { value: 99, suffix: '%', label: 'AI Synthesis' },
  { value: 24, suffix: 'h', label: 'Turnaround Time' }
];

export default function Metrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-black border-y-2 border-white/10 py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x-2 divide-white/10">
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center md:items-start md:pl-8 first:pl-0 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              <h3 className="font-display font-black text-6xl lg:text-7xl text-white tracking-tighter">
                {inView ? (
                  <CountUp end={metric.value} duration={2.5} useEasing={true} />
                ) : (
                  "0"
                )}
                <span className="text-brand-lime">{metric.suffix}</span>
              </h3>
              <p className="font-mono text-white/50 uppercase tracking-widest text-sm mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
