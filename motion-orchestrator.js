/**
 * MOTION & INTERACTION ORCHESTRATOR
 * Powered by Motion.dev (Motion One) + Web Animations API
 * Portfolio: Senior UX/UI Pro & Product Designer
 */

// =============================================================================
// 1. CASE STUDY DATABASE (DEEP DIVE MODAL DATA)
// =============================================================================
const CASE_STUDIES_DATA = {
  apex: {
    title: "Apex Financial Intelligence OS",
    subtitle: "Plataforma de Trading Cuantitativo & Analítica de Alta Densidad",
    client: "Apex Quant Capital (Londres / NYC)",
    duration: "6 Meses — Lead UX/UI & Design System Architect",
    overview: "Los operadores cuantitativos y analistas de fondos de cobertura se enfrentaban a una sobrecarga cognitiva extrema debida a 12 ventanas simultáneas sin jerarquía. Diseñamos un nuevo paradigma de espacio de trabajo modular con paneles de cristal translúcido y 'Focus Drawers' contextuales basados en IA.",
    problem: "Sobrecarga de información, tiempo de reacción lento (pérdida de oportunidades de arbitraje) y 48% de tasa de errores en la configuración de algoritmos de ejecución rápida.",
    solution: "1. Sistema de diseño modular 'Apex Glass' con contraste optimizado para salas oscuras de trading.<br>2. Drawer contextual flotante activado por atajos de teclado globales.<br>3. Telemetría de riesgo en tiempo real con micro-gráficos sparkline y señales visuales de volatilidad.",
    tokens: ["--glass-blur: 28px", "--elevation-trading: 0 25px 60px rgba(0,0,0,0.6)", "--accent-alpha: #6366f1", "--color-gain: #10b981", "--color-loss: #f43f5e"],
    motion: "Resortes de física 'Gentle Spring' (stiffness: 300, damping: 25) para abrir drawers en 120ms sin bloqueo de renderizado.",
    results: [
      { metric: "-42%", label: "Carga Cognitiva (Test NASA-TLX)" },
      { metric: "+310%", label: "Velocidad de Entrada de Órdenes" },
      { metric: "$1.4B", label: "Volumen Diario Procesado con Cero Errores" }
    ]
  },
  aether: {
    title: "Aether Ambient AI & Spatial Interface",
    subtitle: "Lienzo Infinito Multimodal & Sistema de Interacción Humano-IA",
    client: "Aether Labs Inc. (San Francisco, CA)",
    duration: "8 Meses — Principal UX Architect & Motion Lead",
    overview: "Rompiendo con el clásico paradigma de la 'caja de chat con texto plano', Aether introduce un lienzo espacial infinito donde la voz, los gestos y los prompts multimodales interactúan con superficies adaptativas que se auto-organizan según la intención del usuario.",
    problem: "Los modelos generativos avanzados quedan limitados por interfaces basadas exclusivamente en chat lineal de texto, impidiendo flujos de trabajo de síntesis creativa no lineales.",
    solution: "1. Superficie de cristal elástico que se deforma y agrupa nodos de contexto de forma dinámica.<br>2. Espectro sonoro y visual sincronizado con latencia imperceptible (120ms).<br>3. Paleta cromática auto-adaptativa según la emoción y tono del output generado.",
    tokens: ["--spatial-spring: cubic-bezier(0.34, 1.56, 0.64, 1)", "--ambient-glow: #8b5cf6", "--mesh-density: 120px"],
    motion: "Coreografía cinemática con Motion.dev para transiciones de estado Shared Layout y expansión radial de nodos generativos.",
    results: [
      { metric: "4.9 / 5.0", label: "Puntaje de Satisfacción CSAT" },
      { metric: "2.8x", label: "Aumento de Retención Semanal" },
      { metric: "Red Dot 2025", label: "Ganador Best Design Concept" }
    ]
  },
  lumina: {
    title: "Lumina Haute Horlogerie Flagship",
    subtitle: "E-Commerce Editorial de Ultra-Lujo & Calibre Mecánico 3D",
    client: "Lumina Horlogerie (Ginebra, Suiza)",
    duration: "4 Meses — Design Director & Visual Craft Specialist",
    overview: "Diseño de la experiencia digital insignia para la manufactura de alta relojería Lumina. Combinamos tipografía editorial suiza, animaciones de micro-precisión y exploración 3D interactiva en tiempo real del mecanismo de tourbillon.",
    problem: "Los clientes de ultra alto patrimonio encontraban las compras online de alta relojería frías y carentes de la magia sensorial de una boutique física en Place Vendôme.",
    solution: "1. Composición de revista de moda de lujo con tipografía de alto contraste (Instrument Serif + Syne).<br>2. Inspección microscópica del calibre con iluminación especular reflectante al mover el cursor.<br>3. Flujo de reserva privada 'Concierge Checkout' en dos clics.",
    tokens: ["--gold-specular: #eab308", "--editorial-serif: 'Instrument Serif'", "--luxury-backdrop: rgba(8,9,13,0.92)"],
    motion: "Scroll continuo hiper-fluido con inercia desacelerada e interpolación óptica de reflejos de oro y titanio.",
    results: [
      { metric: "+185%", label: "Conversión a Cita Privada VIP" },
      { metric: "6m 40s", label: "Tiempo Promedio de Exploración" },
      { metric: "Awwwards SOTD", label: "Site of the Day Winner" }
    ]
  },
  synapse: {
    title: "Synapse NeuroHealth Mobile",
    subtitle: "Ecosistema Móvil mHealth de Telemetría Neurológica & Cardiaca",
    client: "Synapse BioLabs (Boston, MA)",
    duration: "5 Meses — Lead Mobile UX & Accessibility Specialist",
    overview: "Aplicación móvil médica para pacientes con trastornos del sueño y arritmias. Transformación de complejas lecturas de telemetría médica en interfaces intuitivas y reconfortantes que cumplen estrictamente con WCAG AAA.",
    problem: "Los pacientes se sentían abrumados y ansiosos por las lecturas crudas de ECG y datos biométricos, provocando deserciones tempranas del tratamiento.",
    solution: "1. Visualizaciones orgánicas de ritmo cardíaco (ECG Waveform) con paleta relajante y alto contraste.<br>2. Modo nocturno de emisión azul cero (Zero Blue Light Mode) certificado.<br>3. Arquitectura de interacción accesible para personas con temblores o baja visión.",
    tokens: ["--contrast-ratio: 14.5:1 (WCAG AAA)", "--health-emerald: #10b981", "--sleep-cyan: #22d3ee"],
    motion: "Animaciones de respiración rítmica coordinadas para calmar la frecuencia cardíaca del paciente en tiempo real.",
    results: [
      { metric: "100%", label: "Cumplimiento WCAG 2.2 AAA" },
      { metric: "+64%", label: "Adherencia al Tratamiento Médico" },
      { metric: "4.9 ★", label: "App Store (45,000+ Reseñas)" }
    ]
  }
};

