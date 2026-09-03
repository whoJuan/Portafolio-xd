import React from 'react';

export function BackgroundMesh() {
  return (
    <>
      <div className="editorial-canvas-bg" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="editorial-paper-grid" aria-hidden="true" />
    </>
  );
}
