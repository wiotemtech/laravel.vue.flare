<template>
  <section class="human-about" :class="{ 'dark-mode': props.isDarkMode }">
    <div class="display-grid-container">
      
      <!-- LEFT SIDE: Warm, Organic Human-Centered Vector Composition -->
      <div class="graphic-canvas-stage">
        <div class="composition-frame">
          
          <!-- Decorative Background Organic Blob -->
          <div class="fluid-bg-glow"></div>

          <svg 
            viewBox="0 0 500 550" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            class="humanistic-svg"
          >
            <defs>
              <!-- Soft Warm Radiance Gradients -->
              <radialGradient id="sunRadiance" cx="75%" cy="30%" r="70%">
                <stop offset="0%" stop-color="var(--warm-amber)" stop-opacity="0.4" />
                <stop offset="60%" stop-color="var(--warm-coral)" stop-opacity="0.1" />
                <stop offset="100%" stop-color="var(--bg-canvas)" stop-opacity="0" />
              </radialGradient>

              <linearGradient id="humanGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1e1b4b" />
                <stop offset="60%" stop-color="var(--accent-indigo)" />
                <stop offset="100%" stop-color="var(--warm-coral)" />
              </linearGradient>

              <linearGradient id="childGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#312e81" />
                <stop offset="100%" stop-color="var(--accent-indigo)" />
              </linearGradient>

              <!-- Premium Drop Shadow for Depth Separation -->
              <filter id="organicShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="var(--shadow-color)" flood-opacity="0.15" />
              </filter>
            </defs>

            <!-- Ambient Sun Field Background -->
            <circle cx="360" cy="180" r="160" fill="url(#sunRadiance)" class="sun-field" />
            <circle cx="360" cy="180" r="45" fill="var(--warm-amber)" opacity="0.15" class="sun-pulse-ring" />
            <circle cx="360" cy="180" r="25" fill="var(--warm-amber)" class="sun-core" />

            <!-- Concentric Hope Ripples -->
            <circle cx="360" cy="180" r="90" stroke="var(--warm-coral)" stroke-width="1" stroke-dasharray="4 8" opacity="0.3" class="ripple-ring" />
            <circle cx="360" cy="180" r="130" stroke="var(--accent-indigo)" stroke-width="1" stroke-dasharray="2 6" opacity="0.2" class="ripple-ring slow" />

            <!-- Stylized Human Figures (Vector Metaphor: Protection, Guidance, Growth) -->
            <g filter="url(#organicShadow)" class="figures-group">
              <!-- Guardian / Woman Figure Structure -->
              <path 
                d="M 120 550 C 120 420, 160 340, 220 320 C 200 290, 200 250, 220 220 C 250 180, 300 190, 310 230 C 320 270, 300 300, 280 320 C 340 350, 380 430, 390 550 Z" 
                fill="url(#humanGradient)" 
                class="vector-silhouette adult-silhouette"
              />
              
              <!-- Protected Child Figure Structure -->
              <path 
                d="M 260 550 C 260 470, 280 430, 320 420 C 310 400, 310 370, 325 350 C 345 320, 380 325, 385 355 C 390 385, 375 405, 360 420 C 400 440, 420 490, 425 550 Z" 
                fill="url(#childGradient)" 
                class="vector-silhouette child-silhouette"
              />
            </g>

            <!-- Sparkling Impact Crosses / Starburst Particles -->
            <g fill="var(--warm-coral)" class="sparkle-cluster">
              <path d="M 160 180 L 163 187 L 170 190 L 163 193 L 160 200 L 157 193 L 150 190 L 157 187 Z" opacity="0.8" />
              <path d="M 420 280 L 422 284 L 426 286 L 422 288 L 420 292 L 418 288 L 414 286 L 418 284 Z" opacity="0.6" />
            </g>
          </svg>

          <!-- Floating Interactive Metrics Badge Overlay -->
          <div class="floating-impact-badge">
            <div class="badge-icon-core"></div>
            <p class="badge-txt">Registered with the Lira City NGO Monitoring Committee</p>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE: Modern High-Impact Warm Typography Layout -->
      <div class="narrative-text-stage">
        
        <header class="content-header">
          <div class="editorial-eyebrow">
            <span class="pill-accent">Our Foundations</span>
            <span class="eyebrow-text">Global Vision</span>
          </div>
          <h2 class="main-display-heading">
            Shattering Boundaries to Deliver Real Human Renewal.
          </h2>
        </header>

        <p class="editorial-lead-para">
          At Flare International Foundation, we challenge the status quo. We are an active, borderless Non-Governmental Organization transforming fragile lives from the ground up, generating structural ecosystems of safety, healing, and self-reliance.
        </p>

        <!-- Core Operational Strategy Cards -->
        <div class="action-cards-grid">
          <div class="strategy-card">
            <div class="card-edge coral"></div>
            <h3 class="card-title">Shielding Women &amp; Girls</h3>
            <p class="card-body-text">
              Combating gender-based violence (GBV) by launching tactical safe spaces and self-determination tracks designed to foster immediate socioeconomic autonomy.
            </p>
          </div>

          <div class="strategy-card">
            <div class="card-edge indigo"></div>
            <h3 class="card-title">Rehabilitating Street Children</h3>
            <p class="card-body-text">
              Deploying target-driven outreach structures that transition street-connected children into safe environments with stable health, education, and community pathways.
            </p>
          </div>
        </div>

        <p class="editorial-sub-para">
          Though our primary deployment centers are anchored inside Uganda, our human commitment refuses to accept strict limits or checkpoints. Where vulnerability exists, we build an infrastructure of hope.
        </p>

      </div>

    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Core Warm Modern Design Token Matrix */
