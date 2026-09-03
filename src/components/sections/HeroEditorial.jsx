import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Users, Sparkles, CheckCircle2, Sliders, Database } from 'lucide-react';
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
                  Korvexya — Tech Agency
                </span>
                <span className="hero-pill-badge">
                  <span>⚡</span>
                  E-Commerce &amp; CRM Solutions
                </span>
              </div>

              <h1 className="hero-headline">
                E-Commerce, CRM <br />
                <span className="serif-accent">Escalables</span> &amp; <br />
                <span className="gradient-accent">Soluciones Tech de Élite</span>
              </h1>

              <p className="hero-editorial-lead">
                Impulsamos tu negocio con <strong>tiendas online de alta conversión</strong>, <strong>sistemas CRM a medida</strong>, integraciones ERP y <strong>automatizaciones con IA</strong> para maximizar ventas y retener más clientes sin fricción operativa.
              </p>

              <div className="hero-actions-row">
                <button 
                  className="btn-editorial-primary"
                  onClick={() => { playChime(); scrollTo('projects'); }}
                >
                  <span>Explorar Soluciones &amp; Servicios</span>
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
                  <div className="stat-item-num" style={{ color: 'var(--accent-emerald)' }}>+240%</div>
                  <div className="stat-item-lbl">Conversión en Ventas</div>
                </div>
                <div>
                  <div className="stat-item-num">99.9%</div>
                  <div className="stat-item-lbl">Uptime en Sistemas CRM</div>
                </div>
                <div>
                  <div className="stat-item-num">0.8s</div>
                  <div className="stat-item-lbl">Velocidad de Carga Tiendas</div>
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
                  KORVEXYA_CORE.ENGINE
                </span>
              </div>

              <div style={{ marginTop: '16px' }}>
                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px', color: 'var(--accent-primary)', background: 'rgba(99,102,241,0.08)' }}>
                      <ShoppingCart size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Next-Gen E-Commerce Architecture</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Shopify Plus / Headless + 1-Click Checkout</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>+240% CONV</span>
                </div>

                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px', color: 'var(--accent-secondary)', background: 'rgba(2,132,199,0.08)' }}>
                      <Users size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Custom CRM &amp; Pipeline Engine</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Lead Scoring, WhatsApp API &amp; Webhooks</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>CRM: ACTIVE</span>
                </div>

                <div className="mockup-layer-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="pillar-icon-box" style={{ width: '38px', height: '38px', color: 'var(--accent-emerald)', background: 'rgba(5,150,105,0.08)' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>AI Sales &amp; 24/7 Automation</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Agentes inteligentes &amp; Recuperación de Carritos</div>
                    </div>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>IA: ONLINE</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', padding: '12px 16px', background: 'rgba(79,70,229,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(79,70,229,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Garantía de Rendimiento &amp; Escalabilidad
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  99.9% UPTIME
                </span>
              </div>
            </GlassCard>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}

