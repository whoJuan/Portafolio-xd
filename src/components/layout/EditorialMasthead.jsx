import React from 'react';

export function EditorialMasthead() {
  return (
    <div className="editorial-masthead">
      <div className="app-container">
        <div className="masthead-inner">
          <div className="masthead-tag">
            <span>VOL. 26</span>
            <span>//</span>
            <span>ENTERPRISE TECH</span>
          </div>

          <div>KORVEXYA — SOLUCIONES E-COMMERCE, CRM &amp; SOFTWARE A MEDIDA</div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <span>CONSULTORÍA DISPONIBLE 2026</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>● SISTEMAS ACTIVOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
