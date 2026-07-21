<template>
 
<section class="hero-section">
      <div class="hero-bg-media"></div>
      <div class="grid-pattern"></div>
      <div class="glow-overlay"></div>

      <div class="hero-content reveal-on-scroll reveal-fade">
        <span class="badge">About Us</span>
        <h1>Let's build something <span class="gradient-text">meaningful</span> together</h1>
        <p>Connecting Environments, Health,Education, and Community Engagement.</p>
      </div>
    </section>

  <!-- Precise Skew-Axis Asymmetric Composition Workspace -->
  <section class="skew-workspace" :class="{ 'dark-theme': props.isDarkMode }">
    <div class="skew-canvas-container">
      
      <!-- Component Stage Layer Matrix -->
      <div class="architectural-stage" ref="stageElement">
        
        <!-- Background Plate Card Layer -->
        <div class="asymmetric-backdrop-plate">
          <div class="plate-inner-content-wrapper">
            <span class="editorial-eyebrow">Our Identity</span>
            <h2 class="editorial-title">About Flare International Foundation</h2>
            
            <p class="narrative-lead">
              Flare International Foundation is a registered 
              Non-Governmental Organization (NGO) committed to 
              transforming lives and empowering communities across 
              borders. While our roots and current operations are 
              based in Uganda, where we work closely with the Lira 
              City NGO Monitoring Committee and local stakeholders, 
              our vision extends far beyond national boundaries.
            </p>
            
            <p class="narrative-body">
            We believe that lasting development begins by empowering 
            people and strengthening communities. At the heart of our 
            work is a commitment to improving the lives of children, 
            youth, women, and marginalized and vulnerable populations, 
            including street-connected children and families facing 
            social and economic hardship.
            </p>
            
            <!-- Link swapped with button to trigger the dynamic modal layout -->
            <div class="action-trigger-block">
              <button @click="isModalOpen = true" class="pill-cta-button">Read More</button>
            </div>
          </div>
        </div>

        <!-- Foreground Breaking-Out Photo Element Card Layer -->
        <div class="asymmetric-foreground-image-card">
          <div class="image-inner-counter-skew-frame">
            <img
              src="/public/assets/images/fif.jpg"
              alt="Flare International Foundation Community Impact Workspace"
              class="skew-corrected-photo"
            />
            <div class="surface-glare-shield"></div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- High-End Editorial Content Modal Frame Overlay -->
  <Transition name="fade-overlay">
    <div v-if="isModalOpen" class="modal-backdrop-blur" @click.self="isModalOpen = false">
      <Transition name="scale-modal">
        <div class="premium-modal-window" :class="{ 'dark-theme': props.isDarkMode }">
          
          <!-- Close Target Anchor -->
          <button @click="isModalOpen = false" class="modal-close-trigger" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <!-- Inside Editorial Content Layout -->
          <div class="modal-scroll-container">
            <div class="modal-header-deck">
              <span class="editorial-eyebrow">Extended Narrative</span>
              <h3 class="modal-main-title">Flare International Foundation</h3>
              <div class="title-accent-bar"></div>
            </div>

            <div class="modal-body-grid">
              <div class="modal-narrative-column">
                <p class="modal-lead-text">
                  Flare International Foundation is a registered Non-Governmental Organization (NGO) committed to transforming lives and empowering communities across borders. While our roots and current operations are based in Uganda, where we work closely with the Lira City NGO Monitoring Committee and local stakeholders, our vision extends far beyond national boundaries.

We believe that lasting development begins by empowering people and strengthening communities. At the heart of our work is a commitment to improving the lives of children, youth, women, and marginalized and vulnerable populations, including street-connected children and families facing social and economic hardship.
                </p>
                <p class="modal-paragraph">
                  Our interventions focus on education, healthcare, climate action, civic engagement, support and relief, economic empowerment, gender equality, and the prevention and response to gender-based violence (GBV). Through these integrated programs, we create safe, inclusive, and resilient communities where every individual has the opportunity to thrive.

By working collaboratively with communities, government institutions, development partners, and volunteers, we promote sustainable solutions that restore dignity, build resilience, and create opportunities for long-term social and economic transformation.

