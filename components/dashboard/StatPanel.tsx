'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, pulse } from '@/lib/animations';
import { generateMockStats } from '@/lib/mockData';

export const StatPanel = () => {
  const [stats, setStats] = useState({
    operations: 42,
    assets: 156,
    channels: 89,
    threatLevel: 'MEDIUM',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(generateMockStats());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'LOW': return '#1F5133';
      case 'MEDIUM': return '#9F8750';
      case 'HIGH': return '#5E0B12';
      default: return '#6B7280';
    }
  };

  return (
    <motion.div 
      className="bg-[#0B0F14] border border-[#9F8750] p-6"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-sm uppercase mb-4 text-[#6B7280]">Operational Status</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Active Operations</label>
          <motion.div 
            className="text-3xl"
            key={stats.operations}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stats.operations}
          </motion.div>
        </div>
        
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Global Assets Deployed</label>
          <motion.div 
            className="text-3xl"
            key={stats.assets}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stats.assets}
          </motion.div>
        </div>
        
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Secure Channels Active</label>
          <motion.div 
            className="text-3xl"
            key={stats.channels}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stats.channels}
          </motion.div>
        </div>
        
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Threat Level</label>
          <motion.div 
            className="text-3xl"
            style={{ color: getThreatColor(stats.threatLevel) }}
            variants={pulse}
            animate="pulse"
          >
            {stats.threatLevel}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
