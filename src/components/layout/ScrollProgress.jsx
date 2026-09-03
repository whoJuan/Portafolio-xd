import React from 'react';

export function ScrollProgress({ progress }) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '3px',
        zIndex: 1000,
        pointerEvents: 'none',
        background: 'transparent'
      }}
      aria-hidden="true"
    >
      <div 
        style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px var(--accent-glow)'
        }}
      />
    </div>
  );
}