// =============================================================================
// 2. SYNTHESIZED WEB AUDIO API (HAPTIC MICRO-FEEDBACK)
// =============================================================================
class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.init();
  }

  init() {
    // Lazy initialize AudioContext upon first user interaction
    const unlockAudio = () => {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      window.removeEventListener('pointerdown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio);
  }

  playChime() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15); // A6

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  }

  playModalOpen() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major Chord
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);

        gain.gain.setValueAtTime(0.02, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.03 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.03);
        osc.stop(now + idx * 0.03 + 0.35);
      });
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

const audioFX = new SoundEngine();

// =============================================================================
// 3. MOTION.DEV ORCHESTRATION & SCROLL CONTROLLER
// =============================================================================
async function initializeMotion() {
  let motionLib = null;

  try {
    // Dynamically load Motion.dev ESM
    motionLib = await import('https://cdn.jsdelivr.net/npm/motion@latest/+esm');
  } catch (err) {
    console.info("Using native IntersectionObserver & Web Animations fallback for Motion.dev.");
  }

  // A. Scroll Progress Bar & Floating Capsule Navbar Morphing
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navCapsule = document.getElementById('navCapsule');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (navCapsule) {
      if (scrollY > 60) {
        navCapsule.classList.add('scrolled');
      } else {
        navCapsule.classList.remove('scrolled');
      }
    }

    // Active Section Spy
    let currentSection = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 180;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // B. InView Staggered Reveal Animations
  const motionElements = document.querySelectorAll('[data-motion]');

  if (motionLib && motionLib.inView && motionLib.animate) {
    // Advanced Motion.dev implementation
    motionElements.forEach(el => {
      const motionType = el.getAttribute('data-motion');
      const delayMs = parseInt(el.getAttribute('data-delay') || '0', 10) / 1000;

      // Initial offscreen state
      el.style.opacity = '0';
      if (motionType === 'fade-up') el.style.transform = 'translateY(35px)';
      if (motionType === 'fade-left') el.style.transform = 'translateX(40px)';
      if (motionType === 'fade-right') el.style.transform = 'translateX(-40px)';
      if (motionType === 'scale-up') el.style.transform = 'scale(0.94)';

      motionLib.inView(el, () => {
        motionLib.animate(
          el,
          {
            opacity: [0, 1],
            transform: ['translate(0, 0) scale(1)']
          },
          {
            duration: 0.8,
            delay: delayMs,
            easing: [0.16, 1, 0.3, 1]
          }
        );

        // Animate child gauges if any
        const gauge = el.querySelector('.proficiency-fill');
        if (gauge) {
          const targetWidth = gauge.getAttribute('data-fill') || '90';
          setTimeout(() => {
            gauge.style.width = `${targetWidth}%`;
          }, delayMs * 1000 + 200);
        }
      });
    });
  } else {
    // Resilient IntersectionObserver Fallback
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay') || '0';
          
          setTimeout(() => {
            el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'none';

            // Animate gauge bars
            const gauge = el.querySelector('.proficiency-fill');
            if (gauge) {
              const targetWidth = gauge.getAttribute('data-fill') || '90';
              gauge.style.width = `${targetWidth}%`;
            }
          }, parseInt(delay, 10));

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    motionElements.forEach(el => {
      el.style.opacity = '0';
      const motionType = el.getAttribute('data-motion');
      if (motionType === 'fade-up') el.style.transform = 'translateY(35px)';
      if (motionType === 'fade-left') el.style.transform = 'translateX(40px)';
      if (motionType === 'fade-right') el.style.transform = 'translateX(-40px)';
      if (motionType === 'scale-up') el.style.transform = 'scale(0.94)';
      observer.observe(el);
    });
  }
}

