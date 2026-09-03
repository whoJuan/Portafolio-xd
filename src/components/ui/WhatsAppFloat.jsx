import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Copy, Check, Sparkles, Move } from 'lucide-react';

export function WhatsAppIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path 
        d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" 
        stroke={color} 
      />
      <path 
        d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" 
        stroke={color} 
      />
    </svg>
  );
}

export function WhatsAppFloat({ playClick, playChime }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const wasDraggedRef = useRef(false);

  const mainQrLink = "https://wa.me/qr/BKSPNQ2R4AAUB1";
  
  const contacts = [
    {
      label: "Línea Directa 1 (Proyectos & E-Commerce)",
      phone: "+57 310 4872129",
      cleanPhone: "573104872129",
      defaultText: "Hola Korvexya, me gustaría cotizar un proyecto de E-Commerce o CRM."
    },
    {
      label: "Línea Directa 2 (Asesoría & Integraciones)",
      phone: "+57 313 5281795",
      cleanPhone: "573135281795",
      defaultText: "Hola Korvexya, deseo obtener información técnica sobre sus soluciones."
    }
  ];

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCopy = async (phoneStr) => {
    try {
      await navigator.clipboard.writeText(phoneStr);
      setCopiedNumber(phoneStr);
      if (playChime) playChime();
      setTimeout(() => setCopiedNumber(null), 2500);
    } catch (err) {
      console.warn("Copy failed:", err);
    }
  };

  const handleButtonClick = (e) => {
    // If user just dragged the bubble, don't toggle open/close
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false;
      return;
    }
    if (playClick) playClick();
    setIsOpen(prev => !prev);
  };

  return (
    <motion.div 
      className={`whatsapp-float-wrapper ${isDragging ? 'is-dragging' : ''}`}
      ref={containerRef}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => {
        setIsDragging(true);
        wasDraggedRef.current = true;
      }}
      onDragEnd={() => {
        setIsDragging(false);
        // keep wasDraggedRef true for a tiny tick to prevent onClick trigger
        setTimeout(() => {
          wasDraggedRef.current = false;
        }, 120);
      }}
    >
      {/* Floating Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-popup-card"
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="whatsapp-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="whatsapp-header-avatar">
                  <WhatsAppIcon size={20} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                    Korvexya en WhatsApp
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span className="status-pulse-dot" style={{ width: '6px', height: '6px', background: '#25D366' }} />
                    <span>En línea • Respuesta rápida</span>
                  </div>
                </div>
              </div>
              <button 
                type="button" 
                className="whatsapp-close-btn"
                onClick={() => { if (playClick) playClick(); setIsOpen(false); }}
                aria-label="Cerrar ventana de WhatsApp"
              >
                <X size={16} color="#ffffff" />
              </button>
            </div>

            {/* Body */}
            <div className="whatsapp-card-body">
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                Elige el canal directo de WhatsApp para comunicarte al instante con nuestro equipo:
              </p>

              {/* QR / Enlace Principal */}
              <a
                href={mainQrLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-primary-qr-btn"
                onClick={() => { if (playClick) playClick(); }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="wa-btn-icon-circle">
                    <Sparkles size={16} color="#128C7E" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#064e3b' }}>
                      Enlace Directo / QR Oficial
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#047857' }}>
                      wa.me/qr/BKSPNQ2R4AAUB1
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="#047857" />
              </a>

              <div className="whatsapp-divider-line">
                <span>O chatea con nuestras líneas directas</span>
              </div>

              {/* Lista de Números */}
              <div className="whatsapp-numbers-list">
                {contacts.map((c) => {
                  const chatUrl = `https://wa.me/${c.cleanPhone}?text=${encodeURIComponent(c.defaultText)}`;
                  const isThisCopied = copiedNumber === c.phone;

                  return (
                    <div key={c.phone} className="whatsapp-number-row">
                      <div className="whatsapp-number-info">
                        <div className="wa-num-label">{c.label}</div>
                        <div className="wa-num-digits">{c.phone}</div>
                      </div>

                      <div className="whatsapp-number-actions">
                        <button
                          type="button"
                          className="wa-action-icon-btn"
                          title="Copiar número"
                          onClick={() => handleCopy(c.phone)}
                        >
                          {isThisCopied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                        </button>

                        <a
                          href={chatUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wa-chat-pill-btn"
                          onClick={() => { if (playClick) playClick(); }}
                        >
                          <span>Chatear</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer notice */}
            <div className="whatsapp-card-footer">
              <span>💡 Puedes arrastrar este botón con el cursor a cualquier lugar de la pantalla</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Draggable Trigger Button */}
      <motion.button
        type="button"
        className={`whatsapp-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={handleButtonClick}
        aria-label="Abrir opciones de contacto de WhatsApp (Arrastrable)"
        title="Haz clic para abrir o arrastra para mover a donde quieras"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="wa-drag-grip" title="Arrastrar">
          <Move size={12} />
        </span>
        <span className="wa-pulse-ring" />
        <WhatsAppIcon size={24} color="#ffffff" />
        <span className="wa-btn-label">WhatsApp</span>
      </motion.button>
    </motion.div>
  );
}
