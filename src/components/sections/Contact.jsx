import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export function Contact({ playChime, playClick }) {
  const [copied, setCopied] = useState(false);
  const [budget, setBudget] = useState('E-Commerce');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    projectScope: ''
  });

  const email = "Korvexyasea@gmail.com";

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
                  <span className="section-kicker-tag">Tech &amp; Growth Studio</span>
                  <h2 className="editorial-title" style={{ marginTop: '12px' }}>
                    ¿Impulsamos tu <br />
                    <span className="serif-accent" style={{ color: 'var(--accent-primary)' }}>E-Commerce o CRM</span> al siguiente nivel?
                  </h2>
                  <p className="editorial-subtitle">
                    Disponible para consultoría técnica, desarrollo de tiendas virtuales de alto impacto, plataformas CRM a medida, integraciones de software y automatizaciones con IA.
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
                    placeholder="Ej. Mi Tienda / Empresa / Tu Nombre"
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
                    placeholder="contacto@tuempresa.com"
                    required
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label-text">Tipo de Solución Requerida</label>
                  <div className="budget-tags-row">
                    {['E-Commerce', 'Sistema CRM', 'Integración ERP/Pagos', 'IA & Automatización'].map(b => (
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
                  <label className="form-label-text" htmlFor="projectScope">Detalles del Proyecto</label>
                  <textarea
                    id="projectScope"
                    rows={3}
                    className="editorial-textarea"
                    placeholder="Cuéntanos sobre los objetivos de venta, requerimientos técnicos, pasarelas de pago o sistemas a integrar..."
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
                      <span>Enviar Solicitud de Consulta</span>
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

