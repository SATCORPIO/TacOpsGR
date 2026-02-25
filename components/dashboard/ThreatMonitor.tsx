'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { generateMockThreats } from '@/lib/mockData';

interface ThreatData {
  risk: number;
  regions: string[];
  alerts: string[];
}

export const ThreatMonitor = () => {
  const [threats, setThreats] = useState<ThreatData>({
    risk: 45,
    regions: ['Europe', 'Asia'],
    alerts: ['Cyber Intrusion Detected'],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(generateMockThreats());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartData = [{ name: 'Risk', value: threats.risk, fill: '#5E0B12' }];

  return (
    <motion.div 
      className="bg-[#0B0F14] border border-[#9F8750] p-6"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-sm uppercase mb-4 text-[#6B7280]">Threat Monitor</h2>
      
      <div className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer>
            <RadialBarChart 
              innerRadius="80%" 
              outerRadius="100%" 
              barSize={10} 
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar minAngle={15} background clockWise dataKey="value" />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl fill-current">
                {threats.risk}%
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Flagged Regions</label>
          <div className="text-sm">{threats.regions.join(', ')}</div>
        </div>
        
        <div>
          <label className="text-xs uppercase text-[#6B7280]">Active Alerts</label>
          <div className="space-y-1">
            {threats.alerts.map((alert, i) => (
              <div key={i} className="text-sm text-[#5E0B12]">{alert}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