At Flare International Foundation, we believe that when people are empowered with knowledge, resources, and opportunity, they become the driving force behind lasting positive change.
                </p>
              </div>

              <div class="modal-narrative-column">
                <p class="modal-paragraph">
                  Our Areas of Focus
                  <ul class="focus-list">
    <li><strong>Education:</strong> Expanding access to quality education, scholarships, mentorship, and school support for vulnerable children and young people.</li>
    <li><strong>Health:</strong> Improving access to healthcare services through medical outreach, health education, disease prevention, and community wellness initiatives.</li>
    <li><strong>Climate Action and Environmental Conservation:</strong> Promoting sustainable environmental practices through tree planting, beekeeping, environmental awareness, and climate resilience initiatives.</li>
    <li><strong>Child Protection:</strong> Protecting and supporting vulnerable and street-connected children through rehabilitation, education, family reintegration, and safeguarding programs.</li>
    <li><strong>Women and Youth Empowerment:</strong> Building leadership, life skills, entrepreneurship, and economic opportunities that enable women and young people to achieve self-reliance.</li>
    <li><strong>Economic Empowerment:</strong> Supporting livelihoods through vocational training, savings groups (VSLAs), financial literacy, and small business development.</li>
    <li><strong>Support and Humanitarian Relief:</strong> Providing emergency assistance, food, clothing, shelter, and essential supplies to individuals and communities affected by poverty and crises.</li>
    <li><strong>Gender Equality and GBV Prevention:</strong> Promoting equal opportunities while preventing and responding to gender-based violence through advocacy, awareness, survivor support, and community engagement.</li>
    <li><strong>Civic Engagement and Community Development:</strong> Strengthening citizen participation, leadership, accountability, and partnerships that contribute to peaceful, resilient, and inclusive communities.</li>
  </ul>

                </p>
                <p class="modal-highlight-quote">
                  "We don't simply offer short-term aid; we partner with communities to architect ecosystems of self-reliance, safety, and cross-border empowerment."
                </p>
              </div>
            </div>
          </div>

        </div>
      </Transition>
    </div>
  </Transition>

  <!-- Interlocking Core Steps Pillars Deck Matrix -->
  <section class="drivers-section" :class="{ 'dark-theme': props.isDarkMode }">
    <div class="drivers-container">
     

      <div class="asymmetric-matrix-deck">
        <div 
          v-for="(driver, index) in driversList" 
          :key="index" 
          class="matrix-deck-card"
          :style="{ '--accent-step-color': getStepDynamicColor(index) }"
        >
          <div class="matrix-card-blur-back"></div>
          <div class="matrix-card-border-track"></div>
          
          <div class="matrix-header-meta">
            <div class="matrix-index-pill">
              <span class="pill-dot"></span>
              <span class="pill-counter">PILLAR 0{{ index + 1 }}</span>
            </div>
          </div>
          
          <p class="matrix-main-content">{{ driver }}</p>
        </div>
      </div>
    </div>
  </section>

  <mission />
  <CoreValues/>
  <HowWeWork/>
  <WhatWeDo/>
  
  
  <Team />
  <Video />
  
  
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mission from "../components/mission.vue";
//import Team from "../components/Team.vue";
import Volunteer from "../components/Volunteer.vue";
import Video from "../components/Video.vue";
import CoreValues from "../components/CoreValues.vue";
import HowWeWork from "../components/HowWeWork.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
//import Projects from "../components/Projects.vue";

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false,
  },
});

const stageElement = ref(null);
const isModalOpen = ref(false);
let stageObserver;



const getStepDynamicColor = (index) => {
  const schemeColors = ['#0ea5e9', '#6366f1', '#10b981', '#f43f5e', '#a855f7'];
  return schemeColors[index % schemeColors.length];
};

onMounted(() => {
  stageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-skew-stage-entry");
        stageObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (stageElement.value) {
    stageObserver.observe(stageElement.value);
  }
});

onUnmounted(() => {
  if (stageObserver && stageElement.value) {
    stageObserver.unobserve(stageElement.value);
  }
});
</script>

<style scoped>
/* Token Definition Configuration Maps */
.landing-section,
.skew-workspace,
.drivers-section {
  --bg-canvas: #ffffff;
  --bg-skew-plate: #e6f7fa; 
  --text-bold: #1e293b;
  --text-normal: #475569;
  --text-light: #94a3b8;
  --brand-cyan: #00bcd4; 
  --brand-primary: #0ea5e9;
  --card-fill: #ffffff;
  --card-border: rgba(15, 23, 42, 0.04);
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  transition: background 0.4s ease, color 0.4s ease;
}

