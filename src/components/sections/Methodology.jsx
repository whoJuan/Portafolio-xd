import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { PROCESS_STEPS } from '../../data/processData';

export function Methodology() {
  return (
    <section className="section-wrapper" id="methodology">
      <div className="app-container">
        <SectionHeader 
          numeral="04"
          kicker="Metodología de Alto Rendimiento"
          title="El Método"
          italicAccent="Korvexya"
          subtitle="Un marco de trabajo riguroso de 4 etapas que asegura sincronía perfecta entre tus objetivos comerciales, la infraestructura tecnológica y la experiencia de tus clientes."
        />

        <div className="process-steps-grid">
          {PROCESS_STEPS.map((step, idx) => (
            <RevealOnScroll key={step.num} delay={idx * 0.1} direction="up">
              <GlassCard style={{ height: '100%' }}>
                <div className="step-box-card">
                  <div className="step-large-num">{step.num}</div>
                  <h3 className="step-headline">{step.title}</h3>
                  <p className="step-copy">{step.desc}</p>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
