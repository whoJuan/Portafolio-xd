import React from 'react';

export function EditorialMasthead() {
  return (
    <div className="editorial-masthead">
      <div className="app-container">
        <div className="masthead-inner">
          <div className="masthead-tag masthead-item-desktop">
            <span>VOL. 26</span>
            <span>//</span>
            <span>ENTERPRISE TECH</span>
          </div>

          <div className="masthead-brand-banner">
            KORVEXYA — SOLUCIONES E-COMMERCE &amp; CRM A MEDIDA
          </div>

          <div className="masthead-status-side masthead-item-desktop" style={{ display: 'flex', gap: '14px' }}>
            <span>CONSULTORÍA DISPONIBLE 2026</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>● SISTEMAS ACTIVOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

