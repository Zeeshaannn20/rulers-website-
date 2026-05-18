'use client';

import { motion } from 'framer-motion';

const STEPS = [
  { num: '01', title: 'Onboarding Strategy', desc: 'We deep-dive into your brand metrics, audience demographic data, and define critical ROAS & CPA benchmarks.' },
  { num: '02', title: 'Asset Digestion', desc: 'Our machine engines ingest your past high-performing creatives, brand DNA guides, and competitor marketing archives.' },
  { human: true, num: '03', title: 'Collaborative Blueprint', desc: 'We align on target micro-audiences, narrative loops, and custom visual directions for the launch sprint.' },
  { num: '04', title: 'Dynamic Deployment', desc: 'Your performance ads are fully synthesized, dynamically deployed across programmatic channels, and scaled in real-time.' }
];

export default function Process() {
  return (
    <section className="bg-brand-lime text-black py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter"
          >
            The Process
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className={`flex flex-col md:flex-row gap-8 items-start md:items-center p-8 border-2 border-black ${step.human ? 'bg-black text-brand-lime' : 'bg-transparent'}`}
            >
              <div className="font-mono text-5xl md:text-7xl font-bold opacity-30 w-32">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter mb-4">
                  {step.title}
                </h3>
                <p className={`font-sans font-medium max-w-2xl text-lg ${step.human ? 'text-white/80' : 'text-black/70'}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
