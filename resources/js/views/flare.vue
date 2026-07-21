<template>
  <section
    class="impact-metrics-section"
    :class="{ 'dark-theme': props.isDarkMode }"
    ref="sectionRef"
  >
    <!-- Background image layer with inline style binding -->
    <div class="section-bg-wrapper">
      <div 
        class="bg-image-layer" 
        :style="{ backgroundImage: `url(${props.backgroundImageUrl})` }"
      ></div>
      <div class="bg-overlay"></div>
    </div>

    <div class="metrics-container">
      <!-- Left Side: Editorial Intro -->
      <div class="metrics-intro">
        <span class="metrics-tag">Our Footprint</span>
        <h2 class="metrics-heading">Our Impacts </h2>
        
        <p class="metrics-lead">
          Real, verifiable progress. We track every metric to ensure resources 
          directly empower communities.
        </p>
        
      </div>

      <!-- Right Side: Minimal Stats Grid -->
      <div class="metrics-grid">
        <div
          class="metric-item"
          v-for="(stat, index) in stats"
          :key="index"
          :ref="(el) => { if (el) cardRefs[index] = el; }"
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <div class="metric-top-border"></div>
          
          <div class="metric-value-row">
            <span class="metric-number">{{ stat.displayedValue }}</span>
            <span class="metric-suffix">{{ stat.suffix }}</span>
          </div>
          
          <h3 class="metric-label">{{ stat.title }}</h3>
          <p class="metric-text">{{ stat.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false,
  },
  backgroundImageUrl: {
    type: String,
    // Premium, high-contrast dark-tinted landscape/community image from Unsplash
    default: "/assets/images/pupils.jpg", 
  }
});

const stats = ref([
  {
    title: "District Reached",
    text: "Driving systemic change. We advocate for marginalized populations through targeted local and structural campaigns to ensure inclusive progress across every region we serve.",
    targetValue: 30,
    displayedValue: 0,
    suffix: "+",
  },
  {
    title: "Life Impacted",
    text: "Direct and indirectly ",
    targetValue:  "1M",
    displayedValue: 0,
    suffix: "+",
  },
  {
    title: "Number of projects",
    text: "Eight (8) succesful projects",
    targetValue: 8,
    displayedValue: 0,
     suffix: "+",
    
  },
  {
    title: "Trees Planted",
    text: "Growing a sustainable future. We pair environmental restoration with sports to advocate better climate for the next generation.",
    targetValue: 26000,
    displayedValue: 0,
    suffix: "+",
  },
]);

const sectionRef = ref(null);
const cardRefs = ref([]);
let observer = null;
let hasAnimated = false;

const animateNumbers = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  const duration = 1500; 
  const frameRate = 1000 / 60; 
  const totalFrames = Math.round(duration / frameRate);

  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const easeOutQuad = progress * (2 - progress);

    stats.value.forEach((stat) => {
      stat.displayedValue = Math.round(stat.targetValue * easeOutQuad);
    });

    if (frame >= totalFrames) {
      clearInterval(counter);
      stats.value.forEach((stat) => {
        stat.displayedValue = stat.targetValue;
      });
    }
  }, frameRate);
};

onMounted(() => {
  cardRefs.value.forEach((el) => {
    if (el) el.classList.add("metric-hidden");
  });

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cardRefs.value.forEach((card) => {
          if (card) card.classList.add("metric-visible");
        });
        animateNumbers();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.impact-metrics-section {
  /* Dynamic Deep High-Contrast Overlay Palette */
  --text-primary: #ffffff;      /* Pure white values for maximum visibility over dark image masks */
  --text-secondary: #cbd5e1;    /* Bright ice silver description text */
  --accent-color: #38bdf8;      /* Neon Sky Blue for metrics details */ 
  --divider-color: rgba(255, 255, 255, 0.15);
  --overlay-bg: rgba(2, 14, 44, 0.88); /* Elite Rich Dark Sapphire Shadow Veil */ 

  position: relative;
  padding: 140px 8%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow: hidden;
  background-color: #010718;    /* solid safety fallback */
}

/* Dark Theme Variant (Absolute Depth Minimal Dark) */
.impact-metrics-section.dark-theme {
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent-color: #2563eb;       /* Electric Royal Accent Blue */
  --divider-color: rgba(255, 255, 255, 0.08);
  --overlay-bg: rgba(3, 7, 18, 0.93); /* Dark Obsidian Space Veil */ 
}

.section-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.bg-image-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.impact-metrics-section:hover .bg-image-layer {
  transform: scale(1.04);
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-bg);
  transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.metrics-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px;
  align-items: start;
}

.metrics-intro {
  position: sticky;
  top: 100px;
}

.metrics-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent-color);
  margin-bottom: 16px;
}

.metrics-heading {
  font-size: 2.85rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.metrics-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 54px;
  row-gap: 64px;
}

.metric-item {
  position: relative;
  display: flex;
  flex-direction: column;
}

.metric-top-border {
  width: 100%;
  height: 1px;
  background-color: var(--divider-color);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.metric-top-border::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.metric-item:hover .metric-top-border::after {
  transform: scaleX(1);
}

.metric-value-row {
  display: flex;
  align-items: baseline;
  margin-bottom: 12px;
}

.metric-number {
  font-size: 4.25rem;
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--text-primary);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.metric-item:hover .metric-number {
  transform: translateY(-4px);
  color: var(--accent-color);
}

.metric-suffix {
  font-size: 1.85rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-left: 3px;
}

.metric-label {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.metric-text {
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

/* Component Reveal Animations */
.metric-hidden {
  opacity: 0;
  transform: translateY(30px);
}

.metric-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 1024px) {
  .metrics-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .metrics-intro {
    position: static;
  }

  .metrics-heading {
    font-size: 2.35rem;
  }
}

@media (max-width: 640px) {
  .impact-metrics-section {
    padding: 90px 6%;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    row-gap: 44px;
  }

  .metric-number {
    font-size: 3.5rem;
  }
}
</style>