import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const pulse: Variants = {
  pulse: { 
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } 
  },
};
