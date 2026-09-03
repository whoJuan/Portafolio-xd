import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { THEME_PRESETS } from '../../data/themePresets';
import { Sparkles, Sliders, Check } from 'lucide-react';

export function TokensLab({ 
  currentTheme, 
  onSelectTheme, 
  blurValue, 
  setBlurValue, 
  saturationValue, 
  setSaturationValue,
  playClick,
  playChime
}) {
  const [demoToggle, setDemoToggle] = useState(true);

  return (
    <section className="section-wrapper" id="tokens-lab">
      <div className="app-container">
        <SectionHeader 
          numeral="02"
          kicker="Playground en Tiempo Real"
          title="Laboratorio de"
          italicAccent="Tokens &amp; Glassmorfismo"
          subtitle="Interactúa directamente con la arquitectura de diseño. Modifica los parámetros de desenfoque de cristal, refracción lumínica y paletas cromáticas para ver el sistema reaccionar en vivo."
        />

        <RevealOnScroll direction="scale" delay={0.1}>
          <GlassCard className="tokens-lab-container">
            <div className="tokens-lab-grid">
              
              {/* Controls Column */}
              <div className="lab-control-section">
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                    1. PALETA CROMÁTICA EDITORIAL
                  </div>
                  <div className="theme-pill-selector">
                    {THEME_PRESETS.map(preset => (
                      <button
                        key={preset.id}
                        className={`theme-choice-btn ${currentTheme === preset.id ? 'active' : ''}`}
                        onClick={() => {
                          playClick();
                          onSelectTheme(preset.id);
                        }}
                      >
                        <span className="theme-dot" style={{ background: preset.dotClass }} />
                        <span>{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Blur Slider */}
                <div className="slider-group">
                  <div className="slider-title-row">
                    <span>2. INTENSIDAD GLASS BLUR</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                      {blurValue}px
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="4" 
                    max="48" 
                    value={blurValue}
                    onChange={(e) => setBlurValue(Number(e.target.value))}
                    className="editorial-slider"
                  />
                </div>

                {/* Saturation Slider */}
                <div className="slider-group">
                  <div className="slider-title-row">
                    <span>3. SATURACIÓN DE FONDO</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                      {saturationValue}%
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="250" 
                    value={saturationValue}
                    onChange={(e) => setSaturationValue(Number(e.target.value))}
                    className="editorial-slider"
                  />
                </div>
              </div>

              {/* Live Preview Column */}
              <div className="lab-preview-box">
                <div className="token-code-tag">
                  --glass-blur: {blurValue}px; --glass-saturation: {saturationValue}%;
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>Componente de Prueba Activo</span>
                  </div>
                  <span className="hero-pill-badge" style={{ fontSize: '0.7rem' }}>LIVE PREVIEW</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  Esta superficie reacciona en tiempo real a las variables inyectadas. Prueba interactuar con los botones de micro-sonido háptico:
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}>
                    <input 
                      type="checkbox" 
                      checked={demoToggle} 
                      onChange={() => { playClick(); setDemoToggle(!demoToggle); }}
                      style={{ accentColor: 'var(--accent-primary)', width: '16px', height: '16px' }}
                    />
                    <span>Modo Háptico</span>
                  </label>

                  <button 
                    className="btn-editorial-primary" 
                    style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                    onClick={playChime}
                  >
                    <span>Chime Cristal</span>
                  </button>

                  <button 
                    className="btn-editorial-secondary" 
                    style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                    onClick={playClick}
                  >
                    <span>Click Háptico</span>
                  </button>
                </div>
              </div>

            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
