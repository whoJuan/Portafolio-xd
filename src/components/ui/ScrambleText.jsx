import React, { useState, useEffect, useRef, useCallback } from 'react';

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';

/**
 * ScrambleText: Efecto de Decodificación Criptográfica / Matrix Hacker Cypher
 * Decodifica progresivamente el texto objetivo carácter a carácter mediante glifos cinéticos.
 * Se activa automáticamente al entrar en el viewport o en evento hover.
 */
export function ScrambleText({
  text,
  as: Component = 'span',
  triggerOnView = true,
  triggerOnHover = true,
  duration = 900,
  chars = DEFAULT_CHARS,
  className = '',
  style = {},
  children,
  ...props
}) {
  const targetText = text || (typeof children === 'string' ? children : '');
  const [displayText, setDisplayText] = useState(targetText);
  const isScramblingRef = useRef(false);
  const elementRef = useRef(null);
  const hasAnimatedOnViewRef = useRef(false);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current || !targetText) return;
    isScramblingRef.current = true;

    const length = targetText.length;
    const startTime = performance.now();

    const updateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Caracteres ya resueltos a la izquierda
      const solvedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        const originalChar = targetText[i];
        if (originalChar === ' ') {
          result += ' ';
          continue;
        }

        if (i < solvedCount) {
          result += originalChar;
        } else if (i < solvedCount + 4) {
          // Zona de transición activa con caracteres aleatorios
          result += chars[Math.floor(Math.random() * chars.length)];
        } else {
          // Resto en decodificación o glifos atenuados
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        setDisplayText(targetText);
        isScramblingRef.current = false;
      }
    };

    requestAnimationFrame(updateFrame);
  }, [targetText, duration, chars]);

  // Activación por Scroll / Viewport (IntersectionObserver)
  useEffect(() => {
    if (!triggerOnView || hasAnimatedOnViewRef.current) return;

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedOnViewRef.current) {
            hasAnimatedOnViewRef.current = true;
            startScramble();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [triggerOnView, startScramble]);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`scramble-text-node ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums',
        ...style,
      }}
      {...props}
    >
      {displayText}
    </Component>
  );
}
