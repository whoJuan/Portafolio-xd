export const CASE_STUDIES = [
  {
    id: "apex",
    number: "01 // SAAS OS",
    client: "Apex Quant Capital (Londres / NYC)",
    tag: "FINTECH // SAAS DE ALTA DENSIDAD",
    title: "Apex Financial Intelligence OS",
    role: "Lead UX/UI & Design System Architect (6 Meses)",
    description: "Rediseño integral de la plataforma de trading y analítica cuantitativa de Apex. Transformamos una interfaz caótica de múltiples terminales en un sistema de paneles modulares de cristal con drawer contextual inteligente.",
    overview: "Los operadores cuantitativos y analistas de fondos de cobertura se enfrentaban a una sobrecarga cognitiva extrema debida a 12 ventanas simultáneas sin jerarquía. Diseñamos un nuevo paradigma de espacio de trabajo modular con paneles de cristal translúcido y 'Focus Drawers' contextuales basados en IA.",
    problem: "Sobrecarga de información, tiempo de reacción lento (pérdida de oportunidades de arbitraje) y 48% de tasa de errores en la configuración de algoritmos de ejecución rápida.",
    solution: [
      "Sistema de diseño modular 'Apex Glass' con contraste optimizado para salas oscuras de trading.",
      "Drawer contextual flotante activado por atajos de teclado globales.",
      "Telemetría de riesgo en tiempo real con micro-gráficos sparkline y señales visuales de volatilidad."
    ],
    tokens: ["--glass-blur: 28px", "--elevation-trading: 0 25px 60px rgba(0,0,0,0.6)", "--accent-alpha: #6366f1", "--color-gain: #10b981", "--color-loss: #f43f5e"],
    motion: "Resortes de física 'Gentle Spring' (stiffness: 300, damping: 25) para abrir drawers en 120ms sin bloqueo de renderizado.",
    impact: [
      { val: "-42%", label: "Carga Cognitiva (NASA-TLX)" },
      { val: "+310%", label: "Velocidad de Entrada de Órdenes" },
      { val: "99.4%", label: "Adopción de Usuarios" }
    ],
    accentColor: "#6366f1"
  },
  {
    id: "aether",
    number: "02 // SPATIAL OS",
    client: "Aether Labs Inc. (San Francisco, CA)",
    tag: "SPATIAL AI // GENERATIVE INTERFACE",
    title: "Aether Ambient AI & Spatial Interface",
    role: "Principal UX Architect & Motion Lead (8 Meses)",
    description: "Paradigma revolucionario de interacción humano-computador para modelos fundacionales de IA. Diseñamos un lienzo infinito sin cajas de texto tradicionales, impulsado por superficies adaptativas y feedback háptico.",
    overview: "Rompiendo con el clásico paradigma de la 'caja de chat con texto plano', Aether introduce un lienzo espacial infinito donde la voz, los gestos y los prompts multimodales interactúan con superficies adaptativas que se auto-organizan según la intención del usuario.",
    problem: "Los modelos generativos avanzados quedan limitados por interfaces basadas exclusivamente en chat lineal de texto, impidiendo flujos de trabajo de síntesis creativa no lineales.",
    solution: [
      "Superficie de cristal elástico que se deforma y agrupa nodos de contexto de forma dinámica.",
      "Espectro sonoro y visual sincronizado con latencia imperceptible (120ms).",
      "Paleta cromática auto-adaptativa según la emoción y tono del output generado."
    ],
    tokens: ["--spatial-spring: cubic-bezier(0.34, 1.56, 0.64, 1)", "--ambient-glow: #8b5cf6", "--mesh-density: 120px"],
    motion: "Coreografía cinemática con Framer Motion para transiciones de estado Shared Layout y expansión radial de nodos generativos.",
    impact: [
      { val: "4.9/5", label: "CSAT Score" },
      { val: "2.8x", label: "Retención Semanal" },
      { val: "0.12s", label: "Latencia Perceptiva" }
    ],
    accentColor: "#8b5cf6"
  },
  {
    id: "lumina",
    number: "03 // LUXURY E-COMMERCE",
    client: "Lumina Horlogerie Genève (Suiza)",
    tag: "LUXURY EDITORIAL // E-COMMERCE 3D",
    title: "Lumina Haute Horlogerie Flagship",
    role: "Design Director & Visual Craft Specialist (4 Meses)",
    description: "Experiencia digital editorial para una de las marcas de relojería suiza más exclusivas del mundo. Integración de visualización 3D interactiva del calibre mecánico, tipografía de revista y checkout sensorial sin fricción.",
    overview: "Diseño de la experiencia digital insignia para la manufactura de alta relojería Lumina. Combinamos tipografía editorial suiza, animaciones de micro-precisión y exploración 3D interactiva en tiempo real del mecanismo de tourbillon.",
    problem: "Los clientes de ultra alto patrimonio encontraban las compras online de alta relojería frías y carentes de la magia sensorial de una boutique física en Place Vendôme.",
    solution: [
      "Composición de revista de moda de lujo con tipografía de alto contraste (Instrument Serif + Syne).",
      "Inspección microscópica del calibre con iluminación especular reflectante al mover el cursor.",
      "Flujo de reserva privada 'Concierge Checkout' en dos clics."
    ],
    tokens: ["--gold-specular: #eab308", "--editorial-serif: 'Instrument Serif'", "--luxury-backdrop: rgba(8,9,13,0.92)"],
    motion: "Scroll continuo hiper-fluido con inercia desacelerada e interpolación óptica de reflejos de oro y titanio.",
    impact: [
      { val: "+185%", label: "Conversión VIP" },
      { val: "6m 40s", label: "Tiempo en Sitio" },
      { val: "SOTD", label: "Awwwards Winner" }
    ],
    accentColor: "#eab308"
  },
  {
    id: "synapse",
    number: "04 // MHEALTH OS",
    client: "Synapse BioLabs (Boston, MA)",
    tag: "HEALTH TECH // MOBILE ECOSYSTEM",
    title: "Synapse NeuroHealth Mobile",
    role: "Lead Mobile UX & Accessibility Specialist (5 Meses)",
    description: "Ecosistema móvil para el monitoreo en tiempo real de biomarcadores neurológicos y estrés cardíaco. Diseñado bajo los estándares más estrictos de accesibilidad médica (WCAG AAA) y visualización de datos sin fatiga ocular.",
    overview: "Aplicación móvil médica para pacientes con trastornos del sueño y arritmias. Transformación de complejas lecturas de telemetría médica en interfaces intuitivas y reconfortantes que cumplen estrictamente con WCAG AAA.",
    problem: "Los pacientes se sentían abrumados y ansiosos por las lecturas crudas de ECG y datos biométricos, provocando deserciones tempranas del tratamiento.",
    solution: [
      "Visualizaciones orgánicas de ritmo cardíaco (ECG Waveform) con paleta relajante y alto contraste.",
      "Modo nocturno de emisión azul cero (Zero Blue Light Mode) certificado.",
      "Arquitectura de interacción accesible para personas con temblores o baja visión."
    ],
    tokens: ["--contrast-ratio: 14.5:1 (WCAG AAA)", "--health-emerald: #10b981", "--sleep-cyan: #22d3ee"],
    motion: "Animaciones de respiración rítmica coordinadas para calmar la frecuencia cardíaca del paciente en tiempo real.",
    impact: [
      { val: "100%", label: "WCAG AAA Compliance" },
      { val: "+64%", label: "Adherencia a Terapia" },
      { val: "4.9★", label: "App Store (45k+)" }
    ],
    accentColor: "#10b981"
  }
];
