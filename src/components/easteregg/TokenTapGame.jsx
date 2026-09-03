import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Trophy, RefreshCw, Zap, Sparkles } from 'lucide-react';

const TOKEN_TYPES = [
  { id: 'blur', label: '💎 Glass Blur', points: 100, color: '#38bdf8' },
  { id: 'spring', label: '⚡ Spring 60FPS', points: 150, color: '#818cf8' },
  { id: 'aaa', label: '✨ WCAG AAA', points: 200, color: '#34d399' },
  { id: 'figma', label: '✦ Figma Token', points: 120, color: '#f472b6' },
  { id: 'serif', label: '🖋️ Editorial Type', points: 180, color: '#fbbf24' },
  { id: 'combo', label: '🔥 Ultra Multiplier', points: 300, color: '#f87171' }
];

export function TokenTapGame({ isOpen, onClose, playPop, playChime }) {
  const [gameState, setGameState] = useState('playing'); // 'playing' | 'gameover'
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [combo, setCombo] = useState(1);
  const [activeTokens, setActiveTokens] = useState([]);
  const tokenIdCounter = useRef(0);

  // Spawn tokens
  const spawnToken = useCallback(() => {
    tokenIdCounter.current += 1;
    const type = TOKEN_TYPES[Math.floor(Math.random() * TOKEN_TYPES.length)];
    const x = Math.random() * 80 + 10; // 10% to 90%
    const y = Math.random() * 70 + 15; // 15% to 85%

    const newToken = {
      id: tokenIdCounter.current,
      ...type,
      x,
      y,
      createdAt: Date.now()
    };

    setActiveTokens(prev => [...prev.slice(-6), newToken]);
  }, []);

  // Start / Reset Game
  const resetGame = () => {
    setScore(0);
    setTimeLeft(20);
    setCombo(1);
    setGameState('playing');
    setActiveTokens([]);
    tokenIdCounter.current = 0;
  };

  useEffect(() => {
    if (!isOpen) return;
    resetGame();
  }, [isOpen]);

  // Game timer loop
  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('gameover');
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
          playChime();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, gameState, playChime]);

  // Token spawner interval
  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;

    // Spawn 2 initially
    spawnToken();
    spawnToken();

    const spawnInterval = setInterval(() => {
      spawnToken();
    }, 700);

    return () => clearInterval(spawnInterval);
  }, [isOpen, gameState, spawnToken]);

  // Tap handler
  const handleTapToken = (token) => {
    playPop(combo);
    const addedScore = token.points * combo;
    setScore(prev => prev + addedScore);
    setCombo(prev => Math.min(prev + 1, 8));

    // Remove token and spawn another
    setActiveTokens(prev => prev.filter(t => t.id !== token.id));
    spawnToken();
  };

  const getRank = () => {
    if (score >= 3500) return { title: "👑 Grandmaster Design Architect", desc: "Reflejos de nivel divino. Dominas los tokens y el glassmorfismo a la perfección." };
    if (score >= 2200) return { title: "⚡ Senior Design Systems Lead", desc: "Velocidad excepcional y precisión quirúrgica de diseño." };
    if (score >= 1200) return { title: "💎 Pro Glassmorphism Crafter", desc: "Gran habilidad para sincronizar componentes interactivos." };
    return { title: "🌱 Junior Token Explorer", desc: "¡Buen intento! Sigue explorando para dominar la coreografía visual." };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="game-overlay-backdrop">
        
        {/* Top HUD */}
        <div className="game-hud-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={20} color="#f59e0b" />
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
              UX TOKEN TAP ARCADE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block' }}>TIEMPO</span>
              <span className="game-timer-badge">{timeLeft}s</span>
            </div>

            <div>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block' }}>COMBO</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: '#f43f5e' }}>
                {combo}x
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'block' }}>PUNTUACIÓN</span>
              <span className="game-score-badge">{score}</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ color: '#ffffff', padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}
            aria-label="Cerrar juego"
          >
            <X size={20} />
          </button>
        </div>

        {/* Game Stage Arena or Results */}
        {gameState === 'playing' ? (
          <div className="game-arena-stage">
            <div style={{ position: 'absolute', top: 12, left: 16, color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              ¡Toca tantos tokens flotantes como puedas antes de que se acabe el tiempo!
            </div>

            <AnimatePresence>
              {activeTokens.map(token => (
                <motion.div
                  key={token.id}
                  className="game-floating-token"
                  style={{
                    left: `${token.x}%`,
                    top: `${token.y}%`,
                    border: `2px solid ${token.color}`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  onClick={() => handleTapToken(token)}
                >
                  <span style={{ color: token.color, fontSize: '1rem' }}>✦</span>
                  <span>{token.label}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>+{token.points}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            className="game-results-panel"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Trophy size={32} />
            </div>

            <span className="section-kicker-tag" style={{ color: 'var(--accent-primary)' }}>
              RESULTADO FINAL
            </span>
            <h2 style={{ fontFamily: 'var(--font-editorial-headline)', fontSize: '2.5rem', fontWeight: 800, margin: '8px 0' }}>
              {score} PTS
            </h2>

            <div style={{ background: 'var(--paper-alabaster)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--paper-border)', margin: '16px 0 24px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0a0c10' }}>
                {getRank().title}
              </div>
              <p style={{ fontSize: '0.86rem', color: '#64748b', marginTop: '4px' }}>
                {getRank().desc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button 
                className="btn-editorial-primary"
                onClick={resetGame}
              >
                <RefreshCw size={16} />
                <span>Jugar de Nuevo</span>
              </button>

              <button 
                className="btn-editorial-secondary"
                onClick={onClose}
              >
                <span>Volver al Portafolio</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </AnimatePresence>
  );
}