.human-about {
  --bg-canvas: #faf9f6;
  --text-dark: #121214;
  --text-muted: #52525b;
  --accent-indigo: #4f46e5;
  --warm-coral: #f97316;
  --warm-amber: #facc15;
  --shadow-color: rgba(24, 24, 27, 0.08);
  --surface-card: #ffffff;
  --card-border: rgba(24, 24, 27, 0.04);
  
  background-color: var(--bg-canvas);
  color: var(--text-dark);
  padding: 140px 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow: hidden;
  transition: background-color 0.5s ease, color 0.5s ease;
}

/* Dark Mode Spectrum Configuration */
.dark-mode {
  --bg-canvas: #09090b;
  --text-dark: #f4f4f5;
  --text-muted: #a1a1aa;
  --accent-indigo: #6366f1;
  --warm-coral: #fb923c;
  --warm-amber: #fde047;
  --shadow-color: rgba(0, 0, 0, 0.4);
  --surface-card: #18181b;
  --card-border: rgba(255, 255, 255, 0.05);
}

/* Base Responsive Grid Structure */
.display-grid-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 88px;
  align-items: center;
}

/* ==========================================================================
   LEFT PANEL: ORGANIC GRAPHIC ENVIRONMENT
   ========================================================================== */
.graphic-canvas-stage {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.composition-frame {
  position: relative;
  width: 100%;
  max-width: 460px;
}

.humanistic-svg {
  width: 100%;
  height: auto;
  overflow: visible;
  z-index: 2;
  position: relative;
}

/* Ambient Fluid Background Blob */
.fluid-bg-glow {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, var(--warm-amber) 0%, transparent 70%);
  opacity: 0.12;
  filter: blur(40px);
  z-index: 1;
  pointer-events: none;
}

/* High Fidelity Interactive SVG Animations */
.sun-pulse-ring {
  animation: beaconPulse 3.5s ease-in-out infinite alternate;
  transform-origin: 360px 180px;
}

.ripple-ring {
  animation: rippleRotate 40s linear infinite;
  transform-origin: 360px 180px;
}
.ripple-ring.slow {
  animation-duration: 60s;
  animation-direction: reverse;
}

.sparkle-cluster path {
  animation: twinkleSparkle 4s ease-in-out infinite alternate;
  transform-origin: center;
}

.vector-silhouette {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.adult-silhouette { transform-origin: 250px 550px; }
.child-silhouette { transform-origin: 340px 550px; }

/* Micro Interaction Logic on Parent Canvas Hover */
.humanistic-svg:hover .adult-silhouette {
  transform: scale(1.03) translateX(-4px);
}

.humanistic-svg:hover .child-silhouette {
  transform: scale(1.05) translateX(2px);
}

.humanistic-svg:hover .sun-core {
  fill: var(--warm-coral);
}

/* Keyframe Math Parameters */
@keyframes beaconPulse {
  0% { transform: scale(0.85); opacity: 0.1; }
  100% { transform: scale(1.2); opacity: 0.35; }
}

@keyframes rippleRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes twinkleSparkle {
  0% { opacity: 0.2; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.15); }
}

/* Floating Realism Badge System */
.floating-impact-badge {
  position: absolute;
  bottom: 30px;
  left: -20px;
  background-color: var(--surface-card);
  border: 1px solid var(--card-border);
  box-shadow: 0 20px 40px var(--shadow-color);
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 260px;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.composition-frame:hover .floating-impact-badge {
  transform: translateY(-6px) rotate(-1deg);
}

.badge-icon-core {
  width: 10px;
  height: 10px;
  background-color: var(--warm-coral);
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
}
.badge-icon-core::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 1px solid var(--warm-coral);
  border-radius: 50%;
  animation: beaconPulse 1.5s infinite;
}

.badge-txt {
  font-size: 12px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}


/* ==========================================================================
   RIGHT PANEL: HIGH-IMPACT TYPOGRAPHY & CARDS
   ========================================================================== */
.narrative-text-stage {
  display: flex;
  flex-direction: column;
}

.editorial-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.pill-accent {
  background-color: rgba(79, 70, 229, 0.08);
  color: var(--accent-indigo);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.dark-mode .pill-accent {
  background-color: rgba(99, 102, 241, 0.15);
}

.eyebrow-text {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.main-display-heading {
  font-size: 2.85rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 32px;
}

.editorial-lead-para {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--text-dark);
  opacity: 0.9;
  margin-bottom: 40px;
}

/* Strategic Framework Action Layout Grid */
.action-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.strategy-card {
  background-color: var(--surface-card);
  border: 1px solid var(--card-border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.01);
  padding: 28px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.strategy-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px var(--shadow-color);
}

.card-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}
.card-edge.coral { background-color: var(--warm-coral); }
.card-edge.indigo { background-color: var(--accent-indigo); }

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.card-body-text {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.editorial-sub-para {
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-muted);
  border-left: 2px solid var(--card-border);
  padding-left: 20px;
  margin: 0;
}

/* Clean Responsive Adaptations */
@media (max-width: 1120px) {
  .display-grid-container {
    grid-template-columns: 1fr;
    gap: 72px;
    padding: 0 32px;
  }
  .human-about {
    padding: 100px 0;
  }
  .graphic-canvas-stage {
    order: -1;
    max-width: 440px;
    margin: 0 auto;
  }
  .main-display-heading {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .display-grid-container {
    padding: 0 20px;
  }
  .action-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .main-display-heading {
    font-size: 2rem;
  }
  .floating-impact-badge {
    left: 10px;
    right: 10px;
    max-width: none;
    bottom: 10px;
  }
}
</style>