import React from 'react';

export function Footer({ playClick }) {
  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Dribbble', url: 'https://dribbble.com' },
    { name: 'Figma Community', url: 'https://figma.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ];

  return (
    <footer className="editorial-footer">
      <div className="app-container">
        <div className="footer-content-row">
          <div>
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              JUAN AGUIRRE — DEV FULL STACK
            </span>
            <span style={{ margin: '0 8px', color: 'var(--text-faint)' }}>—</span>
            <span>Portafolio Profesional de Desarrollo Web, Sistemas UI &amp; Arquitectura Full Stack © 2026.</span>
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
