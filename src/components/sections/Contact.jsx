import React, { useState } from 'react';
import { Copy, Check, Send, Loader2, Mail, AlertCircle, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppIcon } from '../ui/WhatsAppFloat';

export function Contact({ playChime, playClick }) {
  const [copied, setCopied] = useState(false);
  const [budget, setBudget] = useState('E-Commerce');
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
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
      if (playChime) playChime();
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn("Copy failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientEmail) return;

    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/Korvexyasea@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre_o_Empresa: formData.clientName,
          Email_Contacto: formData.clientEmail,
          Tipo_de_Servicio: budget,
          Detalles_del_Proyecto: formData.projectScope || 'Sin detalles adicionales especificados',
          _subject: `🚀 Consulta Web Korvexya: ${formData.clientName} [${budget}]`,
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        if (playChime) playChime();
        setFormData({ clientName: '', clientEmail: '', projectScope: '' });
      } else {
        throw new Error('Error al procesar el envío');
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setSubmitStatus('error');
      setErrorMessage('Hubo un inconveniente al enviar en línea. Puedes escribirnos directamente a ' + email);
    }
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(`Consulta Korvexya - ${budget} - ${formData.clientName || 'Cliente'}`)}&body=${encodeURIComponent(`Nombre: ${formData.clientName}\nEmail: ${formData.clientEmail}\nServicio: ${budget}\n\nDetalles del proyecto:\n${formData.projectScope}`)}`;

  return (
    <section className="section-wrapper" id="contact">
      <div className="app-container">
        <RevealOnScroll direction="scale" delay={0.1}>
          <GlassCard className="contact-spread-box">
            <div className="contact-layout-grid">

              {/* Left Info Column */}
              <div className="contact-info-col">
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

                <div className="contact-direct-wrap">
                  {/* Email Box */}
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Correo Electrónico Oficial
                  </div>
                  <button className="copy-email-box" onClick={handleCopy} type="button">
                    {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    <span>{email}</span>
                    {copied && (
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.8rem' }}>
                        ¡Copiado!
                      </span>
                    )}
                  </button>

                  <div style={{ marginTop: '8px', marginBottom: '22px' }}>
                    <a 
                      href={mailtoHref} 
                      className="contact-mailto-link"
                      onClick={playClick}
                    >
                      <Mail size={14} />
                      <span>Abrir en tu app de correo</span>
                    </a>
                  </div>

                  {/* WhatsApp Channels */}
                  <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    WhatsApp &amp; Atención Inmediata
                  </div>
                  
                  {/* Main QR Link */}
                  <a
                    href="https://wa.me/qr/BKSPNQ2R4AAUB1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whatsapp-main-badge"
                    onClick={playClick}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="status-pulse-dot" style={{ background: '#25D366' }} />
                      <span style={{ fontWeight: 700 }}>Canal WhatsApp QR Oficial</span>
                    </div>
                    <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: '#047857', fontWeight: 600 }}>
                      Abrir Chat ↗
                    </span>
                  </a>

                  {/* Dual Phone Numbers */}
                  <div className="contact-whatsapp-phones-grid">
                    <a
                      href="https://wa.me/573104872129?text=Hola%20Korvexya,%20deseo%20cotizar%20un%20proyecto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-wa-number-card"
                      onClick={playClick}
                    >
                      <div className="wa-card-tag">Línea 1 • Proyectos</div>
                      <div className="wa-card-phone">+57 310 4872129</div>
                      <div className="wa-card-cta">Chatear en WhatsApp ↗</div>
                    </a>

                    <a
                      href="https://wa.me/573135281795?text=Hola%20Korvexya,%20deseo%20cotizar%20un%20proyecto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-wa-number-card"
                      onClick={playClick}
                    >
                      <div className="wa-card-tag">Línea 2 • Soporte &amp; CRM</div>
                      <div className="wa-card-phone">+57 313 5281795</div>
                      <div className="wa-card-cta">Chatear en WhatsApp ↗</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="contact-form-col">
                {submitStatus === 'success' ? (
                  <div className="form-success-banner">
                    <div className="success-icon-circle">
                      <Check size={28} color="#059669" />
                    </div>
                    <h3 className="success-title">¡Mensaje Enviado con Éxito!</h3>
                    <p className="success-desc">
                      Tu solicitud ha sido remitida directamente al equipo de <strong>Korvexya</strong> ({email}). Revisaremos tus requerimientos y te responderemos en breve.
                    </p>
                    <button 
                      type="button" 
                      className="btn-editorial-secondary"
                      onClick={() => { if (playClick) playClick(); setSubmitStatus('idle'); }}
                      style={{ marginTop: '16px' }}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-field-group">
                      <label className="form-label-text" htmlFor="clientName">Nombre o Empresa *</label>
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
                      <label className="form-label-text" htmlFor="clientEmail">Correo Electrónico *</label>
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
                            onClick={() => { if (playClick) playClick(); setBudget(b); }}
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

                    {submitStatus === 'error' && (
                      <div className="form-error-banner">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="btn-editorial-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '12px 24px',
                        cursor: submitStatus === 'submitting' ? 'wait' : 'pointer',
                        opacity: submitStatus === 'submitting' ? 0.8 : 1
                      }}
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="spin-animation" />
                          <span>Enviando a Korvexya...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Solicitud a {email}</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
