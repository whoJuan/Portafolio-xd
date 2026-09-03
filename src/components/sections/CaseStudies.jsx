import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { CASE_STUDIES } from '../../data/caseStudies';

export function CaseStudies({ onOpenDeepDive, playModalOpen, playClick }) {
  // Vector graphics for each project
  const renderGraphic = (id) => {
    if (id === 'apex') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#0c0e14" />
          <line x1="40" y1="60" x2="560" y2="60" stroke="#242b3d" strokeDasharray="4 4" />
          <line x1="40" y1="120" x2="560" y2="120" stroke="#242b3d" strokeDasharray="4 4" />
          <line x1="40" y1="180" x2="560" y2="180" stroke="#242b3d" strokeDasharray="4 4" />
          <line x1="40" y1="240" x2="560" y2="240" stroke="#242b3d" strokeDasharray="4 4" />
          
          <rect x="70" y="140" width="12" height="60" fill="#10b981" rx="2" />
          <line x1="76" y1="120" x2="76" y2="220" stroke="#10b981" strokeWidth="2" />
          <rect x="110" y="170" width="12" height="40" fill="#f43f5e" rx="2" />
          <line x1="116" y1="150" x2="116" y2="230" stroke="#f43f5e" strokeWidth="2" />
          <rect x="150" y="110" width="12" height="90" fill="#10b981" rx="2" />
          <line x1="156" y1="90" x2="156" y2="220" stroke="#10b981" strokeWidth="2" />

          <path d="M 40 250 Q 140 180, 240 190 T 440 100 T 560 70 L 560 320 L 40 320 Z" fill="url(#apexGrad)" opacity="0.35" />
          <path d="M 40 250 Q 140 180, 240 190 T 440 100 T 560 70" stroke="#6366f1" strokeWidth="4" fill="none" />

          <rect x="320" y="140" width="220" height="120" rx="16" fill="#12151f" fillOpacity="0.85" stroke="#6366f1" strokeWidth="1.5" />
          <text x="340" y="175" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="14">Apex Asset Intelligence</text>
          <text x="340" y="205" fill="#22d3ee" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="22">$4,892,120.50</text>
          <text x="340" y="235" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontSize="12">▲ +28.4% Alpha Signal</text>

          <defs>
            <linearGradient id="apexGrad" x1="300" y1="70" x2="300" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    if (id === 'aether') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#090a0f" />
          <circle cx="300" cy="187" r="90" fill="url(#aetherOrbGrad)" filter="drop-shadow(0 0 40px #8b5cf6)" />
          <circle cx="300" cy="187" r="70" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />

          <path d="M 60 187 Q 120 120, 180 187 T 300 187 T 420 187 T 540 187" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.8" />
          <path d="M 60 187 Q 150 240, 240 187 T 360 187 T 480 187 T 540 187" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.6" />

          <rect x="60" y="70" width="160" height="65" rx="14" fill="#141824" fillOpacity="0.85" stroke="#22d3ee" strokeWidth="1" />
          <text x="80" y="98" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12">Multimodal Prompt</text>
          <text x="80" y="118" fill="#a1a1aa" fontFamily="'JetBrains Mono', monospace" fontSize="10">Spatial Voice: Active</text>

          <rect x="380" y="240" width="170" height="65" rx="14" fill="#141824" fillOpacity="0.85" stroke="#8b5cf6" strokeWidth="1" />
          <text x="400" y="268" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12">Adaptive Canvas</text>
          <text x="400" y="288" fill="#22d3ee" fontFamily="'JetBrains Mono', monospace" fontSize="10">Zero-Latency Sync</text>

          <defs>
            <radialGradient id="aetherOrbGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 187) rotate(90) scale(90)">
              <stop stopColor="#8b5cf6" />
              <stop offset="0.7" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      );
    }

    if (id === 'lumina') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#08090d" />
          <circle cx="300" cy="187" r="130" stroke="#eab308" strokeWidth="1" strokeDasharray="1 5" opacity="0.4" />
          <circle cx="300" cy="187" r="100" stroke="#eab308" strokeWidth="1.5" opacity="0.7" />
          <circle cx="300" cy="187" r="30" fill="#12151f" stroke="#eab308" strokeWidth="2" />

          <line x1="300" y1="87" x2="300" y2="187" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <line x1="300" y1="187" x2="370" y2="187" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />

          <rect x="50" y="240" width="180" height="80" rx="12" fill="#0f1118" fillOpacity="0.9" stroke="#eab308" strokeWidth="1" />
          <text x="70" y="270" fill="#eab308" fontFamily="'Instrument Serif', serif" fontStyle="italic" fontSize="18">Chronographe Royal</text>
          <text x="70" y="295" fill="#ffffff" fontFamily="'Syne', sans-serif" fontWeight="700" fontSize="14">€48,500 EUR</text>

          <text x="300" y="55" fill="#ffffff" fontFamily="'Instrument Serif', serif" fontSize="28" textAnchor="middle" letterSpacing="4">L U M I N A</text>
        </svg>
      );
    }

    // Synapse
    return (
      <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="375" fill="#080c14" />
        <path d="M 40 187 L 160 187 L 180 150 L 200 230 L 220 90 L 240 260 L 260 187 L 340 187 L 360 150 L 380 230 L 400 90 L 420 260 L 440 187 L 560 187" stroke="#10b981" strokeWidth="3" strokeLinecap="round" fill="none" />

        <rect x="210" y="40" width="180" height="295" rx="24" fill="#12151f" fillOpacity="0.8" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="300" cy="60" r="4" fill="#ffffff" />
        <text x="300" y="110" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="14" textAnchor="middle">Ritmo Cardíaco</text>
        <text x="300" y="145" fill="#10b981" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="28" textAnchor="middle">68 BPM</text>
        <text x="300" y="170" fill="#a1a1aa" fontFamily="'JetBrains Mono', monospace" fontSize="10" textAnchor="middle">HRV: 74ms (Óptimo)</text>

        <rect x="230" y="195" width="140" height="40" rx="8" fill="#191e2b" stroke="#242b3d" />
        <text x="245" y="220" fill="#22d3ee" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11">Fase REM: 2h 15m</text>
      </svg>
    );
  };

  return (
    <section className="section-wrapper" id="projects">
      <div className="app-container">
        <SectionHeader 
          numeral="03"
          kicker="Trabajos Destacados"
          title="Case Studies &amp;"
          italicAccent="Proyectos Insignia"
          subtitle="Selección curada de iniciativas de diseño complejas donde la investigación rigurosa, el diseño de sistemas y la innovación visual entregaron resultados de negocio extraordinarios."
        />

        <div className="case-studies-stack">
          {CASE_STUDIES.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 0.15} direction="up">
              <GlassCard className="case-study-spread">
                
                {/* Visual Canvas Column */}
                <div 
                  className="case-visual-wrapper"
                  onClick={() => {
                    playModalOpen();
                    onOpenDeepDive(project);
                  }}
                  title="Haz clic para ver el desglose completo de UX"
                >
                  <span className="case-overlay-badge">{project.tag}</span>
                  {renderGraphic(project.id)}
                  <div className="case-inspect-button">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content Column */}
                <div>
                  <div className="case-header-meta">
                    <span className="case-num-tag">{project.number}</span>
                    <span style={{ color: 'var(--text-faint)' }}>//</span>
                    <span className="case-client-name">{project.client}</span>
                  </div>

                  <h3 className="case-article-title">{project.title}</h3>
                  <p className="case-article-desc">{project.description}</p>

                  <div className="case-impact-strip">
                    {project.impact.map(imp => (
                      <div key={imp.label}>
                        <div className="impact-val">{imp.val}</div>
                        <div className="impact-lbl">{imp.label}</div>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="btn-editorial-secondary"
                    onClick={() => {
                      playModalOpen();
                      onOpenDeepDive(project);
                    }}
                  >
                    <span>Ver Caso de Estudio Detallado</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
