import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Scene3D: Escenario 3D WebGL con Three.js
 * - Iluminación de estudio multicapa (Key, Fill, Rim, Ambient)
 * - Escultura procedural central con núcleo facetado, jaula wireframe, anillos orbitales y partículas de polvo estelar
 * - Parallax suave con el ratón y propiedades reactivas para coreografía con GSAP ScrollTrigger
 */
export function Scene3D({ choreographyRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. DIMENSIONES & RENDERER
    let width = window.innerWidth;
    let height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 2. SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 3. ILUMINACIÓN DE ESTUDIO
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x6366f1, 3.2); // Key Indigo
    keyLight.position.set(6, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x06b6d4, 3.5, 40); // Rim Cyan
    rimLight.position.set(-6, -4, 4);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0xa855f7, 2.5, 30); // Accent Purple
    accentLight.position.set(4, -5, 3);
    scene.add(accentLight);

    // 4. GRUPO PRINCIPAL ESCULTURAL
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // a) Núcleo Central Facetado
    const coreGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x18182e,
      emissive: 0x312e81,
      emissiveIntensity: 0.35,
      roughness: 0.18,
      metalness: 0.88,
      reflectivity: 0.95,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // b) Jaula Wireframe Exterior Concéntrica
    const cageGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    masterGroup.add(cageMesh);

    // c) Anillos Orbitales Cinemáticos
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    const ring1Geo = new THREE.TorusGeometry(2.7, 0.022, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    ringGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.15, 0.018, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0891b2,
      emissiveIntensity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    ringGroup.add(ring2);

    // d) Nube de Polvo Cósmico / Stardust Particles
    const particlesCount = 450;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // 5. VARIABLES DE INTERACCIÓN & COREOGRAFÍA
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Estado reactivo al scroll expuesto a la referencia
    const choreo = choreographyRef?.current || {
      posX: 0,
      posY: 0,
      posZ: 0,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      scale: 1,
      wireframeOpacity: 0.45,
      ringExpansion: 1,
      speed: 1,
    };

    // 6. RESIZE LISTENER
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 7. ANIMATION LOOP (60FPS)
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Actualizar dinámicas del objeto base
      coreMesh.rotation.y = elapsedTime * 0.25 * choreo.speed;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15;

      cageMesh.rotation.y = -elapsedTime * 0.18 * choreo.speed;
      cageMesh.rotation.z = Math.cos(elapsedTime * 0.25) * 0.2;

      ring1.rotation.z = elapsedTime * 0.35 * choreo.speed;
      ring2.rotation.x = -elapsedTime * 0.28 * choreo.speed;

      // Partículas flotando suavemente
      particlesMesh.rotation.y = elapsedTime * 0.04;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // Luz puntual reactiva a la posición del cursor
      rimLight.position.x = -6 + mouse.x * 2.5;
      rimLight.position.y = -4 + mouse.y * 2.5;

      // Aplicar interpolación de coreografía desde ScrollTrigger
      masterGroup.position.x += (choreo.posX - masterGroup.position.x) * 0.06;
      masterGroup.position.y += (choreo.posY - masterGroup.position.y) * 0.06;
      masterGroup.position.z += (choreo.posZ - masterGroup.position.z) * 0.06;

      masterGroup.rotation.x += (choreo.rotX + mouse.y * 0.35 - masterGroup.rotation.x) * 0.06;
      masterGroup.rotation.y += (choreo.rotY + mouse.x * 0.45 - masterGroup.rotation.y) * 0.06;
      masterGroup.rotation.z += (choreo.rotZ - masterGroup.rotation.z) * 0.06;

      const currentScale = masterGroup.scale.x;
      const targetScale = choreo.scale;
      const nextScale = currentScale + (targetScale - currentScale) * 0.06;
      masterGroup.scale.set(nextScale, nextScale, nextScale);

      cageMaterial.opacity += (choreo.wireframeOpacity - cageMaterial.opacity) * 0.05;

      ring1.scale.set(choreo.ringExpansion, choreo.ringExpansion, choreo.ringExpansion);
      ring2.scale.set(choreo.ringExpansion, choreo.ringExpansion, choreo.ringExpansion);

      renderer.render(scene, camera);
    };

    animate();

    // 8. CLEANUP MEMORIA THREE.JS
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [choreographyRef]);

  return (
    <div className="scene-3d-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="scene-3d-canvas" />
    </div>
  );
}
