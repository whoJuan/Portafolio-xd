import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight } from 'lucide-react';

export function Navigation({ 
  activeSection, 
  isScrolled, 
  soundEnabled, 
  onToggleSound, 
  onTriggerEasterEgg,
  playClick,
  playChime 
}) {
  const [clickCount, setClickCount] = useState(0);

  // Reset click count after 3 seconds of inactivity
  useEffect(() => {
    if (clickCount === 0) return;
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    playPopClick(nextCount);

    if (nextCount >= 10) {
      setClickCount(0);
      onTriggerEasterEgg();
    }
  };

  const playPopClick = (count) => {
    if (count % 3 === 0) {
      playChime();
    } else {
      playClick();
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'skills', label: 'Skills & Craft' },
    { id: 'tokens-lab', label: 'Tokens Lab' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'methodology', label: 'Método' },
    { id: 'about', label: 'Filosofía' }
  ];

  const scrollTo = (id) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-floating">
      <nav className={`nav-capsule ${isScrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
        
        {/* Brand Logo with Easter Egg Click Listener */}
        <button 
          className="brand-logo-trigger" 
          onClick={handleLogoClick}
          title="Toca 10 veces para desbloquear el Easter Egg Secreto"
        >
          <div className="logo-prism">
            <div className="logo-prism-inner" />
            {clickCount > 0 && (
              <span className="easter-egg-indicator">
                {clickCount}
              </span>
            )}
          </div>
          <div className="brand-text-col">
            <span className="brand-name">Juan Aguirre</span>
            <span className="brand-badge">Dev Full Stack</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <ul className="nav-links-list">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Nav Actions */}
        <div className="nav-actions-group">
          <div className="status-pill" title="Disponibilidad para proyectos">
            <span className="status-pulse-dot" />
            <span>Disponible</span>
          </div>

          <button 
            className="tool-icon-btn" 
            onClick={onToggleSound}
            aria-label={soundEnabled ? "Silenciar micro-sonidos" : "Activar micro-sonidos"}
            title={soundEnabled ? "Micro-sonido activo" : "Micro-sonido silenciado"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button 
            className="btn-editorial-primary" 
            onClick={() => scrollTo('contact')}
            style={{ padding: '6px 16px', fontSize: '0.82rem' }}
          >
            <span>Hablemos</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </nav>
    </header>
  );
}
