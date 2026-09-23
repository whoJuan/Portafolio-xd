import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor: Cursor Magnético con Física Vectorial
 * - Cálculo de distancia euclidiana y fuerza gravitatoria hacia botones y enlaces
 * - Atracción física del cursor y desplazamiento elástico de los elementos interactivos
 * - Anillo seguidor cinético con morphing y estados de hover
 */
export function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    isHovering: false,
    isMagnetic: false,
    isMouseDown: false,
  });

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let followerX = mouseX;
    let followerY = mouseY;
    let animId;

    let activeMagneticEl = null;
    const MAGNETIC_RADIUS = 75; // Radio de atracción gravitatoria en px

    // 1. POINTER MOVE & CÁLCULO VECTORIAL MAGNÉTICO
    const onPointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Buscar elemento interactivo más cercano
      const interactiveEls = document.querySelectorAll(
        'button, a, .magnetic-target, .btn-editorial-primary, .btn-editorial-secondary, .theme-choice-btn, .pillar-tag-chip, .hero-pill-badge'
      );

      let closestEl = null;
      let minDistance = Infinity;
      let closestRect = null;

      for (let i = 0; i < interactiveEls.length; i++) {
        const el = interactiveEls[i];
        const rect = el.getBoundingClientRect();

        // Comprobar si está en el viewport
        if (rect.width === 0 || rect.height === 0) continue;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

        if (dist < minDistance && dist < MAGNETIC_RADIUS) {
          minDistance = dist;
          closestEl = el;
          closestRect = rect;
        }
      }

      // Aplicar atracción gravitatoria vectorial
      if (closestEl && closestRect) {
        const centerX = closestRect.left + closestRect.width / 2;
        const centerY = closestRect.top + closestRect.height / 2;
        const pullFactor = Math.pow(1 - minDistance / MAGNETIC_RADIUS, 1.4);

        // Desplazamiento del cursor hacia el centroide del botón
        targetX = mouseX + (centerX - mouseX) * (pullFactor * 0.7);
        targetY = mouseY + (centerY - mouseY) * (pullFactor * 0.7);

        // Desplazamiento elástico del elemento hacia el puntero
        const elDx = (mouseX - centerX) * 0.25 * pullFactor;
        const elDy = (mouseY - centerY) * 0.25 * pullFactor;

        closestEl.style.transform = `translate3d(${elDx}px, ${elDy}px, 0)`;
        closestEl.style.transition = 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)';

        if (activeMagneticEl && activeMagneticEl !== closestEl) {
          activeMagneticEl.style.transform = 'translate3d(0, 0, 0)';
          activeMagneticEl.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
        }
        activeMagneticEl = closestEl;

        setCursorState((prev) => ({ ...prev, isMagnetic: true, isHovering: true }));
      } else {
        targetX = mouseX;
        targetY = mouseY;

        if (activeMagneticEl) {
          activeMagneticEl.style.transform = 'translate3d(0, 0, 0)';
          activeMagneticEl.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)';
          activeMagneticEl = null;
        }

        setCursorState((prev) => ({ ...prev, isMagnetic: false }));
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    // 2. RENDER LOOP CON LERP FÍSICO PARA EL SEGUIDOR
    const renderFollower = () => {
      followerX += (targetX - followerX) * 0.18;
      followerY += (targetY - followerY) * 0.18;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animId = requestAnimationFrame(renderFollower);
    };

    // 3. LISTENERS
    const onMouseDown = () => setCursorState((prev) => ({ ...prev, isMouseDown: true }));
    const onMouseUp = () => setCursorState((prev) => ({ ...prev, isMouseDown: false }));

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .editorial-card, .theme-choice-btn, .pillar-tag-chip, .game-floating-token');
      setCursorState((prev) => ({ ...prev, isHovering: !!target }));
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    renderFollower();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);

      if (activeMagneticEl) {
        activeMagneticEl.style.transform = '';
      }
    };
  }, []);

  const followerClasses = [
    'custom-cursor-follower',
    cursorState.isHovering ? 'hovering' : '',
    cursorState.isMagnetic ? 'magnetic-snap' : '',
    cursorState.isMouseDown ? 'clicking' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={followerRef} className={followerClasses} />
    </>
  );
}
