'use client';

import { motion } from 'framer-motion';

const CLIENTS = [
  'AMUL', 'BOAT', 'PAPER BOAT', 'TANISHQ', 'NIKE', 
  'ZOMATO', 'MAMAEARTH', 'CRED', 'SWIGGY', 'ASIAN PAINTS',
  'ROLEX', 'APPLE', 'TESLA', 'LVMH', 'SAMSUNG', 'ADIDAS'
];

export default function ClientWall() {
  return (
    <section className="bg-[#F4F4F1] text-black py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm uppercase tracking-widest font-bold">Trusted by the Visionaries</p>
        </motion.div>

        <div className="flex flex-wrap justify-center border-t border-l border-black/10">
          {CLIENTS.map((client, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="w-1/2 md:w-1/4 h-32 border-r border-b border-black/10 flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:bg-black hover:text-brand-lime transition-all duration-500 group"
            >
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity text-center">
                {client}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
