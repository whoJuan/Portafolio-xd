import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export function Contact({ playChime, playClick }) {
  const [copied, setCopied] = useState(false);
  const [budget, setBudget] = useState('10k-25k');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    projectScope: ''
  });

  const email = "juancitochannel@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      playChime();
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn("Copy failed:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    playChime();

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ clientName: '', clientEmail: '', projectScope: '' });
    }, 3500);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="app-container">
        <RevealOnScroll direction="scale" delay={0.1}>
          <GlassCard className="contact-spread-box">
            <div className="contact-layout-grid">

              {/* Left Info */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="section-kicker-tag">Commissioning Studio</span>
                  <h2 className="editorial-title" style={{ marginTop: '12px' }}>
                    ¿Construimos algo <br />
                    <span className="serif-accent" style={{ color: 'var(--accent-primary)' }}>extraordinario</span> juntos?
                  </h2>
                  <p className="editorial-subtitle">
                    Disponible para roles de Liderazgo de Producto, Rediseño de Plataformas SaaS, Sistemas de Diseño y Proyectos de Alta Complejidad.
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Contacto Directo
                  </div>
                  <button className="copy-email-box" onClick={handleCopy}>
                    {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    <span>{email}</span>
                    {copied && (
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.8rem' }}>
                        ¡Copiado!
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Form */}
              <form onSubmit={handleSubmit}>
                <div className="form-field-group">
                  <label className="form-label-text" htmlFor="clientName">Nombre o Empresa</label>
                  <input
                    type="text"
                    id="clientName"
                    className="editorial-input"
                    placeholder="Ej. Stripe / Sequoia / Tu Nombre"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label-text" htmlFor="clientEmail">Correo Electrónico</label>
                  <input
                    type="email"
                    id="clientEmail"
                    className="editorial-input"
                    placeholder="nombre@compania.com"
                    required
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label-text">Rango de Presupuesto Estimado</label>
                  <div className="budget-tags-row">
                    {['$10k – $25k', '$25k – $50k', '$50k+'].map(b => (
                      <button
                        key={b}
                        type="button"
                        className={`budget-chip-btn ${budget === b ? 'active' : ''}`}
                        onClick={() => { playClick(); setBudget(b); }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-label-text" htmlFor="projectScope">Visión del Proyecto</label>
                  <textarea
                    id="projectScope"
                    rows={3}
                    className="editorial-textarea"
                    placeholder="Cuéntame sobre el producto, los retos actuales de UX/UI y el cronograma deseado..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-editorial-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    background: formSubmitted ? 'linear-gradient(135deg, #059669, #0284c7)' : undefined
                  }}
                >
                  {formSubmitted ? (
                    <>
                      <Check size={16} />
                      <span>✓ ¡Solicitud Enviada con Éxito!</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Solicitud de Proyecto</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
