import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Sliders, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export function HeroEditorial({ playChime, playClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-wrapper" id="hero" style={{ paddingTop: '40px' }}>
      <div className="app-container">
        <div className="hero-editorial-grid">
          
          {/* Narrative Column */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <span className="hero-pill-badge">
                  <span style={{ color: 'var(--accent-secondary)' }}>✦</span>
                  Juan Aguirre — Dev Full Stack
                </span>
                <span className="hero-pill-badge">
                  <span>⚡</span>
                  UX/UI &amp; Systems Architect
                </span>
              </div>

              <h1 className="hero-headline">
                Arquitectura <br />
                <span className="serif-accent">Sensorial</span> &amp; <br />
                <span className="gradient-accent">Sistemas UI de Élite</span>
              </h1>

              <p className="hero-editorial-lead">
                Diseño centrado en <strong>investigación cognitiva profunda</strong>, <strong>morfismo editorial de revista</strong> y <strong>micro-interacciones cinéticas</strong> con Framer Motion para convertir productos digitales complejos en experiencias intuitivas e inolvidables.
              </p>

              <div className="hero-actions-row">
                <button 
                  className="btn-editorial-primary"
                  onClick={() => { playChime(); scrollTo('projects'); }}
                >
                  <span>Explorar Case Studies</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="btn-editorial-secondary"
                  onClick={() => { playClick(); scrollTo('tokens-lab'); }}
                >
                  <span>Tokens Lab Interactivo</span>
                  <Sliders size={16} />
                </button>
              </div>

              {/* Stats Band */}
              <div className="hero-stats-band">
                <div>
                  <div className="stat-item-num">9+</div>
                  <div className="stat-item-lbl">Años de Maestría UX</div>
                </div>
                <div>
                  <div className="stat-item-num" style={{ color: 'var(--accent-emerald)' }}>-42%</div>
                  <div className="stat-item-lbl">Carga Cognitiva</div>
                </div>
                <div>
                  <div className="stat-item-num">14+</div>
                  <div className="stat-item-lbl">Premios UI/UX</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 3D Glass Layer Visual Column */}
          <RevealOnScroll direction="left" delay={0.25}>
            <GlassCard className="hero-mockup-frame">
              <div className="mockup-header-bar">
                <div className="mockup-traffic-dots">
                  <span className="dot-indicator dot-red" />
                  <span className="dot-indicator dot-yellow" />
                  <span className="dot-indicator dot-green" />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  EDITORIAL_MATRIX.PRO
                </span>
              </div>

              <div style={{ marginTop: '16px' }}>
                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px' }}>
                      <Layers size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Multi-Layer Glass Engine</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Backdrop saturation + White rim</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>20px BLUR</span>
                </div>

                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px', color: 'var(--accent-secondary)', background: 'rgba(2,132,199,0.08)' }}>
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Atomic Tokens Architecture</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Primitives → Semantics → Components</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>TOKENS: OK</span>
                </div>

                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px', color: 'var(--accent-emerald)', background: 'rgba(5,150,105,0.08)' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Framer Motion Choreography</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Continuous scroll &amp; spring physics</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>SPRING: 60FPS</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', padding: '12px 16px', background: 'rgba(79,70,229,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(79,70,229,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Accesibilidad Certificada
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  WCAG 2.2 AAA
                </span>
              </div>
            </GlassCard>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
