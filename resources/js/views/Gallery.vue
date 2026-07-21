<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// State
const isDarkMode = ref(false);
const activeImage = ref(null); // Holds image object { src, alt } for active lightbox
const showPopup = ref(false);
const shownOnce = ref(false);

let hideTimeout = null;
let reappearTimeout = null;

// Gallery Images Data
const images = ref([
  { src: "/assets/images/wash1.jpg", alt: "Community WASH Initiative - Water & Sanitation Facility" },
  { src: "/assets/images/cap2.jpg", alt: "Carpentry and Vocational Training - Hands-on Session" },
  { src: "/assets/images/cap1.jpg", alt: "Carpentry and Vocational Training - Workshop Practice" },
  { src: "/assets/images/wash5.jpg", alt: "Community WASH Initiative - Public Health Sensitization" },
  { src: "/assets/images/tree1.jpg", alt: "Afforestation Campaign - Nursery Setups" },
  { src: "/assets/images/tree3.jpg", alt: "Afforestation Campaign - Community Planting Day" },
  { src: "/assets/images/tree2.jpg", alt: "Afforestation Campaign - Seedling Distribution" },
  { src: "/assets/images/wash2.jpg", alt: "Community WASH Initiative - Water Point Inspection" },
  { src: "/assets/images/wash3.jpg", alt: "Community WASH Initiative - Hygiene Training Group" },
  { src: "/assets/images/cap3.jpg", alt: "Carpentry and Vocational Training - Graduating Cohort" },
  { src: "/assets/images/cap4.jpg", alt: "Carpentry and Vocational Training - Project Assembly" },
  { src: "/assets/images/wash4.jpg", alt: "Community WASH Initiative - Clean Water Access Celebration" },
]);

// Lightbox Logic
const openLightbox = (image) => {
  activeImage.value = image;
  document.body.style.overflow = "hidden"; // Prevent background scroll
};

const closeLightbox = () => {
  activeImage.value = null;
  document.body.style.overflow = "";
};

// Handle Escape Key for Lightbox
const handleKeyDown = (event) => {
  if (event.key === "Escape" && activeImage.value) {
    closeLightbox();
  }
};

// Twitter Slide-In Logic
const showTweet = () => {
  if (!shownOnce.value) {
    showPopup.value = true;
    shownOnce.value = true;

    hideTimeout = setTimeout(() => {
      showPopup.value = false;

      reappearTimeout = setTimeout(() => {
        showPopup.value = true;
      }, 10000);
    }, 10000);
  }
};

