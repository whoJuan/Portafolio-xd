import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin de ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * useLenisScroll: Físicas de Navegación Suave (Momentum Inertia Scroll)
 * Intercepta eventos de la rueda del ratón y touch, sincronizando Lenis con GSAP ScrollTrigger
 */
export function useLenisScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. Inicialización de Lenis con curva de aceleración física de ultra-lujo
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // 2. Sincronización bidireccional entre Lenis y ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integración del ticker de GSAP para mantener la tasa de refresco a 60/120Hz sin desfase
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 3. Interceptar enlaces ancla suaves
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -30, duration: 1.4 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup al desmontar
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -30, duration: 1.3, ...options });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { lenis: lenisRef.current, scrollTo };
}
