<template>
  <section
    class="partner-with-us-section"
    :class="{ 'dark-theme': props.isDarkMode }"
  >
    <div class="partner-container">
      
      <!-- Left Side: Editorial Writing Column -->
      <div class="partner-content-col">
        <span class="partner-tag" ref="tagRef">Collaboration</span>
        
        <h2 class="section-title" ref="sectionTitleRef">
          Partner With Us
        </h2>
        
        <p class="section-description" ref="sectionDescriptionRef">
          Join hands with us to create a lasting positive impact in
          communities across Northern Uganda and beyond. Your partnership
          empowers us to expand our reach, implement vital projects, and
          foster sustainable change. Whether you're an individual, a
          corporation, or an organization, together, we can build a
          brighter future.
        </p>
        
        <div class="button-group" ref="buttonsContainerRef">
          <a href="#contact" class="btn btn-primary">
            <span>Become a Partner</span>
          </a>
          <a href="#learn-more" class="btn btn-outline-secondary">
            <span>Donate to us</span>
          </a>
        </div>
      </div>

      <!-- Right Side: Beautiful Interactive SVG Graphic Column -->
      <div class="partner-graphic-col" ref="graphicRef">
        <svg 
          class="partner-svg" 
          viewBox="0 0 500 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- Pattern Mask to display a real, high-quality community photo inside SVG curves -->
           <pattern 
  id="partnerPhotoPattern" 
  x="0" 
  y="0" 
  width="1" 
  height="1" 
  patternUnits="objectBoundingBox"
>
  <image
    href="/public/assets/images/won.jpg"
    x="-50"
    y="0"
    width="500"
    height="400"
    preserveAspectRatio="xMidYMid slice"
  />
</pattern>
            <!-- Dynamic gradients for clean visual depth -->
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--accent-gradient-start)" />
              <stop offset="100%" stop-color="var(--accent-gradient-end)" />
            </linearGradient>
            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Decorative Abstract Background Blob with Soft Glow -->
          <path 
            class="svg-blob-bg" 
            d="M400,280 C440,360 380,440 280,430 C180,420 120,350 140,250 C160,150 250,110 330,150 C410,190 360,200 400,280 Z" 
            fill="url(#accentGrad)" 
            opacity="0.12"
            filter="url(#svgGlow)"
          />

          <!-- Primary Geometric Pattern Frame holding the Real Photo -->
          <rect 
            class="svg-image-frame"
            x="50" 
            y="50" 
            width="340" 
            height="340" 
            rx="170" 
            fill="url(#partnerPhotoPattern)" 
          />

          <!-- Overlay Styling Ring -->
          <rect 
            class="svg-image-ring"
            x="47" 
            y="47" 
            width="346" 
            height="346" 
            rx="173" 
            stroke="url(#accentGrad)" 
            stroke-width="3" 
            stroke-dasharray="8 8"
          />

          <!-- Decorative Floating Solid Shape (Intersecting Element) -->
          <circle 
            class="svg-floating-accent" 
            cx="380" 
            cy="360" 
            r="50" 
            fill="url(#accentGrad)" 
            opacity="0.9"
          />
          
          <!-- Modern graphic overlay dot pattern -->
          <g class="svg-dot-pattern" fill="currentColor" opacity="0.25">
            <circle cx="80" cy="420" r="3" />
            <circle cx="100" cy="420" r="3" />
            <circle cx="120" cy="420" r="3" />
            <circle cx="80" cy="440" r="3" />
            <circle cx="100" cy="440" r="3" />
            <circle cx="120" cy="440" r="3" />
            <circle cx="80" cy="460" r="3" />
            <circle cx="100" cy="460" r="3" />
            <circle cx="120" cy="460" r="3" />
          </g>
        </svg>
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
});

const tagRef = ref(null);
const sectionTitleRef = ref(null);
const sectionDescriptionRef = ref(null);
const buttonsContainerRef = ref(null);
const graphicRef = ref(null);

let observers = [];

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observeElement = (elementRef, animationClass) => {
    const element = elementRef.value;
    if (element) {
      element.classList.add("partner-animate-hidden");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      observer.observe(element);
      observers.push(observer);
    }
  };

  observeElement(tagRef, "partner-element-visible-0");
  observeElement(sectionTitleRef, "partner-element-visible-1");
  observeElement(sectionDescriptionRef, "partner-element-visible-2");
  observeElement(buttonsContainerRef, "partner-element-visible-3");
  observeElement(graphicRef, "partner-element-visible-right");
});

