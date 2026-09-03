import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export function CaseStudyModal({ project, onClose, playClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-overlay-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div 
          className="modal-sheet-panel"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            className="modal-close-trigger" 
            onClick={() => { playClick(); onClose(); }}
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span className="hero-pill-badge" style={{ color: 'var(--accent-primary)' }}>
                {project.client}
              </span>
              <span className="hero-pill-badge">
                {project.role}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-editorial-headline)', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.15 }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '1.08rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '6px' }}>
              {project.tag}
            </p>
          </div>

          {/* Overview */}
          <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
            {project.overview}
          </div>

          {/* Grid of Problem / Solution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '20px', borderRadius: 'var(--radius-lg)', background: 'var(--paper-alabaster)', border: '1px solid var(--paper-border)' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ef4444', marginBottom: '8px' }}>
                01 // DESAFÍO &amp; DIAGNÓSTICO
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.problem}
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: 'var(--radius-lg)', background: 'var(--paper-alabaster)', border: '1px solid var(--paper-border)' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '8px' }}>
                02 // SOLUCIÓN DE DISEÑO &amp; SISTEMAS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.solution.map((sol, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tokens & Motion */}
          <div style={{ padding: '20px', borderRadius: 'var(--radius-lg)', background: 'var(--paper-alabaster)', border: '1px solid var(--paper-border)', marginBottom: '32px' }}>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '10px' }}>
              03 // TOKENS &amp; COREOGRAFÍA CINÉTICA
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              {project.tokens.map(t => (
                <span key={t} className="token-code-tag" style={{ margin: 0, fontSize: '0.74rem' }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {project.motion}
            </p>
          </div>

          {/* Results Strip */}
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
              04 // RESULTADOS &amp; MÉTRICAS DE NEGOCIO
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {project.impact.map(r => (
                <div 
                  key={r.label}
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--paper-border-strong)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-editorial-headline)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '6px' }}>
                    {r.val}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
