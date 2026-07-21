<template>
  <section class="why-we-do-section" :class="{ 'dark-theme': props.isDarkMode }">
    <div class="container">
      
      <div class="section-header">
        <h2>Why We Do What We Do</h2>
        <div class="header-line"></div>
      </div>

      <div class="content-wrapper">
        <div class="narrative-card">
          <p class="lead-paragraph">
            Across many communities in Uganda, children remain out of school due to poverty, families struggle to access quality healthcare, young people face unemployment, women and girls continue to experience inequality and gender-based violence, and communities are increasingly affected by climate change and environmental degradation. These challenges are interconnected, limiting opportunities for individuals and slowing sustainable development.
          </p>

          <p>
            At Flare International Foundation, we believe that every person deserves the opportunity to live with dignity, realize their potential, and contribute meaningfully to their community. We also believe that the most lasting solutions are created when communities are empowered with the knowledge, resources, and opportunities to lead their own development.
          </p>

          <p>
            This belief drives our work across education, healthcare, economic empowerment, climate action, child protection, peacebuilding, and community engagement. Rather than delivering short-term assistance alone, we invest in long-term solutions that strengthen resilience, promote inclusion, and create opportunities for individuals and families to thrive.
          </p>

          <div class="highlight-box">
            <p>
              Every child supported to remain in school, every young person equipped with vocational skills, every family empowered through better healthcare, every tree planted, and every community brought together through dialogue represents another step toward a more inclusive, resilient, and prosperous future.
            </p>
          </div>

          <p class="closing-paragraph">
            Together with our communities, partners, and supporters, we are building a future where no one is left behind and every individual has the opportunity to reach their full potential.
          </p>
        </div>
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
.why-we-do-section {
  padding: 90px 20px;
  background-color: #f8fafc;
  color: #1e293b;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme {
  background-color: #0b0f19;
  color: #f1f5f9;
}

.container {
  max-width: 850px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.header-line {
  width: 50px;
  height: 3px;
  color:red;
  margin: 0 auto;
  border-radius: 2px;
}

.dark-theme .header-line {
  background-color: #38bdf8;
}

.narrative-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.dark-theme .narrative-card {
  background-color: #111827;
  border-color: #1f2937;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.narrative-card p {
  font-size: 1.02rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 24px;
}

.dark-theme .narrative-card p {
  color: #94a3b8;
}

.lead-paragraph {
  font-size: 1.12rem;
  font-weight: 500;
  color: #0f172a !important;
}

.dark-theme .lead-paragraph {
  color: #f8fafc !important;
}

.highlight-box {
  background: rgba(37, 99, 235, 0.04);
  border-left: 4px solid #2563eb;
  padding: 20px 24px;
  border-radius: 0 12px 12px 0;
  margin: 32px 0;
}

.dark-theme .highlight-box {
  background: rgba(56, 189, 248, 0.06);
  border-left-color: #38bdf8;
}

.highlight-box p {
  margin: 0;
  font-style: italic;
  color: #1e293b !important;
}

.dark-theme .highlight-box p {
  color: #e2e8f0 !important;
}

.closing-paragraph {
  margin-bottom: 0 !important;
  font-weight: 500;
}

@media (max-width: 768px) {
  .narrative-card {
    padding: 24px;
  }
  .section-header h2 {
    font-size: 1.8rem;
  }
}
</style>