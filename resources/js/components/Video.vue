<template>
  <section 
    class="testimonials-section" 
    :class="{ 'dark-theme': props.isDarkMode }"
    style="background-image: url('/public/assets/images/won.jpg');"
  >
    <!-- Dark, warm gradient overlay to guarantee perfect text contrast and make the videos pop -->
    <div class="section-overlay"></div>

    <!-- Ambient artistic organic glows layered between background image and cards -->
    <div class="ambient-glow top-left"></div>
    <div class="ambient-glow bottom-right"></div>

    <div class="container">
      <div class="section-header">
        <span class="section-tagline">Stories of Transformation</span>
        <h2 class="section-title">Voices of Change</h2>
        <p class="section-subtitle">Real people. Real impact. Watch how your support reshapes lives and builds resilient communities.</p>
      </div>

      <div class="gallery-strip">
        <div 
          v-for="(videoItem, index) in testimonials" 
          :key="videoItem.id" 
          class="gallery-card"
          :class="`card-tilt-${(index % 3) + 1}`"
          :style="{ '--accent-color': videoItem.accent, '--delay': `${index * 0.15}s` }"
        >
          <!-- Dynamic Light Leak Effect on Hover -->
          <div class="light-leak"></div>

          <!-- Video Wrapper with overlapping badge -->
          <div class="video-container">
            <iframe
              :src="videoItem.embedUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="testimonial-iframe"
              :title="videoItem.caption"
            ></iframe>
            
            <!-- Category Badge overlay -->
            <span class="category-badge">{{ videoItem.tag }}</span>
          </div>

          <!-- Content Footer Block -->
          <div class="card-footer">
            <div class="action-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="play-svg">
                <path d="M8 5.14v14c0 .86.94 1.39 1.66.9l10-7c.61-.43.61-1.37 0-1.8l-10-7C8.94 3.75 8 4.28 8 5.14z"/>
              </svg>
            </div>
            <div class="caption-text">
              <span class="impact-metric">{{ videoItem.metric }}</span>
              <p class="video-caption">{{ videoItem.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
});

const testimonials = ref([


   {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/vJpZifIanAg",
    tag: "Education",
    metric: "1000+ Children currently Supported from different schools",
    caption: "Hope for a brighter future.",
    accent: "linear-gradient(135deg, #38bdf8, #0284c7)" /* Bright Sky Blue */
  },
  {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/8qOpx6L-KAM",
    tag: "Empowerment",
    metric: "70+ Children Supported",
    caption: "A Story of Transformation and Hope.",
    accent: "linear-gradient(135deg, #38bdf8, #0284c7)" /* Bright Sky Blue */
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/cTeka5JBU-c",
    tag: "Climate action",
    metric: "Sustainable climate action",
    caption: "Hear the Impact on Our Community.",
    accent: "linear-gradient(135deg, #34d399, #059669)" /* Emerald Green */
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/XF94SGd9mN4",
    tag: "Skilling",
    metric: "Sustainable Livelihoods",
    caption: "Witness the Change We're Making.",
    accent: "linear-gradient(135deg, #fb7185, #e11d48)" /* Rose Crimson */
  },
]);
</script>

<style scoped>
.testimonials-section {
  --primary-brand: #38bdf8;
  --text-main: #f5f5f4; 
  --text-muted: #cbd5e1; 
  
  /* Glassmorphism Specs tuned to stand out over the rich background image */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-blur: 24px;
  --card-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);

  position: relative;
  padding: 140px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Parallax scrolling effect */
  color: var(--text-main);
  overflow: hidden;
}

/* Base deep, rich Forest Teal overlay to set an organic, hopeful mood */
.section-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 30, 26, 0.82) 0%, rgba(3, 21, 18, 0.9) 100%);
  z-index: 1;
}

/* Dark Theme Overlay: shifts to a deep midnight charcoal overlay */
.testimonials-section.dark-theme .section-overlay {
  background: linear-gradient(180deg, rgba(9, 13, 22, 0.88) 0%, rgba(5, 7, 12, 0.95) 100%);
}

/* Atmospheric colorful highlight gradients */
.ambient-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(160px);
  opacity: 0.12;
  pointer-events: none;
  z-index: 2; /* Sits above the background overlay, but behind content */
}

.ambient-glow.top-left {
  top: -15%;
  left: -10%;
  background-color: #0d9488;
}

.ambient-glow.bottom-right {
  bottom: -15%;
  right: -10%;
  background-color: #3b82f6;
}

.container {
  position: relative;
  z-index: 3; /* Sits above glows */
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 28px;
}

/* Elegant Editorial Header layout */
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 100px;
}

.section-tagline {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--primary-brand);
  margin-bottom: 16px;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 20px 0;
}

.section-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
  font-weight: 400;
  margin: 0;
}

/* Staggered Gallery Flexstrip */
.gallery-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

/* Glassmorphism Testimonial Cards */
.gallery-card {
  position: relative;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 28px;
  padding: 18px;
  flex: 1;
  min-width: 310px;
  max-width: 370px;
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  display: flex;
  flex-direction: column;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease;
  overflow: hidden;
}

/* Organic Asymmetrical hanging layout offsets */
.card-tilt-1 {
  transform: translateY(-15px) rotate(-1.5deg);
}

.card-tilt-2 {
  transform: translateY(15px) rotate(1deg);
}

.card-tilt-3 {
  transform: translateY(-5px) rotate(-1deg);
}

/* Warm sunlight leak overlay active on hover */
.light-leak {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.15), transparent 60%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease;
  z-index: 1;
}

/* Elevate & straighten out tilts on hover */
.gallery-card:hover {
  transform: translateY(-20px) rotate(0deg) scale(1.03);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 45px 90px -20px rgba(0, 0, 0, 0.65);
}

.gallery-card:hover .light-leak {
  opacity: 1;
}

/* Inner Media Container */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  height: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.2);
}

.testimonial-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Categorization Tag badging */
.category-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  z-index: 10;
}

/* Action Circle & Captions Footer */
.card-footer {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 8px 10px;
}

/* Hover-sensitive gradient play badge */
.action-circle {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-color);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.gallery-card:hover .action-circle {
  transform: scale(1.15) rotate(15deg);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
}

.play-svg {
  width: 16px;
  height: 16px;
  margin-left: 2px;
}

.caption-text {
  text-align: left;
}

.impact-metric {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-brand);
  margin-bottom: 6px;
}

.video-caption {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
}

/* Tablet & Mobile Layout Shifts */
@media (max-width: 1024px) {
  .gallery-card {
    transform: none !important; /* Flat on tablets for easy alignment */
  }
  
  .gallery-strip {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 90px 0;
    background-attachment: scroll; /* Disable parallax on mobile chips to protect frame rate */
  }

  .section-title {
    font-size: 2.3rem;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .gallery-card {
    min-width: 100%;
    padding: 14px;
  }
}
</style>