import React from 'react';

export function EditorialMasthead() {
  return (
    <div className="editorial-masthead">
      <div className="app-container">
        <div className="masthead-inner">
          <div className="masthead-tag">
            <span>VOL. 26</span>
            <span>//</span>
            <span>PRO EDITION</span>
          </div>

          <div>PORTAFOLIO DE JUAN AGUIRRE — DEV FULL STACK</div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <span>UTC-5 // DISPONIBLE Q3/Q4</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>● LIVE SYSTEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
