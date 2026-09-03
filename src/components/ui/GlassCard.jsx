import React from 'react';
import { motion } from 'framer-motion';
import { useTiltEffect } from '../../hooks/useTiltEffect';

export function GlassCard({ children, className = '', style = {}, onClick, ...props }) {
  const { handleMouseMove, handleMouseLeave } = useTiltEffect(5);

  return (
    <motion.div
      className={`editorial-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      <div className="card-specular-shine" />
      {children}
    </motion.div>
  );
}