onUnmounted(() => {
  observers.forEach((observer) => observer.disconnect());
});
</script>

<style scoped>
.partner-with-us-section {
  /* Editorial Style Variables */
  --bg-color: #ffffff;
  --text-primary: #1d1d1f;
  --text-secondary: #515154;
  --accent-color: #2563eb;
  --accent-gradient-start: #2563eb;
  --accent-gradient-end: #3b82f6;
  --btn-secondary-border: #2563eb;
  --btn-secondary-text: #2563eb;
  --btn-secondary-hover-bg: #2563eb;

  background-color: var(--bg-color);
  color: var(--text-primary);
  padding: 140px 8%;
  overflow: hidden;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.partner-with-us-section.dark-theme {
  --bg-color: #0b0b0b;
  --text-primary: #f5f5f7;
  --text-secondary: #86868b;
  --accent-color: #3b82f6;
  --accent-gradient-start: #3b82f6;
  --accent-gradient-end: #60a5fa;
  --btn-secondary-border: #3b82f6;
  --btn-secondary-text: #82caff;
  --btn-secondary-hover-bg: #3b82f6;
}

/* Two-Column Responsive Container */
.partner-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Left Column Styling */
.partner-content-col {
  text-align: left;
}

.partner-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  display: inline-block;
  margin-bottom: 16px;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 24px 0;
}

.section-description {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

/* Button Group Styling */
.button-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 34px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: var(--accent-color);
  color: #ffffff;
  border: 1px solid var(--accent-color);
}

.btn-primary:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}

.partner-with-us-section.dark-theme .btn-primary {
  color: #0b0b0b;
}

.btn-outline-secondary {
  background-color: transparent;
  color: var(--btn-secondary-text);
  border: 1px solid var(--btn-secondary-border);
}

.btn-outline-secondary:hover {
  background-color: var(--btn-secondary-hover-bg);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
}

.partner-with-us-section.dark-theme .btn-outline-secondary:hover {
  color: #0b0b0b;
}

/* Right Column Graphic & Interactive Elements */
.partner-graphic-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-svg {
  width: 100%;
  max-width: 450px;
  height: auto;
  overflow: visible;
}

/* Interactive hover scales on the SVG layers */
.svg-image-frame, .svg-image-ring {
  transform-origin: 220px 220px;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.partner-svg:hover .svg-image-frame {
  transform: scale(1.03);
}

.partner-svg:hover .svg-image-ring {
  transform: scale(1.05) rotate(15deg);
}

.svg-floating-accent {
  transform-origin: 380px 360px;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  animation: floatAccent 6s ease-in-out infinite alternate;
}

.partner-svg:hover .svg-floating-accent {
  transform: scale(1.1) translate(-5px, -5px);
}

.svg-dot-pattern {
  color: var(--accent-color);
}

/* Soft float movement for the geometric SVG accents */
@keyframes floatAccent {
  0% {
    transform: translateY(0px) scale(1);
  }
  100% {
    transform: translateY(-10px) scale(1.03);
  }
}

/* Fine-Tuned Scroll Animations */
.partner-animate-hidden {
  opacity: 0;
  transform: translateY(30px);
}

.partner-element-visible-0 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.partner-element-visible-1 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}

.partner-element-visible-2 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.partner-element-visible-3 {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
}

.partner-element-visible-right {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
}

/* Responsiveness adjustments */
@media (max-width: 1024px) {
  .partner-with-us-section {
    padding: 100px 6%;
  }

  .partner-container {
    gap: 50px;
  }

  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 900px) {
  .partner-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .partner-content-col {
    text-align: center;
  }

  .button-group {
    justify-content: center;
  }

  .partner-svg {
    max-width: 380px;
  }
}

@media (max-width: 480px) {
  .partner-with-us-section {
    padding: 80px 4%;
  }

  .section-title {
    font-size: 2rem;
  }

  .button-group {
    flex-direction: column;
    gap: 12px;
  }

  .btn {
    width: 100%;
  }
}
</style>