const dismissPopup = () => {
  showPopup.value = false;
  clearTimeout(hideTimeout);
  clearTimeout(reappearTimeout);
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Lifecycles
onMounted(() => {
  setTimeout(showTweet, 5000);
  window.addEventListener("keydown", handleKeyDown);

  // Initialize Twitter Widget Script
  if (!window.twttr) {
    const twitterScript = document.createElement("script");
    twitterScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
    twitterScript.setAttribute("async", "");
    twitterScript.setAttribute("charset", "utf-8");
    document.head.appendChild(twitterScript);
  } else if (window.twttr?.widgets?.load) {
    window.twttr.widgets.load();
  }
});

onUnmounted(() => {
  clearTimeout(hideTimeout);
  clearTimeout(reappearTimeout);
  window.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="gallery-wrapper" :class="{ 'dark-theme': isDarkMode }">
    
    <!-- THEME SWITCHER -->
  

   

    <!-- Centered Hero Section with Darkened Image Background -->
    <section class="hero-section">
      <div class="hero-bg-media"></div>
      <div class="grid-pattern"></div>
      <div class="glow-overlay"></div>

      <div class="hero-content reveal-on-scroll reveal-fade">
        <span class="badge">our gallery</span>
        <h1>Let's build something <span class="gradient-text">meaningful</span> together</h1>
                <p>Connecting Environments, Health,Education, and Community Engagement.</p>
      
      </div>
    </section>

    <!-- MAIN GALLERY GRID LAYOUT -->
    <section class="gallery-content-section" aria-label="Photo Gallery Grid">
      <div class="container">
        <div class="gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="gallery-card fade-in"
            :style="{ 'animation-delay': `${index * 60}ms` }"
            @click="openLightbox(image)"
            tabindex="0"
            @keydown.enter="openLightbox(image)"
            role="button"
            :aria-label="`Open expanded view of ${image.alt}`"
          >
            <div class="image-box">
              <img :src="image.src" :alt="image.alt" loading="lazy" />
              <div class="card-overlay">
                <div class="view-badge">
                  <i class="fas fa-expand-alt" aria-hidden="true"></i>
                  <span>Expand View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BUILT-IN LIGHTBOX MODAL -->
    <Transition name="fade">
      <div 
        v-if="activeImage" 
        class="lightbox-overlay" 
        @click.self="closeLightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <button 
          class="lightbox-close" 
          @click="closeLightbox" 
          aria-label="Close lightbox"
        >
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
        <div class="lightbox-stage">
          <img :src="activeImage.src" :alt="activeImage.alt" class="lightbox-img" />
          <p class="lightbox-caption">{{ activeImage.alt }}</p>
        </div>
      </div>
    </Transition>

    <!-- SLIDE-IN TWITTER/X POPUP -->
   

  </div>
</template>

<style scoped>



.hero-section {
  position: relative;
  height: 45vh;
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
  background-image: url('/assets/images/fight.jpg');
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
/* CSS DESIGN SYSTEM VARIABLES */
.gallery-wrapper {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --brand-accent: #004ad7;
  
  /* Replace this path with your actual contact page hero background image file */
  --hero-bg-img: url('/assets/images/fight.jpg');
  --hero-fallback-bg: #0f172a;
  --hero-text: #ffffff;
  --hero-muted: #cbd5e1;
  --shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 15px 45px rgba(15, 23, 42, 0.15);
  --transition-smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  transition: background-color var(--transition-smooth);
  position: relative;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.gallery-wrapper.dark-theme {
  --bg-primary: #0b0f14;
  --bg-secondary: #131921;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --brand-accent: #3b82f6;
  --hero-text: #f8fafc;
  --hero-muted: #94a3b8;
}


  

.gallery-wrapper.dark-theme .theme-toggle {
  background: rgba(13, 19, 33, 0.85);
  border-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
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


.gallery-wrapper.dark-theme .theme-toggle:hover {
  background: #ffffff;
  color: #0b0f14;
}



/* Linear/Radial color-balancing mask matching the high-contrast contact template */
.hero-overlay-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg, 
    rgba(15, 23, 42, 0.85) 0%, 
    rgba(11, 15, 20, 0.92) 100%
  );
  z-index: 2;
  pointer-events: none;
}





.breadcrumb-separator {
  font-size: 8px;
  opacity: 0.6;
}

.current-page {
  color: var(--brand-accent);
}



/* PORTFOLIO GRID */
.gallery-content-section { 
  padding: 60px 0 100px 0; 
}

.container { 
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 0 24px; 
}

.gallery-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 10px; 
}

.gallery-card { 
  position: relative; 
  overflow: hidden; 
  aspect-ratio: 4 / 3; 
  cursor: pointer; 
  background-color: var(--bg-secondary); 
  
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth); 
}

.image-box { 
  width: 100%; 
  height: 100%; 
  position: relative; 
}

.image-box img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  transition: transform 0.6s var(--transition-smooth); 
}

.card-overlay { 
  position: absolute; 
  inset: 0; 
  background: rgba(15, 23, 42, 0.7); 
  opacity: 0; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: opacity 0.3s ease; 
}

.view-badge { 
  background: #ffffff; 
  color: #0b0f14;
  padding: 10px 18px; 
  border-radius: 30px; 
  font-size: 12px; 
  font-weight: 800; 
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.gallery-card:hover, .gallery-card:focus-visible { 
  transform: translateY(-6px); 
  box-shadow: var(--shadow-lg);
  outline: none;
}

.gallery-card:hover img, .gallery-card:focus-visible img { 
  transform: scale(1.05); 
}

.gallery-card:hover .card-overlay, .gallery-card:focus-visible .card-overlay { 
  opacity: 1; 
}

/* LIGHTBOX MODAL */
.lightbox-overlay { 
  position: fixed; 
  inset: 0; 
  background: rgba(11, 15, 20, 0.95); 
  backdrop-filter: blur(12px); 
  z-index: 2000; 
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  padding: 40px; 
}

.lightbox-close { 
  position: absolute; 
  top: 25px; 
  right: 25px; 
  background: rgba(255, 255, 255, 0.1); 
  color: #ffffff; 
  border: none; 
  width: 45px; 
  height: 45px; 
  border-radius: 50%; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox-stage { 
  max-width: 900px; 
  width: 100%;
  text-align: center;
}

.lightbox-img { 
  max-width: 100%; 
  max-height: 75vh; 
  object-fit: contain; 
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.lightbox-caption {
  color: #f8fafc;
  font-size: 14px;
  margin-top: 15px;
  letter-spacing: 0.5px;
}

/* SOCIAL POPUP SLIDE-IN */
.tweet-container { 
  position: fixed; 
  bottom: 30px; 
  right: -380px; 
  width: 330px; 
  background-color: var(--bg-secondary); 
  padding: 18px; 
  border-radius: 16px; 
  z-index: 1000; 
  box-shadow: var(--shadow-lg); 
  border: 1px solid rgba(0,0,0,0.05);
  transition: right 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
}

.gallery-wrapper.dark-theme .tweet-container {
  border-color: rgba(255,255,255,0.08);
}

.tweet-container.show { right: 30px; }

.close-btn { 
  position: absolute; 
  top: 12px; 
  right: 12px; 
  border: none; 
  background: rgba(0,0,0,0.04); 
  color: var(--text-secondary);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-wrapper.dark-theme .close-btn {
  background: rgba(255,255,255,0.08);
}

.follow-prompt {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.follow-prompt i {
  color: #1da1f2;
}

/* ANIMATIONS */
.fade-in { 
  animation: slideUpReveal 0.8s var(--transition-smooth) forwards; 
  opacity: 0; 
}

@keyframes slideUpReveal { 
  from { opacity: 0; transform: translateY(24px); } 
  to { opacity: 1; transform: translateY(0); } 
}

@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

/* TRANSITIONS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .contact-style-hero { padding: 120px 0 60px 0; min-height: 320px; }
  .hero-title { font-size: 36px; }
  .tweet-container { width: calc(100% - 40px); right: -100%; }
  .tweet-container.show { right: 20px; }
  .lightbox-overlay { padding: 20px; }
}
</style>