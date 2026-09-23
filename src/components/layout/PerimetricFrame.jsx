import React from 'react';

/**
 * PerimetricFrame: Marco perimetral y HUD de precisión editorial
 * Proporciona encuadre arquitectónico, marcas de corte, telemetría y estado de escena en tiempo real
 */
export function PerimetricFrame({ activeSection = 'hero', scrollProgress = 0 }) {
  const getSceneLabel = (id) => {
    switch (id) {
      case 'hero': return '01 // HERO ARCHITECTURE';
      case 'skills': return '02 // CAPABILITIES MATRIX';
      case 'tokens-lab': return '03 // TOKENS & SYSTEM LAB';
      case 'projects': return '04 // CASE STUDIES & ROI';
      case 'methodology': return '05 // SPRINT METHODOLOGY';
      case 'about': return '06 // DESIGN PHILOSOPHY';
      case 'contact': return '07 // STRATEGIC DISPATCH';
      default: return '01 // CORE SYSTEM';
    }
  };

  const formattedProgress = Math.min(100, Math.max(0, Math.round(scrollProgress)))
    .toString()
    .padStart(3, '0');

  return (
    <div className="perimetric-frame" aria-hidden="true">
      {/* 4 Perimeter Hairline Borders */}
      <div className="perimeter-border perimeter-top" />
      <div className="perimeter-border perimeter-bottom" />
      <div className="perimeter-border perimeter-left" />
      <div className="perimeter-border perimeter-right" />

      {/* 4 Corner Architectural Crosshairs & Notches */}
      <div className="perimeter-corner corner-top-left">
        <span className="corner-crosshair">⌜</span>
        <div className="corner-meta">
          <span className="meta-primary">SYS.KORVEXYA // CORE</span>
          <span className="meta-secondary">LAT 40.7128° N // 74.0060° W</span>
        </div>
      </div>

      <div className="perimeter-corner corner-top-right">
        <div className="corner-meta meta-right">
          <span className="meta-status">
            <span className="status-beacon" />
            NODE ONLINE 24/7
          </span>
          <span className="meta-secondary">VITE 6.2 // THREE.JS WEBGL</span>
        </div>
        <span className="corner-crosshair">⌝</span>
      </div>

      <div className="perimeter-corner corner-bottom-left">
        <span className="corner-crosshair">⌞</span>
        <div className="corner-meta">
          <span className="meta-label">SCENE INDEX</span>
          <span className="meta-scene-badge">{getSceneLabel(activeSection)}</span>
        </div>
      </div>

      <div className="perimeter-corner corner-bottom-right">
        <div className="corner-meta meta-right">
          <span className="meta-label">SCROLL DISPLACEMENT</span>
          <span className="meta-progress-counter">{formattedProgress}%</span>
        </div>
        <span className="corner-crosshair">⌟</span>
      </div>

      {/* Edge Calibration Ticks */}
      <div className="edge-ticks edge-ticks-left">
        <span className="tick-notch" />
        <span className="tick-notch" />
        <span className="tick-notch active" />
        <span className="tick-notch" />
      </div>

      <div className="edge-ticks edge-ticks-right">
        <span className="tick-notch" />
        <span className="tick-notch" />
        <span className="tick-notch active" />
        <span className="tick-notch" />
      </div>
    </div>
  );
}
