'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { generateMockActivity } from '@/lib/mockData';

interface ActivityItem {
  id: number;
  timestamp: string;
  message: string;
  status: 'success' | 'warning' | 'error';
}

export const ActivityFeed = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = generateMockActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return '#1F5133';
      case 'warning': return '#9F8750';
      case 'error': return '#5E0B12';
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
      <h2 className="text-sm uppercase mb-4 text-[#6B7280]">Live Activity Feed</h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map(item => (
          <motion.div 
            key={item.id}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="w-2 h-2 rounded-full mt-2" 
              style={{ backgroundColor: getStatusColor(item.status) }}
            />
            <div>
              <div className="text-xs text-[#6B7280]">{item.timestamp}</div>
              <div className="text-sm">{item.message}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
