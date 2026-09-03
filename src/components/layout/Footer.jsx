import React from 'react';

export function Footer({ playClick }) {
  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'WhatsApp', url: 'https://whatsapp.com' },
    { name: 'Documentación', url: '#projects' }
  ];

  return (
    <footer className="editorial-footer">
      <div className="app-container">
        <div className="footer-content-row">
          <div>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              KORVEXYA — SOLUCIONES E-COMMERCE &amp; CRM
            </span>
            <span style={{ margin: '0 8px', color: 'var(--text-faint)' }}>—</span>
            <span>Agencia de Desarrollo Web, Arquitecturas de E-Commerce &amp; Sistemas CRM a Medida © 2026.</span>
          </div>

          <div className="social-links-row">
            {socials.map(s => (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link-item"
                onClick={playClick}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