.dark-theme {
  --bg-canvas: #090a0f;
  --bg-skew-plate: #0d1e24; 
  --text-bold: #f8fafc;
  --text-normal: #cbd5e1;
  --text-light: #64748b;
  --brand-cyan: #00bcd4;
  --brand-primary: #38bdf8;
  --card-fill: #11141e;
  --card-border: rgba(255, 255, 255, 0.04);
}

/* Immersive Darkened Hero Section */
.hero-section {
  position: relative;
  
  height:50vh;
  min-height: 45px;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 
  text-align: center;      
  padding: 0 24px;
  background-color: #020617; 
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  z-index: 1;
}

.hero-bg-media {
  position: absolute;
  inset: 0;
  background-image: url('/public/assets/images/fight.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.45; 
  z-index: -3;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0);
  background-size: 24px 24px;
  opacity: 0.25; 
  z-index: -2;
}

.glow-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.9) 85%),
              linear-gradient(to bottom, rgba(2, 6, 23, 0.5), rgba(2, 6, 23, 0.95));
  z-index: -1;
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6));
}

.badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.hero-content h1 {
  font-size: clamp(2.3rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(135deg, #60a5fa,#60a5fa); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(96, 165, 250, 0.25); 
}

.hero-content p {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #94a3b8; 
  max-width: 600px;
  margin: 0 auto;
}


/* 1. Hero Landing Space Architecture */
.landing-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 40vh;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -113px;
  overflow: hidden;
  
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: #ffffff;
  text-align: center;
}

.hero-tag {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--brand-primary);
  margin-bottom: 12px;
  display: inline-block;
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 0 0 12px 0;
}

.hero-separator {
  width: 40px;
  height: 4px;
  background-color: var(--brand-primary);
  margin: 0 auto;
  border-radius: 2px;
}

/* 2. Engineering of Skew-Axis Component Layout */
.skew-workspace {
  background-color: var(--bg-canvas);
  padding: 160px 8%;
  overflow: hidden;
}

.skew-canvas-container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
}

.architectural-stage {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}

.asymmetric-backdrop-plate {
  grid-column: 1 / -1;
  justify-self: end;
  width: 78%;
  background-color: #1e88e5;
  border-radius: 28px;
  padding: 80px 80px 80px 24%; 
  text-align: left;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.02);
  transform: skewY(-6deg);
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.dark-theme .asymmetric-backdrop-plate {
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.plate-inner-content-wrapper {
  transform: skewY(6deg);
}

.editorial-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--brand-primary);
  display: block;
  margin-bottom: 12px;
}

.editorial-title {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: white;
}

.narrative-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  font-weight: 500;
  color: white;
  margin-bottom: 20px;
}

.narrative-body {
  font-size: 0.95rem;
  line-height: 1.75;
  color: white;
  margin: 0 0 32px 0;
}

.action-trigger-block {
  display: block;
}

.pill-cta-button {
  display: inline-block;
  background-color: white;
  color: #1e88e5;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 14px 36px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 188, 212, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s;
}

.pill-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(0, 188, 212, 0.45);
}

