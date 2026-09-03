import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, PlayCircle, Code2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { SKILLS_PILLARS } from '../../data/skillsData';

export function SkillsMatrix({ playClick }) {
  const getIcon = (type) => {
    switch (type) {
      case 'compass': return <Compass size={24} />;
      case 'layers': return <Layers size={24} />;
      case 'play': return <PlayCircle size={24} />;
      case 'code': return <Code2 size={24} />;
      default: return <Layers size={24} />;
    }
  };

  return (
    <section className="section-wrapper" id="skills">
      <div className="app-container">
        <SectionHeader 
          numeral="01"
          kicker="Stack &amp; Capacidades"
          title="Matriz de Servicios &amp;"
          italicAccent="Tecnología"
          subtitle="Un conjunto integral de capacidades que abarca desde arquitecturas E-Commerce de alta velocidad y desarrollo de CRM a medida, hasta integraciones de APIs complejas e Inteligencia Artificial."
        />

        <div className="skills-pillars-grid">
          {SKILLS_PILLARS.map((pillar, idx) => (
            <RevealOnScroll key={pillar.num} delay={idx * 0.1} direction="up">
              <GlassCard style={{ height: '100%' }}>
                <div className="skill-card-inner">
                  <div>
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box">
                        {getIcon(pillar.iconType)}
                      </div>
                      <span className="pillar-index-num">{pillar.num}</span>
                    </div>

                    <h3 className="pillar-headline">{pillar.title}</h3>
                    <p className="pillar-body-text">{pillar.description}</p>

                    <div className="pillar-chips-wrap">
                      {pillar.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="pillar-tag-chip"
                          onClick={playClick}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--text-muted)' }}>PROFICIENCIA</span>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{pillar.proficiency}%</span>
                    </div>
                    <div className="gauge-track">
                      <motion.div 
                        className="gauge-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pillar.proficiency}%` }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
