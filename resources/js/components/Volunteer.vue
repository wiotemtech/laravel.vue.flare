<template>
  <!-- Completed Initiatives & Portfolio Ecosystem -->
  <section class="projects-section" :class="{ 'dark-theme': props.isDarkMode }">
    <!-- Ambient Backdrop Lighting Elements -->
    <div class="project-glow glow-left"></div>
    <div class="project-glow glow-right"></div>

    <div class="projects-container">
      
      <!-- Layout Structural Header -->
      <header class="projects-header">
        <span class="section-tag">Our Programs</span>
        <h2 class="section-title">Completed and ongoing programs</h2>
        <p class="section-subtitle">
          A tactical look at our finished operational deployments, community rescue frameworks, 
          and scalable infrastructure initiatives across vulnerable areas.
        </p>
      </header>

      <!-- Seven-Card Mixed Matrix Layout -->
      <div class="projects-display-grid">
        
        <!-- Feature Area: Project 1 (Dominant Left Anchor) -->
        <div class="project-card feature-card" @click="openProjectModal(projectsList[0])">
          <div class="card-image-wrapper">
            <img :src="projectsList[0].imageUrl" :alt="projectsList[0].title" class="project-img" />
            <div class="card-overlay-shroud"></div>
            <span class="project-badge class-premium">Featured Deployment</span>
          </div>
          <div class="card-meta-content">
            <span class="project-category">{{ projectsList[0].category }}</span>
            <h3 class="project-card-title">{{ projectsList[0].title }}</h3>
            <p class="project-summary-truncated">{{ projectsList[0].description }}</p>
            <div class="card-interaction-bar">
              <div class="project-metric-pill">
                <span class="metric-label">Impact Metric:</span>
                <span class="metric-value">{{ projectsList[0].metric }}</span>
              </div>
              <button class="read-more-btn" aria-label="Read complete case study">
                Read Full Report <span class="arrow">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Matrix Area: Projects 2 through 7 (Right Sub-Grid Block) -->
        <div class="sub-projects-matrix">
          <div 
            v-for="(project, index) in projectsList.slice(1)" 
            :key="'sub-proj-' + index" 
            class="project-card mini-glass-card"
            @click="openProjectModal(project)"
          >
            <div class="mini-card-image">
              <img :src="project.imageUrl" :alt="project.title" class="project-img" />
              <div class="card-overlay-shroud"></div>
              <span class="project-category-tag">{{ project.category }}</span>
            </div>
            <div class="mini-card-body">
              <h4 class="mini-project-title">{{ project.title }}</h4>
              <p class="mini-project-desc-truncated">{{ project.description }}</p>
              <div class="mini-card-footer">
                <span class="mini-metric">{{ project.metric }}</span>
                <button class="mini-read-link">Full Study &rarr;</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- HIGH-FIDELITY CASE STUDY MODAL OVERLAY (Accommodates Massive Text Limits) -->
    <Transition name="modal-fade">
      <div v-if="isModalOpen" class="project-modal-backdrop" @click.self="closeProjectModal">
        <div class="project-modal-window">
          
          <!-- Sticky Modal Header Controls -->
          <div class="modal-header-actions">
            <span class="modal-category-badge">{{ activeProject.category }}</span>
            <button class="modal-close-trigger" @click="closeProjectModal" aria-label="Close window">
              &times;
            </button>
          </div>

          <!-- Scrollable High-Density Content Area -->
          <div class="modal-scrollable-body">
            <div class="modal-hero-frame">
              <img :src="activeProject.imageUrl" :alt="activeProject.title" class="modal-hero-img" />
              <div class="modal-hero-shroud"></div>
              <h3 class="modal-main-title">{{ activeProject.title }}</h3>
            </div>

            <div class="modal-text-architecture">
              <div class="modal-stat-ribbon">
                <div class="stat-node">
                  <span class="stat-lbl">Deployment Status</span>
                  <span class="stat-val status-verified"><span class="dot"></span> Fully Executed</span>
                </div>
                <div class="stat-node">
                  <span class="stat-lbl">Verified Results</span>
                  <span class="stat-val highlighted">{{ activeProject.metric }}</span>
                </div>
              </div>

              <h4 class="editorial-heading">Project Synopsis & Case Analysis</h4>
              <!-- Render verbatim text formatting naturally -->
              <p class="editorial-paragraph">{{ activeProject.description }}</p>
            </div>
          </div>

        </div>
      </div>
    </Transition>
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

