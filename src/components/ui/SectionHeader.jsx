import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({ numeral, kicker, title, italicAccent, subtitle }) {
  return (
    <motion.div 
      className="editorial-section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-meta-row">
        {numeral && <span className="editorial-numeral">{numeral}</span>}
        {kicker && <span className="section-kicker-tag">{kicker}</span>}
      </div>

      <h2 className="editorial-title">
        {title} {italicAccent && <span className="serif-accent">{italicAccent}</span>}
      </h2>

      {subtitle && (
        <p className="editorial-subtitle">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
