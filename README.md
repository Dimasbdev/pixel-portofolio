<h1 align="center">DF.DEV - Retro 8-Bit Pixel Portfolio</h1>

<p align="center">
  <strong>Personal Developer Portfolio of Dimas Firmansyah</strong><br />

</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License" />
</p>

---

## Features & Highlights

- **Authentic 8-Bit Pixel Aesthetic**: Handcrafted stepped polygon borders, 3D arcade button shadows, pixelated typography, and retro color palettes.
- **Zero-Asset Sound Synthesizer**: Interactive retro sound effects (clicks, coin pickups, powerups, lasers, buzzers) generated on-the-fly via native **Web Audio API** (0 byte external audio files).
- **Seamless Bilingual Switcher**: Instant language toggling (**EN / ID**) with dedicated translations context and zero layout shifting.
- **CRT Monitor Scanline Simulation**: Toggleable vintage cathode-ray tube phosphor scanline effect.
- **Interactive Arcade Terminal CLI**: Full command-line interface with custom commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`) and an authentic `cmatrix` **digital rain engine**.
- **Tech Stack Inventory Inspector**: RPG-inspired bag inventory detailing real-world use-cases, toolkit stacks, and verified **WakaTime telemetry data**.
- **Featured Project Showcases**:
  - **MythosNote**: AI-powered document analysis and note-taking workspace *(Python, Django, PostgreSQL, Redis, Docker)*.
  - **Liminal PDF**: High-speed document conversion and manipulation platform *(Python, FastAPI, React, Docker)*.
  - **Financial Tracker**: Comprehensive income & expense analytics with dynamic trends *(Python, Flask, MySQL, TailwindCSS)*.
- **Live Web3Forms Contact Integration**: Working email delivery to inbox with custom 8-bit error validation, shake animations, and retro floating toast notifications.
- **Smart Hybrid Mobile Navigation**: Clean static desktop-friendly header paired with an ergonomically placed Mobile Bottom Navigation Bar.

---

## Tech Stack

- **Core**: React 18, Vite
- **Styling**: TailwindCSS, Custom CSS Stepped Polygons
- **Typography**: Google Fonts (*Press Start 2P*, *Silkscreen*, *VT323*, *JetBrains Mono*)
- **Audio**: Native HTML5 Web Audio API Oscillator Nodes
- **Form Delivery**: Web3Forms REST API
- **Icons**: Custom Monochromatic Crisp 8-Bit Pixel SVGs

---

## Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dimasbdev/pixel-portofolio.git
   cd pixel-portofolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Project Structure

```text
├── public/
│   ├── projects/          # Real project screenshots
│   └── vite.svg
├── src/
│   ├── components/        # Modular 8-Bit UI components
│   │   ├── ContactSection.jsx
│   │   ├── FooterTicker.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── MobileBottomNav.jsx
│   │   ├── PixelIcon.jsx
│   │   ├── Projects.jsx
│   │   ├── TechInventory.jsx
│   │   ├── TechLogos.jsx
│   │   └── TerminalModal.jsx
│   ├── context/           # Language state management
│   ├── utils/             # Web Audio synthesizer & i18n dictionaries
│   ├── App.jsx            # Master layout & interaction orchestrator
│   ├── index.css          # Pixel clip-paths, inset shadows & animations
│   └── main.jsx
├── index.html             # SEO meta headers & typography preconnects
├── tailwind.config.js     # Custom retro color tokens & font families
└── package.json
```

---

## Author

**Dimas Firmansyah** — *Backend Developer*
- **GitHub**: [@Dimasbdev](https://github.com/Dimasbdev)
- **Instagram**: [@dimmm.f](https://www.instagram.com/dimmm.f)
- **Email**: [dimasfirmandev@gmail.com](mailto:dimasfirmandev@gmail.com)

---

## License

This project is licensed under the **MIT License**.
