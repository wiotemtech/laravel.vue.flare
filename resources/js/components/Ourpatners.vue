<template>
  <!-- Strategic Alliances & Partners Segment -->
  <section class="partners-section" :class="{ 'dark-theme': props.isDarkMode }">
    
    <!-- Sophisticated Ambient SVG Grid Layer -->
    <div class="absolute-grid-overlay">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" class="grid-path" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
    </div>

    <!-- Elevated Vector Network Graph & Waves -->
    <div class="artistic-graph-lines">
      <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-wave-canvas">
        <path d="M-100,200 Q250,50 600,250 T1300,150 T1600,280" class="wave-path line-glow" stroke-width="6" stroke-linecap="round"/>
        <path d="M-100,200 Q250,50 600,250 T1300,150 T1600,280" class="wave-path line-primary" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M-50,280 Q300,380 700,120 T1400,220" class="wave-path line-secondary" stroke-width="1.5" stroke-dasharray="6 8" stroke-linecap="round"/>
        
        <circle cx="250" cy="113" r="4" class="graph-node node-primary" />
        <circle cx="600" cy="250" r="5" class="graph-node node-secondary" />
        <circle cx="950" cy="200" r="4" class="graph-node node-primary" />
        <circle cx="1300" cy="150" r="6" class="graph-node node-secondary" />
      </svg>
    </div>

    <div class="partners-container">
      
      <!-- Section Header Architecture -->
      <header class="partners-header">
        <span class="section-tag">Global Network</span>
        <h2 class="section-title">OUR TRUSTED PARTNERS & ALLIES</h2>
        
        <div class="header-accent-separator">
          <svg width="160" height="12" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H50M110 6H156" class="sep-outer" stroke-width="2" stroke-linecap="round"/>
            <path d="M58 6H102" class="sep-inner" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="80" cy="6" r="4" class="sep-center-dot"/>
          </svg>
        </div>
        
        <p class="section-subtitle">
          Building institutional synergy and grass-roots impact across borders alongside 
          governmental bodies, global foundations, and local communities.
        </p>
      </header>

      <!-- Infinite Marquee Ticker Track -->
      <div class="marquee-viewport" @mouseenter="pauseTicker" @mouseleave="resumeTicker">
        <div class="marquee-track" :class="{ 'track-paused': isPaused }">
          
          <div class="marquee-group">
            <div v-for="(partner, index) in partnersList" :key="'orig-' + index" class="partner-logo-card">
              <div class="card-content">
                <img :src="partner.logoUrl" :alt="partner.name" class="partner-brand-logo" />
                <span class="partner-brand-name">{{ partner.name }}</span>
              </div>
            </div>
          </div>

          <div class="marquee-group" aria-hidden="true">
            <div v-for="(partner, index) in partnersList" :key="'dup-' + index" class="partner-logo-card">
              <div class="card-content">
                <img :src="partner.logoUrl" :alt="partner.name" class="partner-brand-logo" />
                <span class="partner-brand-name">{{ partner.name }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const isPaused = ref(false)

// Ensure these images exist in resources/images or appropriate public folder
const partnersList = ref([
  { name: '', logoUrl: '/assets/images/part1.jpg' },
  { name: '', logoUrl: '/assets/images/part2.jpg' },
  { name: '', logoUrl: '/assets/images/part3.jpg' },
  { name: '', logoUrl: '/assets/images/part4.jpg' },
])

const pauseTicker = () => (isPaused.value = true)
const resumeTicker = () => (isPaused.value = false)
</script>

<style scoped>
.partners-section {
  --bg-primary: #1e88e5;
  --bg-card: #ffffff;
  --text-main: #ffffff;
  --text-muted: #cbd5e1;
  --text-card-brand: #0f172a;
  --text-card-muted: #64748b;
  --accent-cyan: #38bdf8;
  --card-border: rgba(255, 255, 255, 0.1);
  --card-shadow: rgba(2, 22, 69, 0.35);
  --gradient-overlay: linear-gradient(to right, #1e88e5, transparent 15%, transparent 85%, #1e88e5);
  
  --grid-color: rgba(255, 255, 255, 0.05);
  --svg-line-alpha: 0.3;

  --logo-filter: drop-shadow(0px 2px 4px rgba(15, 23, 42, 0.08));
  --logo-filter-hover: drop-shadow(0px 8px 16px rgba(2, 82, 207, 0.25)) scale(1.04);
  --card-glow: rgba(56, 189, 248, 0.4);

  background-color: var(--bg-primary);
  color: var(--text-main);
  padding: 60px 5% 70px 5%;
  transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  position: relative;
}

.dark-theme {
  --bg-primary: #021a67;
  --bg-card: #0b1535;
  --text-main: #f8fafc;
  --text-muted: #64748b;
  --text-card-brand: #f1f5f9;
  --text-card-muted: #475569;
  --accent-cyan: #06b6d4;
  --card-border: rgba(6, 182, 212, 0.1);
  --card-shadow: rgba(0, 4, 16, 0.6);
  --gradient-overlay: linear-gradient(to right, #021a67, transparent 15%, transparent 85%, #021a67);
  --grid-color: rgba(6, 182, 212, 0.03);
  --svg-line-alpha: 0.15;
  --card-glow: rgba(6, 182, 212, 0.2);
}

/* Background Layers */
.absolute-grid-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
.grid-path { stroke: var(--grid-color); }

.artistic-graph-lines { position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%); width: 105%; pointer-events: none; z-index: 1; }
.svg-wave-canvas { width: 100%; height: auto; }
.wave-path.line-glow { stroke: var(--accent-cyan); opacity: calc(var(--svg-line-alpha) * 0.4); filter: blur(8px); }
.wave-path.line-primary { stroke: var(--accent-cyan); opacity: var(--svg-line-alpha); }
.wave-path.line-secondary { stroke: #ffffff; opacity: calc(var(--svg-line-alpha) * 0.6); }

.graph-node { fill: var(--bg-primary); stroke-width: 2; }
.node-primary { stroke: var(--accent-cyan); opacity: calc(var(--svg-line-alpha) * 2.5); }
.node-secondary { stroke: #ffffff; opacity: calc(var(--svg-line-alpha) * 2.5); }

.partners-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }

/* Header */
.partners-header { text-align: center; max-width: 700px; margin: 0 auto 48px auto; }
.section-tag { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 700; color: var(--accent-cyan); margin-bottom: 12px; display: inline-block; }
.section-title { font-size: 2.35rem; font-weight: 800; line-height: 1.2; margin-bottom: 14px; color: var(--text-main); }
.header-accent-separator { display: flex; justify-content: center; margin-bottom: 24px; }
.sep-outer { stroke: #ffffff; opacity: 0.25; }
.sep-inner { stroke: var(--accent-cyan); opacity: 0.4; }
.sep-center-dot { fill: var(--accent-cyan); }
.section-subtitle { font-size: 1.05rem; line-height: 1.65; color: var(--text-muted); }

/* Marquee */
.marquee-viewport { position: relative; width: 100%; overflow: hidden; padding: 24px 0; }
.marquee-viewport::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: var(--gradient-overlay); z-index: 3; }
.marquee-track { display: flex; width: max-content; animation: tickerLoop 32s linear infinite; }
.marquee-group { display: flex; gap: 32px; padding-right: 32px; }
.track-paused { animation-play-state: paused; }
@keyframes tickerLoop { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* Cards */
.partner-logo-card { width: 230px; height: 105px; background-color: var(--bg-card); border: 1px solid var(--card-border); box-shadow: 0 12px 24px -6px var(--card-shadow); border-radius: 20px; display: flex; align-items: center; padding: 0 24px; transition: all 0.4s ease; }
.partner-logo-card:hover { transform: translateY(-8px) scale(1.02); border-color: var(--accent-cyan); box-shadow: 0 20px 35px -10px var(--card-shadow), 0 0 25px var(--card-glow); }
.card-content { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; }
.partner-brand-logo { max-height: 38px; object-fit: contain; filter: var(--logo-filter); transition: all 0.4s ease; }
.partner-brand-name { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-card-muted); }
.partner-logo-card:hover .partner-brand-name { color: var(--accent-cyan); }

@media (max-width: 768px) {
  .partners-section { padding: 40px 6%; }
  .partner-logo-card { width: 190px; height: 95px; }
}
</style>