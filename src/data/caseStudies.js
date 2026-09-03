export const CASE_STUDIES = [
  {
    id: "ecommerce",
    number: "01 // E-COMMERCE DE ALTA CONVERSIÓN",
    client: "Tiendas Online & Flagship Stores",
    tag: "E-COMMERCE // CHECKOUT ULTRA-RÁPIDO",
    title: "Arquitectura E-Commerce & Escalamiento de Ventas",
    role: "Headless Commerce, Shopify Plus, WooCommerce & Checkout Custom",
    image: "/images/ecommerce_showcase.jpg",
    description: "Desarrollo de tiendas online optimizadas para máxima velocidad de carga y conversión. Integración de pasarelas de pago locales e internacionales, catálogo interactivo con filtros instantáneos y checkout de 1-clic.",
    overview: "Diseñamos y desarrollamos plataformas de comercio electrónico preparadas para alto tráfico y picos de demanda (Black Friday, Cyber Days). Eliminamos toda fricción en el proceso de compra con arquitecturas modernas, pasarelas multimoneda y sincronización automática de stock.",
    problem: "Altas tasas de carritos abandonados por pasarelas lentas, tiempos de carga superiores a 3 segundos que dañan el posicionamiento SEO y falta de adaptabilidad en dispositivos móviles.",
    solution: [
      "Arquitectura Headless / Shopify Plus con tiempo de respuesta inferior a 800ms.",
      "Checkout optimizado de 1-clic con pasarelas de pago múltiples (Stripe, Mercado Pago, PayPal, Wompi).",
      "Sistemas de recomendación de productos dinámicos y upsells para elevar el Ticket Promedio (AOV)."
    ],
    tokens: ["--checkout-latency: <180ms", "--cart-conversion: +240%", "--payment-security: PCI-DSS Level 1", "--mobile-first: 100%"],
    motion: "Drawer de carrito ultra-fluido sin recarga de página, micro-feedback háptico al añadir artículos y animaciones cinéticas de confirmación de compra.",
    impact: [
      { val: "+240%", label: "Tasa de Conversión" },
      { val: "0.8s", label: "Tiempo de Carga" },
      { val: "-45%", label: "Abandono de Carrito" }
    ],
    accentColor: "#6366f1"
  },
  {
    id: "crm",
    number: "02 // SISTEMAS CRM & GESTIÓN DE CLIENTES",
    client: "Plataformas B2B / B2C & Equipos Comerciales",
    tag: "CRM A MEDIDA // PIPELINES AUTOMATIZADOS",
    title: "Sistemas CRM Personalizados & Pipelines de Ventas",
    role: "Desarrollo Full Stack CRM, HubSpot, Salesforce & APIs",
    image: "/images/crm_showcase.jpg",
    description: "Implementación y desarrollo de sistemas CRM a medida para centralizar clientes, prospectos y oportunidades. Pipelines visuales de ventas tipo Kanban, scoring automático de leads y reportes analíticos para directores.",
    overview: "Transformamos el desorden de hojas de cálculo y seguimientos manuales en un centro de comando unificado. Cada interacción con el prospecto queda registrada, permitiendo al equipo comercial cerrar más tratos en menor tiempo.",
    problem: "Pérdida de prospectos por falta de seguimiento oportuno, nula trazabilidad de las negociaciones entre vendedores y falta de métricas consolidadas de rendimiento comercial.",
    solution: [
      "Tablero visual de embudo de ventas con arrastrar y soltar (Kanban) y etapas configurables.",
      "Scoring inteligente de prospectos para priorizar a los clientes con mayor probabilidad de cierre.",
      "Integración omnicanal de WhatsApp Business, correo electrónico y llamadas con historial unificado."
    ],
    tokens: ["--crm-sync: Real-Time Webhooks", "--lead-scoring: AI-Driven", "--pipeline-stages: Multi-Funnel", "--export: Instant BI"],
    motion: "Reordenamiento fluido de tarjetas de prospectos con resortes de física (Spring 60FPS) y transiciones instantáneas entre vistas de funnel.",
    impact: [
      { val: "3.4x", label: "Velocidad de Cierre" },
      { val: "+85%", label: "Retención de Clientes" },
      { val: "100%", label: "Trazabilidad de Leads" }
    ],
    accentColor: "#8b5cf6"
  },
  {
    id: "integraciones",
    number: "03 // INTEGRACIONES ERP & PASARELAS DE PAGO",
    client: "Empresas en Expansión & E-Commerce Omnicanal",
    tag: "CONECTIVIDAD // APIS & LOGÍSTICA",
    title: "Integraciones de Software, ERPs & Automatización de Pagos",
    role: "Arquitectura de APIs, Sincronización de Stock & Facturación",
    image: "/images/integraciones_showcase.jpg",
    description: "Conectamos tu tienda y CRM con sistemas ERP (SAP, Oracle, Holded), facturación electrónica automática, empresas de logística y pasarelas de pago globales para una operación 100% automatizada.",
    overview: "Eliminamos la carga operativa de actualizar datos a mano entre distintas aplicaciones. Creamos puentes robustos y seguros entre tu tienda online, tu CRM, tus almacenes físicos y tu sistema contable.",
    problem: "Descoordinación entre stock físico y online (sobreventas), retrasos de días en la emisión de facturas fiscales y errores humanos al despachar pedidos.",
    solution: [
      "Sincronización bidireccional en tiempo real de inventario, precios y catálogos.",
      "Generación automática de facturas fiscales y guías de envío logístico al confirmar el pago.",
      "Monitoreo continuo de APIs con reintentos automáticos y tolerancia a fallos 24/7."
    ],
    tokens: ["--api-protocol: REST / GraphQL / Webhooks", "--sync-latency: 0.05s", "--security: TLS 1.3 / OAuth2", "--fault-tolerance: 99.99%"],
    motion: "Visualización de telemetría de red con pulsos luminosos de sincronización exitosa y confirmación de eventos en tiempo real.",
    impact: [
      { val: "0 min", label: "Tiempo Manual en Facturas" },
      { val: "99.99%", label: "Disponibilidad de APIs" },
      { val: "0%", label: "Errores de Inventario" }
    ],
    accentColor: "#06b6d4"
  },
  {
    id: "ia-automatizacion",
    number: "04 // AUTOMATIZACIONES CON IA & ASISTENTES 24/7",
    client: "Marcas Digitales & Negocios Escalables",
    tag: "INTELIGENCIA ARTIFICIAL // ATENCIÓN & VENTAS",
    title: "Agentes de IA para Ventas, Atención al Cliente & Marketing",
    role: "Modelos LLM Especializados, Chatbots WhatsApp & Flujos Make/Zapier",
    image: "/images/ai_automation_showcase.jpg",
    description: "Automatización de procesos de atención y ventas con Inteligencia Artificial. Asistentes capaces de responder dudas, recomendar productos del catálogo, agendar reuniones en el CRM y recuperar carritos las 24 horas.",
    overview: "Desplegamos agentes inteligentes entrenados con el catálogo de tu tienda y las políticas de tu negocio para atender y convertir clientes incluso cuando tu equipo está descansando.",
    problem: "Consultas de clientes sin responder por horas fuera del horario laboral, pérdida de ventas por dudas no resueltas y saturación del equipo con preguntas repetitivas.",
    solution: [
      "Chatbots con IA generativa conectados a WhatsApp, Instagram Direct y chat web en vivo.",
      "Recomendación contextual de productos basada en el historial y preferencias del usuario.",
      "Flujos automáticos de nutrición de prospectos y recuperación de carritos abandonados."
    ],
    tokens: ["--ai-model: GPT-4o / Claude Enterprise", "--channels: WhatsApp / Web / IG", "--response-time: <1s", "--accuracy: 99.4%"],
    motion: "Efecto de escritura interactiva en tiempo real, ondas de audio contextuales y burbujas de chat responsivas con apertura instantánea.",
    impact: [
      { val: "24/7", label: "Atención Continua" },
      { val: "+65%", label: "Recuperación de Carritos" },
      { val: "-80%", label: "Tiempo de Espera" }
    ],
    accentColor: "#10b981"
  }
];


