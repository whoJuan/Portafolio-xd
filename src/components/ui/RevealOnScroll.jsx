import React from 'react';
import { motion } from 'framer-motion';

export function RevealOnScroll({ 
  children, 
  delay = 0, 
  direction = 'up', // 'up' | 'left' | 'right' | 'scale'
  className = '',
  amount = 0.2
}) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 35 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      case 'scale': return { opacity: 0, scale: 0.94 };
      default: return { opacity: 0, y: 30 };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case 'scale': return { opacity: 1, scale: 1 };
      default: return { opacity: 1, x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once: false, amount }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
