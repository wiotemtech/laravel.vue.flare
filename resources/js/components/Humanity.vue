<template>
  <section
    class="humanity-section"
    :class="{ 'dark-theme': props.isDarkMode }"
  >
    <div class="humanity-header">
      <span class="section-tag">Humanitarian Action</span>
      <h2 class="section-title">Our Humanity in Action</h2>
    </div>

    <div class="cards-container">
      <div
        v-for="(card, index) in cardsData"
        :key="index"
        class="humanity-card-item humanity-card-animate-hidden"
        :ref="(el) => { if (el) cardRefs[index] = el; }"
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <!-- Card Background & Media -->
        <div class="card-media-wrapper">
          <div
            class="card-image-layer"
            :style="{ backgroundImage: `url(${card.imageUrl})` }"
          ></div>
          <div class="card-image-overlay"></div>
        </div>

        <!-- Card Content Layer (Always visible, highly readable) -->
        <div class="card-text-content">
          <span class="card-tag">{{ card.footerText }}</span>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.mainText }}</p>
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
});

const cardsData = ref([
  {
    title: "We Fight Together",
    mainText: "United in spirit, we stand resilient against challenges, proving the strength of collective action.",
    imageUrl: "/assets/images/won.jpg",
    footerText: "Resilience & Unity",
  },
  {
    title: "We Care About Others",
    mainText: "With compassion at our core, we extend our hands to those in need, fostering a world of empathy and support.",
    imageUrl: "/assets/images/pupil.jpg",
    footerText: "Community Support",
  },
]);

const cardRefs = ref([]);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("humanity-card-animate-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px", threshold: 0.1 });

  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.humanity-section {
  --bg-color: #fbfbfd;
  --text-primary: #1d1d1f;
  --text-secondary: #515154;
  --accent-color: #2563eb;
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.05);
  --card-shadow-hover: rgba(0, 0, 0, 0.12);

  background-color: var(--bg-color);
  color: var(--text-primary);
  padding: 120px 8%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease;
  text-align: center;
}

.humanity-section.dark-theme {
  --bg-color: #0b0b0b;
  --text-primary: #f5f5f7;
  --text-secondary: #86868b;
  --accent-color: #3b82f6;
  --card-bg: #161617;
  --card-shadow: rgba(0, 0, 0, 0.2);
  --card-shadow-hover: rgba(0, 0, 0, 0.4);
}

/* Header Elements */
.humanity-header {
  margin-bottom: 60px;
}

.section-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  display: inline-block;
  margin-bottom: 12px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0;
}

/* Cards Layout Grid */
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1140px;
  margin: 0 auto;
}

/* Redesigned Card Item */
.humanity-card-item {
  position: relative;
  background-color: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 480px;
  text-align: left;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.humanity-card-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px var(--card-shadow-hover);
}

/* Image Layer Container */
.card-media-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.card-image-layer {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.humanity-card-item:hover .card-image-layer {
  transform: scale(1.05);
}

/* Dark subtle vignette to always keep content readable */
.card-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
  transition: opacity 0.5s ease;
}

/* Clean, modern typography layered directly over media */
.card-text-content {
  position: relative;
  z-index: 2;
  padding: 40px;
  color: #ffffff;
}

.card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-color);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.card-description {
  font-size: 0.98rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}

/* Call To Action Area */
.action-wrapper {
  margin-top: 60px;
}

.donate-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background-color: var(--accent-color);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.donate-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.25);
}

.arrow-icon {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.donate-button:hover .arrow-icon {
  transform: translateX(4px);
}

/* Intersection Scroll Animations */
.humanity-card-animate-hidden {
  opacity: 0;
  transform: translateY(40px);
}

.humanity-card-animate-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .humanity-section {
    padding: 100px 6%;
  }

  .section-title {
    font-size: 2.15rem;
  }

  .cards-container {
    gap: 30px;
  }

  .humanity-card-item {
    min-height: 420px;
  }

  .card-text-content {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .humanity-section {
    padding: 80px 5%;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .humanity-card-item {
    min-height: 380px;
  }
}
</style>