// components/dashboard/CommandHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { StatusIndicator } from './StatusIndicator';

export const CommandHeader = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header 
      className="bg-[#0B0F14] border-b border-[#9F8750] py-4 px-6 flex justify-between items-center"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="text-xl font-serif uppercase">SATCORP COMMAND</div>
      <StatusIndicator status="NETWORK SECURE" color="#1F5133" />
      <div className="text-sm">{time.toLocaleString()}</div>
    </motion.header>
  );
};
