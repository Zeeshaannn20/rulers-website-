'use client';

import { motion } from 'framer-motion';

const SERVICES = [
  { title: 'AD Creation', desc: 'Cinematic, high-fidelity ad concepts engineered from script to screen.' },
  { title: 'AI AD Creation', desc: 'Next-generation generative video and voice ads synthesized with mathematical precision.' },
  { title: 'Marketing', desc: 'Omnichannel attention engineering and strategic brand styling to capture global mindshare.' },
  { title: 'Performance Marketing', desc: 'Data-driven, algorithmically optimized conversion campaigns designed for maximum ROI.' },
  { title: 'AI Video Gen', desc: 'Hyper-realistic text-to-video and image-to-video generation with custom cinematic direction.' },
  { title: 'Neural Avatars', desc: 'Synthesized digital human brand ambassadors custom rigged for interactive campaigns.' }
];

export default function Services() {
  return (
    <section className="bg-brand-lime text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans font-semibold max-w-sm uppercase tracking-widest text-sm"
          >
            The tools we use to rewrite reality and bend attention to your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="border-2 border-black p-8 group hover:bg-black hover:text-white transition-colors duration-300 flex flex-col h-[320px]"
              data-cursor="EXPLORE"
            >
              <div className="font-mono text-2xl font-bold mb-auto">0{idx + 1}</div>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4 group-hover:text-brand-lime transition-colors">
                {service.title}
              </h3>
              <p className="font-sans font-medium text-sm text-black/70 group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
