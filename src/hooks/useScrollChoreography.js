import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollChoreography: Coreografía Escénica 3D + DOM
 * Vincula el progreso de scroll con la posición, rotación, escala y opacidad del objeto 3D
 * y orquesta animaciones de entrada cinematográfica en las capas HTML.
 */
export function useScrollChoreography() {
  const choreographyRef = useRef({
    posX: 0,
    posY: 0,
    posZ: 0,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    scale: 1,
    wireframeOpacity: 0.35,
    ringExpansion: 1,
    speed: 1,
  });

  useEffect(() => {
    // Timer para asegurar que el DOM esté completamente montado
    const timeout = setTimeout(() => {
      const state = choreographyRef.current;
      const mm = gsap.matchMedia();

      // Configuración adaptativa para desktop vs mobile
      mm.add('(min-width: 768px)', () => {
        // 1. Escena Hero -> Skills Matrix
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          ScrollTrigger.create({
            trigger: skillsSection,
            start: 'top 85%',
            end: 'center center',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;
              state.posX = gsap.utils.interpolate(0, 2.3, p);
              state.posY = gsap.utils.interpolate(0, 0.2, p);
              state.posZ = gsap.utils.interpolate(0, 0.6, p);
              state.rotX = gsap.utils.interpolate(0, 0.65, p);
              state.rotY = gsap.utils.interpolate(0, 1.4, p);
              state.scale = gsap.utils.interpolate(1.0, 1.15, p);
              state.wireframeOpacity = gsap.utils.interpolate(0.35, 0.8, p);
              state.ringExpansion = gsap.utils.interpolate(1.0, 1.2, p);
            },
          });
        }

        // 2. Escena Skills -> Tokens Lab
        const tokensSection = document.getElementById('tokens-lab');
        if (tokensSection) {
          ScrollTrigger.create({
            trigger: tokensSection,
            start: 'top 85%',
            end: 'center center',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;
              state.posX = gsap.utils.interpolate(2.3, 0, p);
              state.posY = gsap.utils.interpolate(0.2, -0.7, p);
              state.posZ = gsap.utils.interpolate(0.6, -1.2, p);
              state.rotX = gsap.utils.interpolate(0.65, 0.2, p);
              state.rotY = gsap.utils.interpolate(1.4, 3.14, p);
              state.scale = gsap.utils.interpolate(1.15, 1.25, p);
              state.wireframeOpacity = gsap.utils.interpolate(0.8, 0.5, p);
              state.ringExpansion = gsap.utils.interpolate(1.2, 1.45, p);
              state.speed = gsap.utils.interpolate(1.0, 1.8, p);
            },
          });
        }

        // 3. Escena Tokens Lab -> Projects (Case Studies)
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          ScrollTrigger.create({
            trigger: projectsSection,
            start: 'top 85%',
            end: 'center center',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;
              state.posX = gsap.utils.interpolate(0, -1.8, p);
              state.posY = gsap.utils.interpolate(-0.7, 0.4, p);
              state.posZ = gsap.utils.interpolate(-1.2, -3.2, p);
              state.rotX = gsap.utils.interpolate(0.2, -0.4, p);
              state.rotY = gsap.utils.interpolate(3.14, 4.8, p);
              state.scale = gsap.utils.interpolate(1.25, 1.4, p);
              state.wireframeOpacity = gsap.utils.interpolate(0.5, 0.65, p);
              state.ringExpansion = gsap.utils.interpolate(1.45, 1.2, p);
              state.speed = gsap.utils.interpolate(1.8, 1.2, p);
            },
          });
        }

        // 4. Escena Projects -> Methodology
        const methodologySection = document.getElementById('methodology');
        if (methodologySection) {
          ScrollTrigger.create({
            trigger: methodologySection,
            start: 'top 85%',
            end: 'center center',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;
              state.posX = gsap.utils.interpolate(-1.8, 0, p);
              state.posY = gsap.utils.interpolate(0.4, 0, p);
              state.posZ = gsap.utils.interpolate(-3.2, -0.5, p);
              state.rotX = gsap.utils.interpolate(-0.4, 0.95, p);
              state.rotY = gsap.utils.interpolate(4.8, 6.28, p);
              state.scale = gsap.utils.interpolate(1.4, 1.1, p);
              state.wireframeOpacity = gsap.utils.interpolate(0.65, 0.85, p);
              state.ringExpansion = gsap.utils.interpolate(1.2, 1.3, p);
            },
          });
        }

        // 5. Escena Methodology -> Contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          ScrollTrigger.create({
            trigger: contactSection,
            start: 'top 85%',
            end: 'center center',
            scrub: 1.2,
            onUpdate: (self) => {
              const p = self.progress;
              state.posX = gsap.utils.interpolate(0, 0, p);
              state.posY = gsap.utils.interpolate(0, 0.2, p);
              state.posZ = gsap.utils.interpolate(-0.5, 0.4, p);
              state.rotX = gsap.utils.interpolate(0.95, 0, p);
              state.rotY = gsap.utils.interpolate(6.28, 7.8, p);
              state.scale = gsap.utils.interpolate(1.1, 1.2, p);
              state.wireframeOpacity = gsap.utils.interpolate(0.85, 0.5, p);
              state.ringExpansion = gsap.utils.interpolate(1.3, 1.1, p);
              state.speed = gsap.utils.interpolate(1.0, 1.2, p);
            },
          });
        }
      });

      // Configuración compacta para móviles (manteniendo el objeto centrado sin solapar textos)
      mm.add('(max-width: 767px)', () => {
        state.scale = 0.75;
        state.posY = -0.5;
        state.posZ = -2.0;

        ScrollTrigger.create({
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            state.rotY = self.progress * Math.PI * 4;
          },
        });
      });

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return choreographyRef;
}
