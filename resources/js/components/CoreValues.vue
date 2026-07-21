<template>
  <section class="values-section" :class="{ 'dark-theme': props.isDarkMode }">
    <div class="values-container">
      
      <div class="values-header">
        <h2>Our Core Values</h2>
        <p>
          Our values define who we are and guide every decision we make. They shape how we engage with communities, build partnerships, and deliver sustainable impact.
        </p>
      </div>

      <div class="values-grid">
        <div v-for="(value, index) in coreValuesList" :key="index" class="value-card">
          <div class="value-number">0{{ index + 1 }}</div>
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const coreValuesList = ref([
  {
    title: 'Compassion',
    description: 'We believe every individual deserves dignity, respect, and the opportunity to live a fulfilling life. We serve communities with empathy, kindness, and a genuine commitment to improving lives.'
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do. We remain accountable to the communities we serve, our partners, and our supporters.'
  },
  {
    title: 'Community Empowerment',
    description: 'We believe lasting change happens when communities are equipped with the knowledge, skills, and opportunities to lead their own development. We work alongside communities to strengthen local leadership and ownership.'
  },
  {
    title: 'Inclusion and Equity',
    description: 'We are committed to creating opportunities for everyone, regardless of age, gender, disability, ethnicity, or social background. We champion equality and promote the inclusion of marginalized and vulnerable populations.'
  },
  {
    title: 'Collaboration',
    description: 'Sustainable development is achieved through strong partnerships. We work hand in hand with communities, government institutions, civil society organizations, development partners, and the private sector to maximize collective impact.'
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity, learning, and evidence-based solutions that respond to emerging community needs and improve the effectiveness of our programs.'
  },
  {
    title: 'Sustainability',
    description: 'Our interventions are designed to create lasting change by strengthening local capacity, promoting resilience, and ensuring communities continue to thrive long after project implementation.'
  },
  {
    title: 'Excellence',
    description: 'We strive for quality in every program, partnership, and service we deliver, continuously improving our work to achieve meaningful and measurable impact.'
  }
])
</script>

<style scoped>
.values-section {
  padding: 80px 20px;
  background-color: #f9fafb;
  color: #1f2937;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme {
  background-color: #111827;
  color: #f3f4f6;
}

.values-container {
  max-width: 1200px;
  margin: 0 auto;
}

.values-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px auto;
}

.values-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.values-header p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: inherit;
  opacity: 0.85;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.value-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.dark-theme .value-card {
  background-color: #1f2937;
  border-color: #374151;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.value-number {
  font-size: 0.85rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 12px;
}

.dark-theme .value-number {
  color: #60a5fa;
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.value-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
  margin: 0;
}
</style>