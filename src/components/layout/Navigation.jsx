import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reset click count after 3 seconds of inactivity
  useEffect(() => {
    if (clickCount === 0) return;
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    { id: 'skills', label: 'Stack & Servicios' },
    { id: 'tokens-lab', label: 'Tokens Lab' },
    { id: 'projects', label: 'Soluciones' },
    { id: 'methodology', label: 'Método' },
    { id: 'about', label: 'Nosotros' }
  ];

  const scrollTo = (id) => {
    playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
              <span className="brand-name">Korvexya</span>
              <span className="brand-badge">E-Commerce &amp; CRM</span>
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
            {/* Desktop Only Status Pill */}
            <div className="status-pill nav-status-pill desktop-only" title="Disponibilidad para proyectos">
              <span className="status-pulse-dot" />
              <span className="status-text">Disponible</span>
            </div>

            {/* Sound Toggle (Visible everywhere) */}
            <button 
              className="tool-icon-btn" 
              onClick={onToggleSound}
              aria-label={soundEnabled ? "Silenciar micro-sonidos" : "Activar micro-sonidos"}
              title={soundEnabled ? "Micro-sonido activo" : "Micro-sonido silenciado"}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Desktop Only CTA */}
            <button 
              className="btn-editorial-primary nav-contact-cta desktop-only" 
              onClick={() => scrollTo('contact')}
            >
              <span>Contacto</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="tool-icon-btn mobile-menu-toggle-btn"
              onClick={() => { playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Drawer / Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="mobile-nav-panel">
              <div className="mobile-nav-header">
                <div className="brand-text-col">
                  <span className="brand-name">Korvexya Menu</span>
                  <span className="brand-badge">Navegación Móvil</span>
                </div>
                <button 
                  className="tool-icon-btn" 
                  onClick={() => { playClick(); setMobileMenuOpen(false); }}
                  aria-label="Cerrar menú móvil"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Status Pill in Drawer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', background: 'rgba(5, 150, 105, 0.08)', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-pulse-dot" />
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                    DISPONIBLE PARA PROYECTOS 2026
                  </span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>LATAM &amp; Global</span>
              </div>

              {/* Mobile Links */}
              <div className="mobile-nav-links-list">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => scrollTo(link.id)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="mobile-nav-num">0{i + 1}</span>
                    <span className="mobile-nav-text">{link.label}</span>
                    <ArrowUpRight size={16} className="mobile-nav-arrow" />
                  </motion.button>
                ))}
              </div>

              <div className="mobile-nav-footer">
                <button 
                  className="btn-editorial-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '0.9rem' }}
                  onClick={() => scrollTo('contact')}
                >
                  <span>Iniciar Proyecto con Korvexya</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


