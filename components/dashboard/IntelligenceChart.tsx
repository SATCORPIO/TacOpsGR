'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { generateMockChartData } from '@/lib/mockData';

interface ChartPoint {
  time: string;
  value: number;
}

export const IntelligenceChart = () => {
  const [data, setData] = useState<ChartPoint[]>(generateMockChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newPoint = generateMockChartData(1)[0];
        return [...prev.slice(-19), newPoint];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="bg-[#0B0F14] border border-[#9F8750] p-6"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-sm uppercase mb-4 text-[#6B7280]">Intelligence Trends</h2>
      
      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ background: '#0B0F14', border: '1px solid #9F8750' }} 
            />
            <Line type="monotone" dataKey="value" stroke="#9F8750" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
