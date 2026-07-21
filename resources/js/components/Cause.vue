<template>
  <section
    class="causes-section"
    :class="{ 'dark-theme': props.isDarkMode }"
  >
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center">
        <span class="section-subtitle">What We Do</span>
        <h2 class="section-title">Our Focus Areas</h2>
        <p class="section-lead">
          We are dedicated to implementing sustainable, community-driven programs 
          that promote self-reliance, education, and health across Northern Uganda.
        </p>
      </div>

      <!-- Causes Grid -->
      <div class="causes-grid">
        <div
          class="col-item"
          v-for="(cause, index) in causes"
          :key="index"
          :ref="
            (el) => {
              if (el) cardRefs[index] = el;
            }
          "
          :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
          <div class="cause-card">
            <div class="image-wrapper">
              <img
                :src="cause.image"
                class="card-img"
                :alt="cause.title"
                loading="lazy"
              />
              <div class="hover-overlay"></div>
            </div>
            
            <div class="card-body">
              <h3 class="card-title">{{ cause.title }}</h3>
              <p class="card-text">{{ cause.description }}</p>
              <div class="card-footer-line"></div>
            </div>
          </div>
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

const causes = ref([
 
  {
    title: "Education and Training",
    image: "/assets/images/pupil.jpg",
    description:
      "Facilitate access to quality education for underprivileged children and youth, including scholarships, school supplies, and mentorship programs.",
  },
  {
    title: "Health,Nutrition and Clean Water",
    image: "/assets/images/male.jpeg",
    description:
      "Facilitate access to essential healthcare services for vulnerable communities, including medical camps, immunizations, and health education programs.",
  },
  {
    title: "Climate Action",
    image: "/assets/images/environ.jpg",
    description:
      "Promote environmental conservation through horticulture, sustainable beekeeping, and tree-planting initiatives to mitigate climate change.",
  },
  {
    title: "Economic Empowerment",
    image: "/assets/images/econ.jpg",
    description:
      "Implement income-generating projects and vocational training programs to enhance livelihoods and support small-scale self-reliance initiatives.",
  },
  {
    title: "Advocacy and Social Inclusion",
    image: "/assets/images/advoc.jpg",
    description:
      "Advocate for the rights of marginalized groups including women, children, and persons with disabilities, partnering to promote social justice.",
  },
   {
    title: "Support and Relief",
    image: "/assets/images/relief.jpg",
    description:
      "Provide basic necessities such as food, clothing, and shelter to the most vulnerable individuals, including orphans, the elderly, and persons with disabilities.",
  },
]);

const cardRefs = ref([]);
let cardObservers = [];

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  cardRefs.value.forEach((cardElement) => {
    if (!cardElement) return;
    cardElement.classList.add("cause-card-animate-hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cause-card-animate-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(cardElement);
    cardObservers.push(observer);
  });
});

onUnmounted(() => {
  cardObservers.forEach((observer) => observer.disconnect());
});
</script>

<style scoped>
.causes-section {
  /* Theming Design Tokens */
  --bg-color: #fafaf9; /* Warm stone off-white */
  --text-main: #1c1917; /* Warm charcoal black */
  --text-muted: #57534e;
  --bg-card: #ffffff;
  --text-title: #0f172a;
  --card-shadow: 0 10px 30px -10px rgba(28, 25, 23, 0.05), 
                 0 1px 3px rgba(28, 25, 23, 0.02);
  --accent-color: #059669; /* Warm Emerald */
  --accent-color-rgb: 5, 150, 105;
  --border-card: rgba(28, 25, 23, 0.04);

  position: relative;
  padding: 120px 8%;
  background-color: var(--bg-color);
  color: var(--text-main);
  transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Dark Theme Overrides */
.causes-section.dark-theme {
  --bg-color: #0c0a09; /* Deep charcoal background */
  --text-main: #f5f5f4;
  --text-muted: #a8a29e;
  --bg-card: #1c1917; /* Soft slate-dark card */
  --text-title: #fafaf9;
  --card-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  --accent-color: #34d399; /* Mint emerald */
  --accent-color-rgb: 52, 211, 153;
  --border-card: rgba(255, 255, 255, 0.04);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Section Heading styling */
.section-header {
  max-width: 650px;
  margin: 0 auto 70px auto;
  text-align: center;
}

.section-subtitle {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 14px;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--text-title);
  margin-bottom: 20px;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.section-lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Fluid CSS Grid */
.causes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* Card Wrapper Styling */
.cause-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.5s ease;
}

.cause-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(var(--accent-color-rgb), 0.15);
  border-color: rgba(var(--accent-color-rgb), 0.2);
  cursor: pointer;
}

/* Card Image Controls */
.image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.cause-card:hover .card-img {
  transform: scale(1.06);
}

.hover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.4));
  opacity: 0.8;
}

/* Card Body Content */
.card-body {
  padding: 30px 28px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-title);
  margin-bottom: 14px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.cause-card:hover .card-title {
  color: var(--accent-color);
}

.card-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  flex-grow: 1;
}

/* Premium bottom border interactive trace line */
.card-footer-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.cause-card:hover .card-footer-line {
  transform: scaleX(1);
}

/* Scroll Animation Transitions */
.cause-card-animate-hidden {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(40px);
}

.cause-card-animate-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1s cubic-bezier(0.16, 1, 0.3, 1),
              filter 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Responsive Breakpoints */
@media (max-width: 1100px) {
  .causes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 992px) {
  .causes-section {
    padding: 100px 6%;
  }

  .section-title {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .causes-section {
    padding: 80px 4%;
  }

  .causes-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .card-body {
    padding: 24px;
  }
}
</style>