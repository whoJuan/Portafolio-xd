import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { CASE_STUDIES } from '../../data/caseStudies';

export function CaseStudies({ onOpenDeepDive, playModalOpen, playClick }) {
  // Vector graphics for each service
  const renderGraphic = (id) => {
    if (id === 'ecommerce') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#0b0d14" />
          {/* Grid lines */}
          <line x1="40" y1="60" x2="560" y2="60" stroke="#1f2535" strokeDasharray="4 4" />
          <line x1="40" y1="130" x2="560" y2="130" stroke="#1f2535" strokeDasharray="4 4" />
          <line x1="40" y1="200" x2="560" y2="200" stroke="#1f2535" strokeDasharray="4 4" />
          <line x1="40" y1="270" x2="560" y2="270" stroke="#1f2535" strokeDasharray="4 4" />
          
          {/* Store metrics chart */}
          <path d="M 50 260 Q 140 230, 220 180 T 380 140 T 550 70 L 550 310 L 50 310 Z" fill="url(#ecomGrad)" opacity="0.3" />
          <path d="M 50 260 Q 140 230, 220 180 T 380 140 T 550 70" stroke="#6366f1" strokeWidth="3.5" fill="none" />

          {/* Product cards in checkout */}
          <rect x="50" y="65" width="200" height="95" rx="14" fill="#131724" fillOpacity="0.9" stroke="#6366f1" strokeWidth="1.2" />
          <rect x="68" y="80" width="34" height="34" rx="8" fill="#1e2438" />
          <circle cx="85" cy="97" r="9" fill="#818cf8" />
          <text x="112" y="94" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12">Headless Storefront</text>
          <text x="112" y="110" fill="#a1a1aa" fontFamily="'JetBrains Mono', monospace" fontSize="10">Checkout: 1-Click Active</text>
          <rect x="68" y="124" width="164" height="24" rx="6" fill="#6366f1" fillOpacity="0.2" />
          <text x="150" y="140" fill="#a5b4fc" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="10" textAnchor="middle">⚡ Conversión +240%</text>

          {/* Live Revenue telemetry card */}
          <rect x="310" y="145" width="240" height="135" rx="16" fill="#111420" fillOpacity="0.92" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
          <text x="332" y="178" fill="#a1a1aa" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12">Ventas E-Commerce (Tiempo Real)</text>
          <text x="332" y="215" fill="#ffffff" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="26">$128,450.00</text>
          <rect x="332" y="235" width="95" height="22" rx="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" />
          <text x="342" y="250" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontWeight="600" fontSize="11">▲ +38.5% AOV</text>
          <rect x="435" y="235" width="95" height="22" rx="6" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" />
          <text x="447" y="250" fill="#22d3ee" fontFamily="'JetBrains Mono', monospace" fontWeight="600" fontSize="11">0.8s Load</text>

          <defs>
            <linearGradient id="ecomGrad" x1="300" y1="70" x2="300" y2="310" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    if (id === 'crm') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#090a12" />
          
          {/* CRM Kanban Columns */}
          {/* Column 1: Leads */}
          <rect x="40" y="50" width="160" height="280" rx="14" fill="#111320" fillOpacity="0.8" stroke="#25293d" />
          <text x="56" y="78" fill="#a1a1aa" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11">PROSPECTOS (24)</text>
          <rect x="52" y="92" width="136" height="60" rx="10" fill="#191c2e" stroke="rgba(139,92,246,0.3)" />
          <text x="64" y="114" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="11">Stripe Inc. Enterprise</text>
          <text x="64" y="132" fill="#8b5cf6" fontFamily="'JetBrains Mono', monospace" fontSize="10">$45,000 · Lead Score 94</text>

          <rect x="52" y="160" width="136" height="60" rx="10" fill="#191c2e" stroke="#25293d" />
          <text x="64" y="182" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="11">Fintech Group LATAM</text>
          <text x="64" y="200" fill="#a1a1aa" fontFamily="'JetBrains Mono', monospace" fontSize="10">$18,500 · En Evaluación</text>

          {/* Column 2: Negotiation */}
          <rect x="220" y="50" width="160" height="280" rx="14" fill="#111320" fillOpacity="0.8" stroke="rgba(139,92,246,0.5)" />
          <text x="236" y="78" fill="#8b5cf6" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11">EN NEGOCIACIÓN (12)</text>
          <rect x="232" y="92" width="136" height="74" rx="10" fill="#1c1d32" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="244" y="114" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11">Global Retail Corp</text>
          <text x="244" y="132" fill="#22d3ee" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="13">$84,000 USD</text>
          <text x="244" y="152" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontSize="9">✓ WhatsApp &amp; Demo OK</text>

          {/* Column 3: Won */}
          <rect x="400" y="50" width="160" height="280" rx="14" fill="#111320" fillOpacity="0.8" stroke="rgba(16,185,129,0.4)" />
          <text x="416" y="78" fill="#10b981" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11">CERRADO GANADO (38)</text>
          <rect x="412" y="92" width="136" height="60" rx="10" fill="#132320" stroke="rgba(16,185,129,0.6)" />
          <text x="424" y="114" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="11">Logistics Hub SA</text>
          <text x="424" y="132" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="11">+$120,000 / Año</text>

          <rect x="412" y="160" width="136" height="60" rx="10" fill="#132320" stroke="rgba(16,185,129,0.4)" />
          <text x="424" y="182" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="11">Omnichannel Brands</text>
          <text x="424" y="200" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="11">+$62,000 / Año</text>
        </svg>
      );
    }

    if (id === 'integraciones') {
      return (
        <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="375" fill="#080c14" />
          
          {/* Central Hub */}
          <circle cx="300" cy="187" r="70" fill="url(#hubGrad)" stroke="#06b6d4" strokeWidth="2" filter="drop-shadow(0 0 35px rgba(6,182,212,0.4))" />
          <text x="300" y="180" fill="#ffffff" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="15" textAnchor="middle">API BRIDGE</text>
          <text x="300" y="200" fill="#22d3ee" fontFamily="'JetBrains Mono', monospace" fontSize="11" textAnchor="middle">KORVEXYA CORE</text>

          {/* Connected Nodes */}
          {/* Node 1: E-Commerce Store */}
          <line x1="140" y1="100" x2="245" y2="150" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="50" y="65" width="140" height="65" rx="12" fill="#101726" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="70" y="93" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12">Tienda Online</text>
          <text x="70" y="112" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="10">Shopify / Next.js</text>

          {/* Node 2: Payment Gateways */}
          <line x1="460" y1="100" x2="355" y2="150" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="410" y="65" width="140" height="65" rx="12" fill="#101726" stroke="#6366f1" strokeWidth="1.5" />
          <text x="430" y="93" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12">Pasarelas Pago</text>
          <text x="430" y="112" fill="#818cf8" fontFamily="'JetBrains Mono', monospace" fontSize="10">Stripe / Mercado Pago</text>

          {/* Node 3: ERP & Inventory */}
          <line x1="140" y1="275" x2="245" y2="225" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="50" y="245" width="140" height="65" rx="12" fill="#101726" stroke="#10b981" strokeWidth="1.5" />
          <text x="70" y="273" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12">ERP &amp; Stock</text>
          <text x="70" y="292" fill="#34d399" fontFamily="'JetBrains Mono', monospace" fontSize="10">Sync en 0.05s</text>

          {/* Node 4: CRM & Invoicing */}
          <line x1="460" y1="275" x2="355" y2="225" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" />
          <rect x="410" y="245" width="140" height="65" rx="12" fill="#101726" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="430" y="273" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="12">Facturación Auto</text>
          <text x="430" y="292" fill="#fbbf24" fontFamily="'JetBrains Mono', monospace" fontSize="10">Emisión Fiscal 100%</text>

          <defs>
            <radialGradient id="hubGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 187) rotate(90) scale(70)">
              <stop stopColor="#083344" />
              <stop offset="1" stopColor="#0c1e2e" />
            </radialGradient>
          </defs>
        </svg>
      );
    }

    // AI Automation
    return (
      <svg className="case-art-canvas" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="375" fill="#080e12" />
        
        {/* Glowing AI Matrix & Chat simulation */}
        <circle cx="120" cy="187" r="60" fill="url(#aiCoreGrad)" filter="drop-shadow(0 0 40px rgba(16,185,129,0.5))" />
        <circle cx="120" cy="187" r="45" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" />
        <text x="120" y="182" fill="#ffffff" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="14" textAnchor="middle">AI AGENT</text>
        <text x="120" y="200" fill="#34d399" fontFamily="'JetBrains Mono', monospace" fontSize="10" textAnchor="middle">24/7 ONLINE</text>

        {/* Chat bubbles flow */}
        {/* User bubble */}
        <rect x="220" y="55" width="330" height="55" rx="14" fill="#141c24" stroke="#233240" />
        <text x="240" y="78" fill="#94a3b8" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11">👤 Cliente (WhatsApp):</text>
        <text x="240" y="96" fill="#f8fafc" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12">"¿Tienen disponible el modelo Pro con envío hoy?"</text>

        {/* AI Agent bubble */}
        <rect x="220" y="125" width="345" height="75" rx="14" fill="#112922" stroke="#10b981" strokeWidth="1.4" />
        <text x="240" y="148" fill="#34d399" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11">⚡ Korvexya AI Assistant (Respuesta &lt;1s):</text>
        <text x="240" y="166" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12">"¡Sí! Quedan 3 unidades en stock con despacho prioritario."</text>
        <text x="240" y="185" fill="#22d3ee" fontFamily="'JetBrains Mono', monospace" fontSize="10">→ Carrito reservado &amp; Link de pago 1-clic generado</text>

        {/* Conversion Alert Box */}
        <rect x="220" y="220" width="345" height="85" rx="14" fill="#101c18" stroke="rgba(16,185,129,0.4)" />
        <text x="240" y="248" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="13">Resultado de Automatización</text>
        <text x="240" y="270" fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="14">✓ Venta Cerrada: $420.00 USD</text>
        <text x="240" y="290" fill="#94a3b8" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11">Sincronizado automáticamente con CRM &amp; Inventario</text>

        <defs>
          <radialGradient id="aiCoreGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 187) rotate(90) scale(60)">
            <stop stopColor="#059669" />
            <stop offset="0.7" stopColor="#047857" />
            <stop offset="1" stopColor="#022c22" />
          </radialGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section className="section-wrapper" id="projects">
      <div className="app-container">
        <SectionHeader 
          numeral="03"
          kicker="Soluciones &amp; Servicios"
          title="Nuestras Soluciones de"
          italicAccent="E-Commerce &amp; CRM"
          subtitle="Desarrollo de software y plataformas de alta conversión concebidas para maximizar ingresos, optimizar la gestión comercial y automatizar procesos con tecnología de punta."
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
                  title="Haz clic para ver el desglose técnico de la solución"
                >
                  <span className="case-overlay-badge">{project.tag}</span>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="case-art-img"
                      loading="lazy" 
                    />
                  ) : (
                    renderGraphic(project.id)
                  )}
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
                    <span>Ver Detalles de la Solución</span>
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