// =============================================================================
// 4. 3D GLASS CARD TILT & SPECULAR SHEEN INTERACTION
// =============================================================================
function setupGlassCard3DTilt() {
  const cards = document.querySelectorAll('.glass-card');

  cards.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update specular shine coordinates
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D subtle tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// =============================================================================
// 5. INTERACTIVE DESIGN SYSTEM & TOKENS LAB
// =============================================================================
function setupTokensLab() {
  const themeBtns = document.querySelectorAll('[data-theme-btn]');
  const blurSlider = document.getElementById('blurSlider');
  const satSlider = document.getElementById('satSlider');
  const blurValueLabel = document.getElementById('blurValueLabel');
  const satValueLabel = document.getElementById('satValueLabel');
  const tokenCodeBadge = document.getElementById('tokenCodeBadge');

  const updateTokenBadge = () => {
    const blur = getComputedStyle(document.documentElement).getPropertyValue('--glass-blur').trim() || '24px';
    const sat = getComputedStyle(document.documentElement).getPropertyValue('--glass-saturation').trim() || '180%';
    if (tokenCodeBadge) {
      tokenCodeBadge.textContent = `--glass-blur: ${blur}; --glass-saturation: ${sat};`;
    }
  };

  // Theme presets
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const theme = btn.getAttribute('data-theme-btn');
      if (theme === 'default') {
        document.body.removeAttribute('data-theme');
      } else {
        document.body.setAttribute('data-theme', theme);
      }
      updateTokenBadge();
    });
  });

  // Blur Slider
  if (blurSlider && blurValueLabel) {
    blurSlider.addEventListener('input', (e) => {
      const val = `${e.target.value}px`;
      document.documentElement.style.setProperty('--glass-blur', val);
      blurValueLabel.textContent = val;
      updateTokenBadge();
    });
  }

  // Saturation Slider
  if (satSlider && satValueLabel) {
    satSlider.addEventListener('input', (e) => {
      const val = `${e.target.value}%`;
      document.documentElement.style.setProperty('--glass-saturation', val);
      satValueLabel.textContent = val;
      updateTokenBadge();
    });
  }
}

