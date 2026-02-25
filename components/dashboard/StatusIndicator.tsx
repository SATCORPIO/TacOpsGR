import { motion } from 'framer-motion';
import { pulse } from '@/lib/animations';

interface StatusIndicatorProps {
  status: string;
  color: string;
}

export const StatusIndicator = ({ status, color }: StatusIndicatorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div 
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        variants={pulse}
        animate="pulse"
      />
      <div className="text-sm uppercase">{status}</div>
    </div>
  );
};
