// components/dashboard/OperationsMap.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeIn, pulse } from '@/lib/animations';

const locations = [
  { name: 'NYC', top: '30%', left: '25%' },
  { name: 'LON', top: '25%', left: '45%' },
  { name: 'TOK', top: '35%', left: '80%' },
  { name: 'BER', top: '28%', left: '50%' },
  { name: 'SYD', top: '70%', left: '85%' },
];

export const OperationsMap = () => {
  return (
    <motion.div 
      className="bg-[#0B0F14] border border-[#9F8750] p-6 relative"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-sm uppercase mb-4 text-[#6B7280]">Global Operations Map</h2>
      
      <div className="relative h-64 bg-[#050507] overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-[#9F8750]" />
          ))}
        </div>
        
        {/* Location pings */}
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            className="absolute w-3 h-3 rounded-full bg-[#7A0C14] shadow-[0_0_10px_#7A0C14]"
            style={{ top: loc.top, left: loc.left }}
            variants={pulse}
            animate="pulse"
            transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#6B7280]">{loc.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