// =============================================================================
// 6. CASE STUDY DETAIL MODAL DRAWER
// =============================================================================
function setupCaseStudyModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalContentContainer = document.getElementById('modalContentContainer');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectTriggers = document.querySelectorAll('[data-project-id]');

  const openModal = (projectId) => {
    const data = CASE_STUDIES_DATA[projectId];
    if (!data || !modalContentContainer || !modalOverlay) return;

    modalContentContainer.innerHTML = `
      <div>
        <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
          <span class="glass-pill" style="color: var(--accent-secondary);">${data.client}</span>
          <span class="glass-pill">${data.duration}</span>
        </div>
        <h2 class="modal-deepdive-title">${data.title}</h2>
        <p style="font-size: 1.15rem; color: var(--accent-primary-hover); margin-top: 6px;">${data.subtitle}</p>
      </div>

      <div style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.65;">
        ${data.overview}
      </div>

      <div class="modal-deepdive-grid">
        <div class="modal-block">
          <div class="modal-block-title">01 // DESAFÍO &amp; DIAGNÓSTICO</div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.55;">${data.problem}</p>
        </div>

        <div class="modal-block">
          <div class="modal-block-title">02 // SOLUCIÓN DE DISEÑO &amp; SISTEMAS</div>
          <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.55;">${data.solution}</div>
        </div>
      </div>

      <div class="modal-block">
        <div class="modal-block-title">03 // TOKENS &amp; COREOGRAFÍA CINÉTICA</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
          ${data.tokens.map(t => `<span class="token-code-badge" style="margin: 0;">${t}</span>`).join('')}
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted);">${data.motion}</p>
      </div>

      <div>
        <div class="modal-block-title">04 // RESULTADOS &amp; MÉTRICAS DE NEGOCIO</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 10px;">
          ${data.results.map(r => `
            <div style="padding: 16px; border-radius: var(--radius-md); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); text-align: center;">
              <div style="font-family: var(--font-editorial-headline); font-size: 1.8rem; font-weight: 800; color: var(--accent-secondary); line-height: 1; margin-bottom: 6px;">${r.metric}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase;">${r.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    audioFX.playModalOpen();
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    audioFX.playClick();
  };

  projectTriggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = trig.getAttribute('data-project-id');
      openModal(pid);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// =============================================================================
// 7. CUSTOM MAGNETIC CURSOR & SOUND BINDINGS
// =============================================================================
function setupCustomCursorAndSounds() {
  const dot = document.getElementById('cursorDot');
  const follower = document.getElementById('cursorFollower');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  if (dot && follower) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, { passive: true });

    // Smooth lerp for follower
    const renderCursor = () => {
      followerX += (mouseX - followerX) * 0.2;
      followerY += (mouseY - followerY) * 0.2;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Hover detection for magnetic cursor expansion
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .glass-card, .theme-pill-btn, .pillar-chip');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
      el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
  }

  // Sound triggers
  document.querySelectorAll('[data-sound]').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-sound');
      if (type === 'chime') audioFX.playChime();
      else if (type === 'click') audioFX.playClick();
      else if (type === 'modal') audioFX.playModalOpen();
    });
  });

  // Sound toggle button in header
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const isEnabled = audioFX.toggle();
      soundToggleBtn.style.color = isEnabled ? 'var(--text-primary)' : 'var(--text-dim)';
      soundToggleBtn.setAttribute('title', isEnabled ? 'Micro-sonido activado' : 'Micro-sonido silenciado');
      if (isEnabled) audioFX.playChime();
    });
  }

  // Copy email pill
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const copySuccessMsg = document.getElementById('copySuccessMsg');

  if (copyEmailBtn && emailText && copySuccessMsg) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        emailText.style.display = 'none';
        copySuccessMsg.style.display = 'inline';
        audioFX.playChime();

        setTimeout(() => {
          emailText.style.display = 'inline';
          copySuccessMsg.style.display = 'none';
        }, 2500);
      } catch (err) {
        console.warn("Clipboard copy failed:", err);
      }
    });
  }

  // Contact form submission visual simulation
  const inquiryForm = document.getElementById('inquiryForm');
  const submitFormBtn = document.getElementById('submitFormBtn');

  if (inquiryForm && submitFormBtn) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitFormBtn.innerHTML;
      submitFormBtn.innerHTML = `<span>✓ ¡Solicitud Enviada con Éxito!</span>`;
      submitFormBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
      audioFX.playChime();

      setTimeout(() => {
        submitFormBtn.innerHTML = originalText;
        submitFormBtn.style.background = '';
        inquiryForm.reset();
      }, 3500);
    });
  }
}

// =============================================================================
// INITIALIZATION ENTRY POINT
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initializeMotion();
  setupGlassCard3DTilt();
  setupTokensLab();
  setupCaseStudyModals();
  setupCustomCursorAndSounds();
});