.asymmetric-foreground-image-card {
  position: absolute;
  left: 0;
  width: 40%;
  z-index: 10;
  transform: skewY(-6deg) translateY(-10px);
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.image-inner-counter-skew-frame {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: -15px 25px 55px rgba(15, 23, 42, 0.12);
  transform: skewY(6deg); 
}

.dark-theme .image-inner-counter-skew-frame {
  box-shadow: -15px 25px 55px rgba(0, 0, 0, 0.5);
}

.skew-corrected-photo {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  display: block;
  transform: scale(1.08); 
}

.surface-glare-shield {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

/* Interactive Motion States */
.architectural-stage:hover .asymmetric-backdrop-plate {
  transform: skewY(-5deg) scale(1.005);
}

.architectural-stage:hover .asymmetric-foreground-image-card {
  transform: skewY(-5deg) translateY(-18px) translateX(4px);
}

.architectural-stage {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-skew-stage-entry {
  opacity: 1;
  transform: translateY(0);
}

/* 3. Premium Integrated Modal Overlay Structural Layout */
.modal-backdrop-blur {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.premium-modal-window {
  background-color: #ffffff;
  width: 100%;
  max-width: 900px;
  border-radius: 32px;
  padding: 56px;
  position: relative;
  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.2);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.05);
  text-align: left;
}

.premium-modal-window.dark-theme {
  background-color: #0d111a;
  border-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);
  --text-bold: #f8fafc;
  --text-normal: #cbd5e1;
}

.modal-close-trigger {
  position: absolute;
  top: 32px;
  right: 32px;
  background: transparent;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s, color 0.25s;
}

.modal-close-trigger:hover {
  background-color: rgba(15, 23, 42, 0.05);
  color: var(--text-bold);
}

.dark-theme .modal-close-trigger:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.modal-scroll-container {
  overflow-y: auto;
  padding-right: 12px;
}

/* Custom Scrollbar styling for modal space */
.modal-scroll-container::-webkit-scrollbar {
  width: 6px;
}
.modal-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.modal-scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--text-light);
  border-radius: 20px;
  opacity: 0.4;
}

.modal-header-deck {
  margin-bottom: 36px;
}

.modal-main-title {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-bold);
  margin: 8px 0 20px 0;
  line-height: 1.2;
}

.title-accent-bar {
  width: 50px;
  height: 3px;
  background-color: var(--brand-cyan);
  border-radius: 20px;
}

.modal-body-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.modal-lead-text {
  font-size: 1.15rem;
  line-height: 1.65;
  font-weight: 600;
  color: var(--text-bold);
  margin-bottom: 20px;
}

.modal-paragraph {
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-normal);
  margin: 0 0 20px 0;
}

.modal-highlight-quote {
  border-left: 3px solid var(--brand-cyan);
  padding-left: 20px;
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-bold);
  font-weight: 500;
  margin-top: 24px;
}

/* Modal Vue Animations Mechanics */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.35s ease;
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

.scale-modal-enter-active,
.scale-modal-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
}
.scale-modal-enter-from,
.scale-modal-leave-to {
  transform: scale(0.94) translateY(10px);
  opacity: 0;
}

/* 4. Core Pillars Matrix Grid Sections */
.drivers-section {
  background-color: var(--bg-canvas);
  padding: 120px 6% 150px;
}

.drivers-section-header {
  text-align: center;
  margin-bottom: 70px;
}

.modern-section-subtitle {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-bold);
  margin: 6px 0 0 0;
}

.asymmetric-matrix-deck {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.matrix-deck-card {
  position: relative;
  background-color: var(--card-fill);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
}

.dark-theme .matrix-deck-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.matrix-card-blur-back {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 100% 100%, var(--accent-step-color), transparent 60%);
  opacity: 0.02;
}

.matrix-card-border-track {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 3px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.matrix-header-meta {
  margin-bottom: 20px;
}

.matrix-index-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-canvas);
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid var(--card-border);
}

.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--accent-step-color);
}

.pill-counter {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-light);
  letter-spacing: 0.5px;
}

.matrix-main-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-normal);
  font-weight: 500;
  margin: 0;
}

.matrix-deck-card:hover {
  transform: translateY(-5px);
}

.matrix-deck-card:hover .matrix-card-border-track {
  background-color: var(--accent-step-color);
}

/* 5. Cross-Device Fluid Adaptive Viewport Adjustments */
@media (max-width: 1140px) {
  .asymmetric-matrix-deck {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .asymmetric-backdrop-plate {
    width: 100%;
    padding: 340px 40px 50px 40px; 
    transform: none !important;
    border-radius: 24px;
  }

  .plate-inner-content-wrapper {
    transform: none !important;
    text-align: center;
  }

  .asymmetric-foreground-image-card {
    position: absolute;
    top: -50px;
    left: 5%;
    width: 90%;
    transform: none !important;
  }

  .image-inner-counter-skew-frame {
    transform: none !important;
    border-radius: 20px;
  }

  .skew-corrected-photo {
    transform: none;
    max-height: 340px;
  }

  .modal-body-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .premium-modal-window {
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .asymmetric-matrix-deck {
    grid-template-columns: 1fr;
  }
  .editorial-title, .modal-main-title {
    font-size: 1.9rem;
  }
  .skew-workspace {
    padding: 100px 4%;
  }
}
</style>