// Modal Engine Reactive State Management
const isModalOpen = ref(false)
const activeProject = ref(null)

const openProjectModal = (project) => {
  activeProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Trap window scroll under background mask
}

const closeProjectModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = '' // Re-enable background scrolling
}

// Exactly 7 Projects Data Matrix with the expanded text configurations safely nested
const projectsList = ref([
 {
    title: 'Won Nyaci Cup – Promoting Unity Through Sports',
    category: 'Sports and Culture',
    description: `The Won Nyaci Cup is one of Flare International Foundation's flagship community engagement initiatives, 
    designed to harness the power of sport as a catalyst for 
    peacebuilding, social cohesion, and youth empowerment. The 
    tournament brought together representatives from all 175 
    clans of the Lango Sub-region, creating a unique platform 
    where communities could interact, compete, and celebrate 
    their shared cultural heritage in an atmosphere of respect 
    and unity. Beyond the excitement of football, the 
    tournament encouraged dialogue, strengthened relationships 
    among communities, and promoted peaceful coexistence 
    across the region. The Won Nyaci Cup also served as a 
    platform for civic engagement, allowing development 
    partners, government institutions, and community 
    organizations to interact directly with thousands of young 
    people and community members through awareness campaigns 
    and public education. By bringing communities together 
    around a common purpose, the initiative demonstrated that 
    sport is more than recreation—it is a powerful vehicle for 
    reconciliation, community participation, and sustainable 
    peace.`,
    metric: '175 Clans United',
    imageUrl: "/assets/images/won2.jpg",
    
  },
  {
    title: 'Green Communities Initiative',
    category: 'Environmental & Climate Action',
    description: `Flare International Foundation is committed to protecting the environment while empowering communities to take an active role in climate action. Through the Green Communities Initiative, we mobilize young people, schools, local leaders, volunteers, and community members to restore ecosystems and create cleaner, healthier environments.

    During the past year, the Foundation led one of its largest environmental campaigns, planting more than 26,000 trees across communities in Northern Uganda. The initiative contributed to environmental restoration, biodiversity conservation, and increased awareness of the importance of sustainable natural resource management.

    Alongside tree planting, volunteers participated in community clean-up campaigns across towns and trading centres, promoting proper waste management, environmental responsibility, and civic pride.

    The Green Communities Initiative reflects our belief that environmental conservation is essential for sustainable development and that lasting climate action begins with empowered communities.`,
    metric: '26,000+ Trees Planted',
    imageUrl: "/assets/images/tree2.jpg",
  },
  {
    title: 'Youth Health and Rights Campaign',
    category: 'Public Health & Civic Awareness',
    description: `Flare International Foundation believes that informed, healthy, and empowered young people are essential to building resilient communities. Through our Youth Health and Rights Campaign, we provide education, awareness, and access to services that enable young people to make informed decisions and become active contributors to community development.

    The campaign engages adolescents and young adults through interactive dialogues, community outreach activities, and educational forums covering sexual and reproductive health and rights (SRHR), prevention of drug and substance abuse, gender-based violence (GBV), youth rights, leadership, and responsible citizenship.

    To promote healthier communities, the initiative also included voluntary blood donation drives and health awareness activities conducted in partnership with healthcare professionals and local stakeholders. These efforts encouraged community members to contribute to lifesaving blood supplies while increasing awareness of preventive healthcare.

    By combining health promotion with civic education, the campaign equips young people with the knowledge, confidence, and leadership skills needed to make positive choices and inspire change within their communities.`,
    metric: 'Blood Drives & SRHR Forums Executed',
    imageUrl: "/assets/images/srh.jpg",
  },
 {
    title: 'Steps to Independence Program',
    category: 'Child Rehabilitation & Inclusion',
    description: `The Steps to Independence Program is Flare International Foundation's flagship child rehabilitation initiative, dedicated to improving the lives of children living with cerebral palsy and other birth-related developmental disabilities. The program was established to ensure that every child, regardless of physical or developmental challenges, has the opportunity to grow, learn, and participate fully in family and community life.

    Many of the children enrolled in the program experience difficulties in achieving key developmental milestones such as sitting, crawling, standing, walking, and communicating due to neurological conditions resulting from complications during pregnancy, childbirth, or early infancy. Without timely intervention, these challenges can significantly limit their independence and overall quality of life.

    To address these needs, Flare International Foundation provides community-based, home-based physiotherapy and rehabilitation services delivered by qualified physiotherapists. Through regular home visits, therapists assess each child's progress, provide individualized physiotherapy and therapeutic exercises, and guide parents and caregivers on how to continue rehabilitation at home. This family-centred approach ensures that therapy extends beyond clinical sessions, creating a supportive environment that encourages continuous progress.

    Beyond physical rehabilitation, the program promotes inclusion, reduces stigma associated with disability, and empowers families with the knowledge and confidence to advocate for their children's rights and wellbeing. By working closely with caregivers and communities, the initiative helps create an environment where children with disabilities are valued, supported, and given equal opportunities to thrive.

    To date, the Steps to Independence Program has supported more than 200 children, many of whom have shown remarkable improvements in mobility, posture, balance, coordination, independence, and participation in everyday activities. For many families, the program has restored hope by demonstrating that with early intervention, consistent rehabilitation, and community support, children with cerebral palsy and other developmental disabilities can achieve meaningful progress and lead more active, fulfilling lives.`,
    metric: '200+ Children Supported',
    imageUrl: "/assets/images/walking.jpg",
  },
 {
    title: 'Male Engagement for Improved Immunization Uptake',
    category: 'Family Health & Community Mobilization',
    description: `Flare International Foundation is pioneering a community-driven approach to improving childhood immunization by actively engaging fathers and male caregivers as partners in child health. Through the Male Engagement for Improved Immunization Uptake Project, the Foundation works to strengthen family support for routine immunization, ensuring that every child has the opportunity to receive life-saving vaccines on time.

    In many communities, fathers play a significant role in household decision-making, including access to healthcare, transportation, and financial support. However, they are often left out of immunization awareness campaigns. This project addresses that gap by equipping men with accurate information about childhood vaccines, encouraging them to become informed advocates for their children's health and active partners in immunization.

    Working closely with District Health Teams, Village Health Teams (VHTs), community leaders, religious institutions, and local radio stations, the project creates opportunities for fathers to participate in community dialogues, receive evidence-based health information, and challenge misconceptions surrounding immunization. Through these engagements, men are encouraged to support mothers and caregivers by accompanying children to health facilities, promoting timely vaccination, and fostering shared responsibility for child wellbeing.

    The initiative places particular emphasis on increasing the uptake of routine childhood immunization, including the Measles-Rubella (MR) vaccine and the RTS,S malaria vaccine, while strengthening community trust in vaccination services. By promoting positive male involvement, the project contributes to healthier families, reduced numbers of under-immunized children, and stronger community ownership of child health programs.

    As a pilot initiative, the project also generates evidence and best practices that can inform future strategies for integrating male engagement into routine immunization and primary healthcare programmes across Uganda.

    Project Highlights
    • Engages fathers and male caregivers as partners in improving childhood immunization.
    • Promotes shared parental responsibility for children's health and wellbeing.
    • Supports increased uptake of Measles-Rubella (MR) and RTS,S malaria vaccines.
    • Strengthens community awareness through dialogues, local radio programmes, and health education campaigns.
    • Collaborates with District Health Teams, Village Health Teams (VHTs), and community leaders to improve access to immunization services.
    • Contributes to stronger family participation in routine child healthcare and healthier communities.`,
    metric: 'Pilot Initiatives & VHT Networks Aligned',
    imageUrl: "/assets/images/male.jpeg",
  },
 {
    title: 'Youth Footwear Enterprise Initiative',
    category: 'Vocational Skills & Entrepreneurship',
    description: `The Youth Footwear Enterprise Initiative is Flare International Foundation's vocational skills development program designed to equip unemployed and vulnerable young people with practical shoemaking skills, entrepreneurship knowledge, and opportunities for sustainable economic empowerment.

    Recognizing that youth unemployment remains one of the greatest challenges facing communities, the initiative provides hands-on training in the design, crafting, repair, and finishing of quality footwear using locally available materials. The program combines technical skills with business development training, enabling participants to transform their creativity into viable income-generating enterprises.

    Beyond mastering the craft, participants receive mentorship in entrepreneurship, financial literacy, customer service, product marketing, and business management. This holistic approach prepares young people not only to produce quality footwear but also to establish and manage small businesses capable of generating sustainable livelihoods.

    The initiative particularly targets vulnerable and out-of-school youth, providing them with practical alternatives to unemployment while promoting innovation, self-employment, and economic resilience. By investing in vocational skills, Flare International Foundation is helping young people build dignified careers, support their families, and contribute to local economic development.

    The Youth Footwear Enterprise Initiative reflects the Foundation's commitment to creating pathways out of poverty through skills development, entrepreneurship, and decent work. Every pair of shoes crafted represents more than a product—it represents hope, opportunity, and a step toward financial independence.

    Project Highlights
    • Trained vulnerable and unemployed youth in professional footwear design and shoemaking.
    • Equipped participants with practical entrepreneurship and small business management skills.
    • Promoted self-employment and sustainable income generation through vocational training.
    • Strengthened financial literacy, product marketing, and customer service skills.
    • Created opportunities for young people to establish micro-enterprises and improve their livelihoods.
    • Contributed to reducing youth unemployment and fostering economic resilience within communities.`,
    metric: 'Vocational Cohorts & Micro-Enterprises Launched',
     imageUrl: "/assets/images/youth.jpg",
  },
  {
    title: 'Bright Futures Education & Child Development Program',
    category: 'Education & Child Protection',
    description: `The Bright Futures Education & Child Development Program is Flare International Foundation's flagship education initiative, dedicated to ensuring that every child has access to quality education, protection, mentorship, and opportunities for holistic growth. The program supports vulnerable children by removing barriers to learning while creating safe, inclusive environments where they can develop academically, socially, and physically.

    Through the program, Flare International Foundation provides essential scholastic materials, including books, pens, exercise books, school bags, uniforms, and other learning resources to children from disadvantaged households. By easing the financial burden on families, the initiative enables children to remain in school, improve attendance, and actively participate in their education.

    Beyond educational support, the program provides mentorship, counselling, and psychosocial support to children who have experienced gender-based violence (GBV), abuse, neglect, or other forms of vulnerability. Working closely with schools, parents, caregivers, and community leaders, the Foundation helps children regain confidence, strengthen resilience, and pursue their education in a safe and supportive environment.

    Recognizing that learning extends beyond the classroom, the program also promotes sports and talent development as essential components of child development. Flare International Foundation provides footballs, netballs, volleyballs, and other sports equipment to schools, encouraging children to participate in organized sports that foster teamwork, discipline, leadership, physical fitness, and social inclusion. Through sport, children develop confidence, discover their talents, and strengthen positive relationships while remaining engaged in school.

    The Foundation also conducts community awareness, advocacy, and counselling on children's rights, gender equality, child protection, and the prevention of gender-based violence. Through close collaboration with teachers, parents, local leaders, and community stakeholders, the program creates safer learning environments where every child is protected, respected, and empowered to reach their full potential.

    To date, the Bright Futures Education & Child Development Program has supported more than 1,013 vulnerable children across 16 schools in Northern Uganda, providing educational materials, mentorship, psychosocial support, child protection services, and opportunities for sports participation. The program continues to improve school attendance, enhance learners' wellbeing, and inspire children to build brighter futures through education, resilience, and active community participation.

    Project Highlights
    • Supported more than 1,013 vulnerable children with scholastic materials and educational assistance.
    • Reached 16 schools across Northern Uganda, strengthening access to quality education and child wellbeing.
    • Improved school attendance and reduced barriers to learning for children from disadvantaged communities.
    • Provided mentorship, counselling, and psychosocial support for children affected by gender-based violence and other vulnerabilities.
    • Promoted child protection, children's rights, and gender equality through school and community advocacy initiatives.
    • Supplied footballs, netballs, volleyballs, and other sports equipment to partner schools, encouraging talent development and healthy lifestyles.
    • Fostered leadership, teamwork, discipline, and social inclusion through sports and extracurricular activities.
    • Worked closely with schools, parents, caregivers, and community leaders to build safe, inclusive, and child-friendly learning environments.`,
    metric: '1,013+ Children Across 16 Schools Supported',
     imageUrl: "/assets/images/pupil.jpg",
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
  
  /* Modal Specific Token Blocks */
  --modal-bg: rgba(255, 255, 255, 0.85);
  --modal-header-bg: rgba(255, 255, 255, 0.9);
  --modal-border: rgba(0, 0, 0, 0.08);

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
  
  --modal-bg: rgba(18, 18, 22, 0.85);
  --modal-header-bg: rgba(18, 18, 22, 0.95);
  --modal-border: rgba(255, 255, 255, 0.1);
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
  cursor: pointer;
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
}

/* Content Layout Containment with Line Clamping for Grid Cleanliness */
.feature-card .card-meta-content { padding: 40px; }
.project-category { font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; }
.project-card-title { font-size: 1.65rem; font-weight: 800; margin: 12px 0 16px 0; color: var(--text-main); }

.project-summary-truncated {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-interaction-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
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

.read-more-btn {
  background: transparent;
  border: none;
  color: var(--accent-blue);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.read-more-btn .arrow { transition: transform 0.3s ease; }
.project-card:hover .read-more-btn .arrow { transform: translateX(4px); }

/* --- RIGHT SIDE SUB-GRID MATRIX (6 CARDS) --- */
.sub-projects-matrix {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.mini-glass-card { display: flex; flex-direction: column; border-radius: 16px; }
.mini-card-image { position: relative; width: 100%; height: 140px; overflow: hidden; }

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
}

.mini-card-body { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
.mini-project-title { font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px; }

.mini-project-desc-truncated {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
.mini-metric { font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); }
.mini-read-link { background: none; border: none; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); cursor: pointer; }
.project-card:hover .mini-read-link { color: var(--accent-blue); }

/* --- HIGH FIDELITY CASE STUDY MODAL PLATFORM --- */
.project-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.project-modal-window {
  background: var(--modal-bg);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid var(--modal-border);
  width: 100%;
  max-width: 800px;
  max-height: 85vh;
  border-radius: 24px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Sticky Overlay Controls */
.modal-header-actions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  z-index: 1010;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
  pointer-events: none;
}
.modal-category-badge {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.modal-close-trigger {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  transition: background 0.2s;
}
.modal-close-trigger:hover { background: rgba(0, 0, 0, 0.8); }

/* Scroll Engine */
.modal-scrollable-body {
  overflow-y: auto;
  flex-grow: 1;
  padding-bottom: 40px;
  scrollbar-width: thin;
}

.modal-hero-frame {
  position: relative;
  width: 100%;
  height: 300px;
}
.modal-hero-img { width: 100%; height: 100%; object-fit: cover; }
.modal-hero-shroud {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, var(--bg-primary));
}
.modal-main-title {
  position: absolute;
  bottom: 24px;
  left: 32px;
  right: 32px;
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
}

/* High Volume Reading Layout Matrix */
.modal-text-architecture {
  padding: 32px 40px 0 40px;
}

.modal-stat-ribbon {
  display: flex;
  gap: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 28px;
}
.stat-node { display: flex; flex-direction: column; gap: 4px; }
.stat-lbl { font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; }
.stat-val { font-size: 0.95rem; font-weight: 700; }
.status-verified { color: #10b981; display: flex; align-items: center; gap: 6px; }
.status-verified .dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; }
.stat-val.highlighted { color: var(--accent-blue); }

.editorial-heading {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 14px;
  color: var(--text-main);
}

.editorial-paragraph {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-muted);
  white-space: pre-line; /* Natively honors multiline linebreaks and gaps safely */
}

/* --- VUE TRANSITIONS --- */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.35s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

/* Responsive Breakpoints */
@media (max-width: 1100px) {
  .projects-display-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 768px) {
  .modal-text-architecture { padding: 24px 24px 0 24px; }
  .modal-main-title { font-size: 1.4rem; bottom: 16px; left: 20px; }
  .modal-hero-frame { height: 220px; }
}
@media (max-width: 640px) {
  .sub-projects-matrix { grid-template-columns: 1fr; }
  .feature-card .card-meta-content { padding: 24px; }
}
</style>