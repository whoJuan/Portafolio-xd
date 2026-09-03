# ✦ Juan Aguirre — Dev Full Stack & Product Designer

Portafolio profesional desarrollado con **React + Vite**, arquitectura modular de componentes, **Morfismo Editorial de Revista (predominio de blancos, marfil y cristal escarchado)**, **scroll continuo** con animaciones fluidas (`framer-motion`), **Laboratorio de Tokens interactivo**, **Web Audio API para micro-feedback háptico** y un **Easter Egg Arcade** oculto.

---

## 🚀 Tecnologías & Herramientas

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Animaciones & Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Efectos & Confetti**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Audio Sintetizado**: Web Audio API nativo (osciladores sinusoidales y triangulares para chimes, clics y feedback háptico)
- **Estética Visual**: Morfismo Editorial de Revista, Glassmorfismo multicapa, tipografía suiza (`Instrument Serif` & `Syne`).

---

## 📂 Arquitectura Modular

```
ux-ui-pro-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/       # Navigation, EditorialMasthead, BackgroundMesh, CustomCursor, ScrollProgress, Footer
│   │   ├── sections/     # HeroEditorial, SkillsMatrix, TokensLab, CaseStudies, Methodology, Philosophy, Contact
│   │   ├── modals/       # CaseStudyModal (desglose profundo con tabs y métricas)
│   │   ├── easteregg/    # TokenTapGame (minijuego interactivo arcade)
│   │   └── ui/           # GlassCard, SectionHeader, RevealOnScroll
│   ├── data/             # caseStudies.js, skillsData.js, processData.js, awardsData.js, themePresets.js
│   ├── hooks/            # useSoundEffects.js, useScrollSpy.js, useTiltEffect.js
│   ├── styles/           # index.css (tokens de 3 capas, temas cromáticos, glassmorfismo)
│   ├── App.jsx           # Orquestador global de estado
│   └── main.jsx          # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🕹️ Easter Egg Secreto

Haz **10 clics consecutivos** sobre el isotipo del **Prisma de Cristal** en el logo de la barra de navegación para desbloquear el minijuego arcade **"UX Token Tap Arcade"** con cuenta regresiva, combos de puntos, sonido dinámico y confeti.

---

## 🛠️ Instalación y Uso Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/whoJuan/Portafolio-xd.git

# 2. Entrar al directorio
cd Portafolio-xd

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

Para compilar para producción:
```bash
npm run build
```

---

## 📬 Contacto

- **Desarrollador**: Juan Aguirre
- **Rol**: Dev Full Stack & Product Designer
- **Correo**: [juancitochannel@gmail.com](mailto:juancitochannel@gmail.com)
