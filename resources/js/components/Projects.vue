<template>
  <!-- Completed Initiatives & Portfolio Ecosystem -->
  <section class="projects-section" :class="{ 'dark-theme': props.isDarkMode }">
    <!-- Ambient Backdrop Lighting Elements -->
    <div class="project-glow glow-left"></div>
    <div class="project-glow glow-right"></div>

    <div class="projects-container">
      
      <!-- Layout Structural Header -->
      <header class="projects-header">
        <span class="section-tag">Our Impact</span>
        <h2 class="section-title">TRANSFORMATIONAL COMPLETED PROJECTS</h2>
        <p class="section-subtitle">
          A tactical look at our finished operational deployments, community rescue frameworks, 
          and scalable infrastructure initiatives across vulnerable areas.
        </p>
      </header>

      <!-- Seven-Card Mixed Matrix Layout -->
      <div class="projects-display-grid">
        
        <!-- Feature Area: Project 1 (Dominant Left Anchor) -->
        <div class="project-card feature-card">
          <div class="card-image-wrapper">
            <img :src="projectsList[0].imageUrl" :alt="projectsList[0].title" class="project-img" />
            <div class="card-overlay-shroud"></div>
            <span class="project-badge class-premium">Featured Deployment</span>
          </div>
          <div class="card-meta-content">
            <span class="project-category">{{ projectsList[0].category }}</span>
            <h3 class="project-card-title">{{ projectsList[0].title }}</h3>
            <p class="project-summary">{{ projectsList[0].description }}</p>
            <div class="project-metric-pill">
              <span class="metric-label">Impact Metric:</span>
              <span class="metric-value">{{ projectsList[0].metric }}</span>
            </div>
          </div>
        </div>

        <!-- Matrix Area: Projects 2 through 7 (Right Sub-Grid Block) -->
        <div class="sub-projects-matrix">
          <div 
            v-for="(project, index) in projectsList.slice(1)" 
            :key="'sub-proj-' + index" 
            class="project-card mini-glass-card"
          >
            <div class="mini-card-image">
              <img :src="project.imageUrl" :alt="project.title" class="project-img" />
              <div class="card-overlay-shroud"></div>
              <span class="project-category-tag">{{ project.category }}</span>
            </div>
            <div class="mini-card-body">
              <h4 class="mini-project-title">{{ project.title }}</h4>
              <p class="mini-project-desc">{{ project.description }}</p>
              <div class="mini-card-footer">
                <span class="mini-metric">{{ project.metric }}</span>
                <div class="status-indicator">
                  <span class="status-dot"></span> Verified
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

// Precisely 7 Completed Projects Data Array
const projectsList = ref([
  {
    title: 'Lira City Street Children Resettlement Phase I',
    category: 'Child Rescue & Integration',
    description: 'A comprehensive, multi-layered urban rescue deployment that successfully transitioned street-connected children into secured family structures, mental wellness programs, and basic education pipelines.',
    metric: '140+ Children Integrated',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Women Empowerment Hub Infrastructure',
    category: 'Socio-Economic Development',
    description: 'Construction and digital equipping of a centralized safe workspace dedicated to technical skills acquisition.',
    metric: '450+ Graduates Monitored',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Regional GBV Emergency Response Network',
    category: 'Human Rights & Safety',
    description: 'Deployment of structured anonymous rapid reporting infrastructure and legal aid clinics.',
    metric: '100% Case Referrals Handled',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Grassroots Hygiene & Sanitation Initiative',
    category: 'Public Health Infrastructure',
    description: 'Installation of high-capacity structural water purifiers and community clean-water facilities.',
    metric: '12 Villages Secured',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Vulnerable Youth Digital Skills Launch',
    category: 'ICT & Computer Literacy',
    description: 'Intense basic computing literacy bootcamps designed to generate micro-work streams for marginalized youths.',
    metric: '85 Certified Technicians',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Maternal Health Support Block Supply',
    category: 'Healthcare Access',
    description: 'Structural rehabilitation and distribution of essential delivery kits to community clinical stations.',
    metric: '2,300 Mothers Served',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Cross-Border Civil Action Colloquium',
    category: 'Institutional Synergy',
    description: 'Strategic alignments engineered to map and resolve protection tracking deficiencies in local regional policies.',
    metric: '32 Monitoring Units Aligned',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80'
  }
])
</script>

<style scoped>
/* Token Architecture System */
.projects-section {
  --bg-primary: #ffffff;
  --bg-surface: #f8f9fa;
  --bg-card: rgba(255, 255, 255, 0.7);
  --text-main: #1d1d1f;
  --text-muted: #6e6e73;
  --accent-blue: #2563eb;
  --accent-purple: #a855f7;
  --border-color: rgba(0, 0, 0, 0.06);
  --card-shadow: rgba(0, 0, 0, 0.04);
  --glass-blur: blur(14px);

  position: relative;
  background-color: var(--bg-primary);
  color: var(--text-main);
  padding: 120px 5%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.dark-theme {
  --bg-primary: #09090b;
  --bg-surface: #121214;
  --bg-card: rgba(22, 22, 26, 0.65);
  --text-main: #f5f5f7;
  --text-muted: #86868b;
  --accent-blue: #3b82f6;
  --accent-purple: #c084fc;
  --border-color: rgba(255, 255, 255, 0.07);
  --card-shadow: rgba(0, 0, 0, 0.4);
}

/* Ambient Visual Backdrop */
.project-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}
.glow-left { top: 20%; left: -15%; background: var(--accent-blue); }
.glow-right { bottom: 10%; right: -15%; background: var(--accent-purple); }

.projects-container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Typography Header */
.projects-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px auto;
}

.section-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 12px;
  display: inline-block;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  color: var(--text-main);
}

.section-subtitle {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* --- ASYMMETRIC GRID PLATFORM --- */
.projects-display-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 32px;
  align-items: start;
}

/* Base Card Object Definition */
.project-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px var(--card-shadow);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.45s ease, box-shadow 0.45s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-blue);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Image Scaling Engine */
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.card-overlay-shroud {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7));
  pointer-events: none;
}

/* Badges & Labels */
.project-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Left Dominant Card Styling Details */
.feature-card .card-meta-content {
  padding: 40px;
}

.project-category {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-card-title {
  font-size: 1.65rem;
  font-weight: 800;
  margin: 12px 0 16px 0;
  line-height: 1.3;
  color: var(--text-main);
}

.project-summary {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 28px;
}

.project-metric-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.metric-label { font-size: 0.85rem; color: var(--text-muted); }
.metric-value { font-size: 0.9rem; font-weight: 700; color: var(--accent-purple); }

/* --- RIGHT SIDE SUB-GRID MATRIX (6 CARDS) --- */
.sub-projects-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.mini-glass-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
}

.mini-card-image {
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
}

.project-category-tag {
  position: absolute;
  bottom: 12px;
  left: 16px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 10px;
  border-radius: 6px;
  backdrop-filter: blur(4px);
  z-index: 2;
}

.mini-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.mini-project-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
  color: var(--text-main);
}

.mini-project-desc {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mini-card-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
}

.mini-metric {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-blue);
}

.status-indicator {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: #10b981;
  border-radius: 50%;
}

/* --- ADAPTIVE SYSTEM VIEWPORTS --- */
@media (max-width: 1100px) {
  .projects-display-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .sub-projects-matrix {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .section-title {
    font-size: 1.85rem;
  }
  .feature-card .card-meta-content {
    padding: 24px;
  }
}
</style>