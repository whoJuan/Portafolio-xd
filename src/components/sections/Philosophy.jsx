import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { AWARDS_LIST } from '../../data/awardsData';

export function Philosophy() {
  return (
    <section className="section-wrapper" id="about">
      <div className="app-container">
        <SectionHeader 
          numeral="05"
          kicker="Visión &amp; Distinciones"
          title="El Manifiesto de"
          italicAccent="Korvexya"
        />

        <div className="philosophy-grid-layout">
          
          {/* Manifesto Column */}
          <RevealOnScroll direction="right" delay={0.1}>
            <GlassCard style={{ height: '100%' }}>
              <div className="manifesto-quote-box">
                <div>
                  <div className="large-quote-glyph">“</div>
                  <p className="manifesto-quote-text">
                    La tecnología de alto rendimiento no es un costo, <span className="serif-accent" style={{ color: 'var(--accent-primary)' }}>es el mayor motor de crecimiento</span>. Desarrollamos tiendas online y sistemas CRM diseñados para vender más, operar en piloto automático y ofrecer una experiencia insuperable.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid var(--paper-border)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '1rem' }}>
                    KX
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>Korvexya Tech Studio</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>E-COMMERCE &amp; ENTERPRISE CRM SOLUTIONS</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          {/* Honors & Awards List */}
          <RevealOnScroll direction="left" delay={0.2}>
            <GlassCard className="awards-list-wrapper">
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Reconocimientos &amp; Certificaciones
              </div>

              <div>
                {AWARDS_LIST.map(award => (
                  <div key={award.title} className="award-row-item">
                    <div>
                      <div className="award-title-text">{award.title}</div>
                      <div className="award-context-sub">{award.project}</div>
                    </div>
                    <span className="award-year-badge">{award.year}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}

