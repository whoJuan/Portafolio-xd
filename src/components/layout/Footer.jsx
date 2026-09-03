import React from 'react';

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="app-container">
        <div className="footer-content-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              KORVEXYA
            </span>
            <span style={{ margin: '0 8px', color: 'var(--text-faint)' }}>—</span>
            <span>Soluciones E-Commerce &amp; Sistemas CRM a Medida © 2026. Todos los derechos reservados.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <span className="status-pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span>SISTEMAS OPERATIVOS 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
