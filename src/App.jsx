import React, { useState, useEffect } from 'react';
import { useSoundEffects } from './hooks/useSoundEffects';
import { useScrollSpy } from './hooks/useScrollSpy';

// Layout
import { BackgroundMesh } from './components/layout/BackgroundMesh';
import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { EditorialMasthead } from './components/layout/EditorialMasthead';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Sections
import { HeroEditorial } from './components/sections/HeroEditorial';
import { SkillsMatrix } from './components/sections/SkillsMatrix';
import { TokensLab } from './components/sections/TokensLab';
import { CaseStudies } from './components/sections/CaseStudies';
import { Methodology } from './components/sections/Methodology';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';

// Modals & Easter Egg
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { TokenTapGame } from './components/easteregg/TokenTapGame';

export default function App() {
  const sectionIds = ['hero', 'skills', 'tokens-lab', 'projects', 'methodology', 'about', 'contact'];
  const { activeSection, scrollProgress, isScrolled } = useScrollSpy(sectionIds);
  const { 
    soundEnabled, 
    toggleSound, 
    playChime, 
    playClick, 
    playModalOpen, 
    playPop 
  } = useSoundEffects();

  // State
  const [currentTheme, setCurrentTheme] = useState('default');
  const [blurValue, setBlurValue] = useState(20);
  const [saturationValue, setSaturationValue] = useState(170);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  // Apply Theme & Token variables to document
  useEffect(() => {
    if (currentTheme === 'default') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--glass-blur', `${blurValue}px`);
  }, [blurValue]);

  useEffect(() => {
    document.documentElement.style.setProperty('--glass-saturation', `${saturationValue}%`);
  }, [saturationValue]);

  return (
    <div className="portfolio-app-root">
      {/* Kinetic Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Top Linear Scroll Progress Indicator */}
      <ScrollProgress progress={scrollProgress} />

      {/* Ambient Lighting & Paper Texture Background */}
      <BackgroundMesh />

      {/* Editorial Masthead Strip */}
      <EditorialMasthead />

      {/* Floating Capsule Glass Navigation with 10-Click Easter Egg Counter */}
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onTriggerEasterEgg={() => {
          playChime();
          setEasterEggOpen(true);
        }}
        playClick={playClick}
        playChime={playChime}
      />

      {/* Main Content Flow */}
      <main>
        <HeroEditorial 
          playChime={playChime} 
          playClick={playClick} 
        />

        <SkillsMatrix 
          playClick={playClick} 
        />

        <TokensLab
          currentTheme={currentTheme}
          onSelectTheme={setCurrentTheme}
          blurValue={blurValue}
          setBlurValue={setBlurValue}
          saturationValue={saturationValue}
          setSaturationValue={setSaturationValue}
          playClick={playClick}
          playChime={playChime}
        />

        <CaseStudies
          onOpenDeepDive={setActiveModalProject}
          playModalOpen={playModalOpen}
          playClick={playClick}
        />

        <Methodology />

        <Philosophy />

        <Contact 
          playChime={playChime} 
          playClick={playClick} 
        />
      </main>

      {/* Editorial Footer */}
      <Footer playClick={playClick} />

      {/* Deep-Dive Case Study Modal Drawer */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        playClick={playClick}
      />

      {/* Secret Easter Egg Arcade Game (10 Clicks on Logo) */}
      <TokenTapGame
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
        playPop={playPop}
        playChime={playChime}
      />
    </div>
  );
}
