import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animId;

    const onPointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const renderFollower = () => {
      followerX += (mouseX - followerX) * 0.2;
      followerY += (mouseY - followerY) * 0.2;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px)`;
      }
      animId = requestAnimationFrame(renderFollower);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    renderFollower();

    // Hover detection
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .editorial-card, .theme-choice-btn, .pillar-tag-chip, .game-floating-token');
      setIsHovering(!!target);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={followerRef} className={`custom-cursor-follower ${isHovering ? 'hovering' : ''}`} />
    </>
  );
}
