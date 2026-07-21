<template>
  <section class="how-we-work-section" :class="{ 'dark-theme': props.isDarkMode }">
    <div class="container">
      
      <div class="section-header">
        <h2>How We Work</h2>
        <p class="lead-text">
          At Flare International Foundation, we believe that sustainable development is achieved when communities are active participants in shaping their own future. Our approach is rooted in partnership, inclusion, innovation, and local ownership.
        </p>
      </div>

      <div class="timeline-wrapper">
        <div v-for="(item, index) in approachList" :key="index" class="timeline-row">
          <div class="timeline-marker">
            <span class="step-num">0{{ index + 1 }}</span>
            <div class="step-line"></div>
          </div>
          
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
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

const approachList = ref([
  {
    title: 'Community-Led Development',
    description: 'We begin by listening. Through community consultations and participatory assessments, we work with local people to identify priorities, understand challenges, and design solutions that reflect their aspirations. Communities are not just beneficiaries,they are partners in every stage of development.'
  },
  {
    title: 'Partnership and Collaboration',
    description: 'We collaborate with government institutions, schools, healthcare providers, cultural leaders, civil society organizations, development partners, and the private sector to deliver integrated solutions that strengthen community wellbeing and maximize impact.'
  },
  {
    title: 'Integrated Programming',
    description: 'Many community challenges are interconnected. For this reason, we implement programs that combine education, healthcare, child protection, climate action, economic empowerment, and community engagement to address the root causes of poverty and inequality rather than isolated symptoms.'
  },
  {
    title: 'Capacity Building',
    description: 'We invest in people by strengthening the knowledge, skills, and leadership of children, youth, women, caregivers, community volunteers, and local institutions. Strong local capacity creates stronger and more resilient communities.'
  },
  {
    title: 'Evidence-Informed Action',
    description: 'Our programs are guided by community needs assessments, research, monitoring, and continuous learning. We use evidence to improve programme quality, measure impact, and ensure accountability to the communities we serve.'
  },
  {
    title: 'Sustainable Impact',
    description: 'Our goal extends beyond implementing projects. We work to establish systems, partnerships, and local ownership that enable communities to sustain progress and continue improving their lives long after our direct involvement has ended.'
  }
])
</script>

<style scoped>
.how-we-work-section {
  padding: 90px 20px;
  background-color: #1e88e5;
  color: #f8fafc;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme {
  background-color: #050b14; /* Even deeper blue/black for dark mode */
  color: #f3f4f6;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 60px auto;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #cbd5e1;
}

/* Timeline Layout */
.timeline-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.timeline-row {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.step-num {
  font-size: 0.85rem;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.step-line {
  width: 2px;
  flex-grow: 1;
  min-height: 40px;
  background-color: white;
}

.dark-theme .step-line {
  background-color: #111827;
}

.timeline-row:last-child .step-line {
  display: none;
}

.timeline-content {
  background-color: white; /* Card blue tone */
  border: 1px solid green;
  border-radius: 12px;
  padding: 24px;
  flex-grow: 1;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.dark-theme .timeline-content {
  background-color: #0f172a;
  border-color: #1e293b;
}

.timeline-content:hover {
  border-color: #38bdf8;
}

.timeline-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1e88e5;
}

.timeline-content p {
  font-size: 16px;
  line-height: 1.6;
  color: black;
  margin: 0;
}

@media (max-width: 640px) {
  .timeline-row {
    flex-direction: column;
    gap: 12px;
  }
  .step-line {
    display: none;
  }
}
</style>