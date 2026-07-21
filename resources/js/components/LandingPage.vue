<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isDarkMode = ref(false);
const currentIndex = ref(0);

const slides = ref([
    { 
        imageUrl: "/assets/images/health.jpeg",
        location: "",
        metric: "",
        tag: "HEALTH & VITALITY"
    },
    { 
        imageUrl: "/assets/images/pupil.jpg",
        location: "",
        metric: "1,600+ Scholars",
        tag: "EDUCATION & LITERACY"
    },
    { 
        imageUrl: "/assets/images/trees.jpg",
        location: "Community Hubs",
        metric: "26k+ Trees Planted",
        tag: "ENVIRONMENTAL IMPACT"
    },
]);

const texts = ref([
    {
        title: "HEAL, TEACH, AND SUSTAIN OUR COMMUNITIES",
        subtitle: "Providing critical healthcare, functional literacy programs, and environmental stewardship to foster localized self-reliance.",
    },
    {
        title: "IGNITING MINDS THROUGH INCLUSIVE LEARNING",
        subtitle: "Removing systemic barriers in higher education and primary schools to unlock opportunities for the next generation of leaders.",
    },
    {
        title: "SAFEGUARDING OUR LAND FOR FUTURE GENERATIONS",
        subtitle: "Partnering with local schools and farm networks to drive aggressive reforestation, waste management, and soil preservation.",
    },
]);

let intervalId = null;

const startSlider = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 7000);
};

const stopSlider = () => {
    if (intervalId) clearInterval(intervalId);
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const setSlide = (index) => {
    stopSlider();
    currentIndex.value = index;
    startSlider();
};

onMounted(() => {
    startSlider();
});

onUnmounted(() => {
    stopSlider();
});
</script>

<template>
    <div id="app" :class="{ 'dark-theme': isDarkMode }">
        <section class="art-landing">
            
            <!-- LAYERED BACKGROUND ART & BRAND TEXTURES -->
            <div class="art-background-canvas">
                <!-- Natural Canvas Fiber Overlay -->
                <div class="canvas-texture"></div>
                
                <!-- Brand Colors Watercolor Bleed -->
                <div class="artistic-watercolor-red"></div>
                <div class="artistic-watercolor-green"></div>

                <!-- Custom NGO Pillars Mural styled explicitly in Blue, Red, and Green -->
                <div class="community-silhouette">
                    <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="silhouette-svg">
                        <!-- Ground curve (Soft White/Blue mix) -->
                        <path d="M0 460 Q 300 420, 600 450 T 1000 430 L 1000 500 L 0 500 Z" fill="#ffffff" opacity="0.05"/>
                        
                        <!-- ENVIRONMENTAL PILLAR: Branded Green Tree & Canopy -->
                        <g class="pillar-green" fill="#10b981">
                            <path d="M280 450 Q 278 350, 250 300 Q 210 240, 160 220 Q 150 215, 170 210 Q 220 220, 260 270 Q 280 220, 240 180 Q 280 190, 290 250 Q 310 210, 340 190 Q 310 200, 305 250 Q 320 260, 325 310 Q 345 270, 380 250 Q 340 260, 328 310 Q 335 370, 330 450 Z" opacity="0.2" />
                            <circle cx="160" cy="210" r="50" opacity="0.15" />
                            <circle cx="250" cy="170" r="75" opacity="0.15" />
                            <circle cx="340" cy="210" r="65" opacity="0.15" />
                        </g>

                        <!-- EDUCATION PILLAR: Branded Red Reading Child & Book -->
                        <g class="pillar-red" fill="#dc2626">
                            <path d="M360 450 C 360 430, 375 410, 390 410 C 400 410, 405 420, 405 430 L 405 450 Z" opacity="0.25"/>
                            <circle cx="390" cy="395" r="10" opacity="0.25"/>
                            <path d="M395 415 Q 405 410, 415 415 L 415 425 Q 405 420, 395 425 Z" opacity="0.35"/>
                        </g>

                        <!-- HEALTH & COMMUNITY PILLAR: Branded Radiant Blue Hands & Sprout -->
                        <g class="pillar-blue" stroke="#3b82f6" fill="none">
                            <path d="M520 440 C 490 410, 480 370, 500 340 C 510 325, 525 320, 535 330 C 540 335, 535 345, 520 355 C 500 375, 510 405, 530 425" stroke-width="4" stroke-linecap="round" opacity="0.25"/>
                            <path d="M570 440 C 600 410, 610 370, 590 340 C 580 325, 565 320, 555 330 C 550 335, 555 345, 570 355 C 590 375, 580 405, 560 425" stroke-width="4" stroke-linecap="round" opacity="0.25"/>
                        </g>
                        <g class="pillar-blue-fill" fill="#3b82f6">
                            <path d="M545 370 Q 545 330, 525 315 Q 545 335, 545 370 Z" opacity="0.3"/>
                            <path d="M545 370 Q 545 330, 565 315 Q 545 335, 545 370 Z" opacity="0.3"/>
                        </g>
                    </svg>
                </div>
            </div>

            <div class="main-canvas">
                <!-- LEFT PANEL (Editorial & Content) -->
                <div class="editorial-panel">
                    <div class="category-header" :key="'tag-' + currentIndex">
                        <span class="pulse-ring"></span>
                        <span class="hdr-tag">{{ slides[currentIndex].tag }}</span>
                    </div>

                    <div class="typography-stage" :key="'text-' + currentIndex">
                        <h1 class="bold-title">
                            {{ texts[currentIndex].title }}
                        </h1>
                        <p class="clean-lead">
                            {{ texts[currentIndex].subtitle }}
                        </p>
                    </div>

               <!-- Brand CTA Block -->
<div class="cta-block">
  <!-- Close the first link properly -->
  <router-link to="/contact-us" class="art-btn solid-btn">
    <span>Join Our Mission</span>
    <span class="arrow-wrap">
      <i class="fas fa-arrow-right"></i>
    </span>
  </router-link> 

  <!-- External Donate Link -->
  <a 
    href="https://www.gofundme.com/f/hope-in-education-help-vulnerable-ugandan-children/wa/s?utm_campaign=fp_sharesheet&utm_content=amp20_t1&utm_medium=customer&utm_source=whatsapp&lang=en_US" 
    class="shiny-btn donate-btn"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <span>Donate</span>
    <span class="heart-wrap">
      <i class="fas fa-heart"></i>
    </span>
  </a>
</div>
                    <!-- Clean Timeline Selector -->
                    <div class="vertical-timeline">
                        <div 
                            v-for="(slide, index) in slides" 
                            :key="index"
                            class="timeline-node"
                            :class="{ active: currentIndex === index }"
                            @click="setSlide(index)"
                        >
                            <span class="node-num">0{{ index + 1 }}</span>
                            <div class="node-bar">
                                <div v-if="currentIndex === index" class="node-bar-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT ART STAGE (Sculpted Mask Frame & Glass Cards) -->
                <div class="media-portrait-stage">
                    <div class="sculpted-frame-wrapper">
                        <!-- Organic Leaf-Sculpt Frame representing Growth/Environment -->
                        <div class="sculpted-mask">
                            <div
                                v-for="(slide, index) in slides"
                                :key="index"
                                class="masked-image"
                                :class="{ active: currentIndex === index }"
                                :style="{ backgroundImage: `url(${slide.imageUrl})` }"
                            ></div>
                            <div class="sculpted-overlay"></div>
                        </div>

                        <!-- Floating Glass Badge 1: Health / Impact Metrics -->
                        <div class="floating-widget widget-metric" :key="'metric-' + currentIndex">
                            <div class="widget-icon-box blue-badge">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                            <div class="widget-info">
                                <span class="widget-label">LIVE METRIC</span>
                                <span class="widget-val">{{ slides[currentIndex].metric }}</span>
                            </div>
                        </div>

                        <!-- Floating Glass Badge 2: Regional Hubs -->
                        <div class="floating-widget widget-location" :key="'location-' + currentIndex">
                            <div class="widget-icon-box green-badge">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <div class="widget-info">
                                <span class="widget-label">ACTIVE FIELD HUB</span>
                                <span class="widget-val">{{ slides[currentIndex].location }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>


/* Container for both buttons */
.cta-block {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 24px;
}

/* Donate Button - Shiny Effect */
.donate-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  background-color:green;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(244, 63, 94, 0.3);
}

/* Shiny hover animation */
.donate-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5);
  background: linear-gradient(135deg, #ff5f78 0%, #f43f5e 100%);
}

/* The 'shine' effect layer */
.donate-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: 0.6s;
}

.donate-btn:hover::before {
  left: 100%;
}

/* Heart icon styling */
.heart-wrap {
  display: flex;
  align-items: center;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
/* BASE CANVAS SETUP - DEEP BLUE CANVAS BACKGROUND */
.art-landing {
    position: relative;
    width: 100%;
    min-height: 85vh;
    display: flex;
    align-items: center;
    background: #1e88e5; /* Rich Deep Brand Blue Background */
    padding: 80px 8%;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: -44px;
    transition: background 0.5s ease;
}

#app.dark-theme .art-landing {
    background: #07152e; /* Darker Space Blue Variant for Dark Theme */
}

/* BACKGROUND LAYER PACK */
.art-background-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

/* Texture Overlay */
.canvas-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.08;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3s%3Cfilter id='noiseFilter'%3e%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3e%3C/filter%3e%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3C/svg%3e");
}

/* Brand Watercolor Stain: Vibrant Red Ambient Glow */
.artistic-watercolor-red {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.02) 65%, rgba(255, 255, 255, 0) 80%);
    filter: blur(80px);
}

/* Brand Watercolor Stain: Vibrant Green Ambient Glow */
.artistic-watercolor-green {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.02) 60%, rgba(255, 255, 255, 0) 75%);
    filter: blur(90px);
}

/* NGO Pillars Interactive Multi-Color Silhouette */
.community-silhouette {
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 85%;
    max-width: 1000px;
    height: auto;
    z-index: 2;
}

.silhouette-svg {
    width: 100%;
    height: auto;
    display: block;
}

/* CORE CONTENT GRID */
.main-canvas {
    position: relative;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 60px;
    align-items: center;
    z-index: 10;
}

/* TYPOGRAPHY & PANEL */
.editorial-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    position: relative;
    z-index: 12;
}

.category-header {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.pulse-ring {
    width: 10px;
    height: 10px;
    background-color: #dc2626; /* Crimson Red active signal */
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5);
    animation: pulseGlow 1.8s infinite;
}

.hdr-tag {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2.5px;
    color: #10b981; /* High-contrast Green Tag */
    text-transform: uppercase;
}

/* BIG & BOLD WHITE TYPOGRAPHY AGAINST BLUE BACKGROUND */
.bold-title {
    font-size: 56px; 
    font-weight: 950;
    line-height: 1.1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #ffffff; /* Pure White text contrast */
    letter-spacing: -2px;
    margin-bottom: 24px;
    animation: figmaReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.clean-lead {
    font-size: 18px;
    line-height: 1.65;
    font-weight: 450;
    color: #cbd5e0; /* Clean light gray-blue for dark readability */
    max-width: 580px;
    margin-bottom: 44px;
    animation: figmaReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    opacity: 0;
}

/* INTERACTIVE CONTROLS */
.cta-block {
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.art-btn {
    display: inline-flex;
    align-items: center;
    height: 52px;
    padding: 0 28px;
    font-size: 13px;
    font-weight: 850;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.solid-btn {
    background-color: #dc2626; /* Crimson Red */
    color: #ffffff;
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.35);
    gap: 16px;
}

.solid-btn:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(220, 38, 38, 0.5);
}

.arrow-wrap, .heart-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 11px;
    transition: all 0.25s ease;
}

.arrow-wrap {
    background-color: rgba(255, 255, 255, 0.2);
}

.solid-btn:hover .arrow-wrap {
    transform: translateX(4px);
}

.ghost-btn {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.35);
}

.gap-btn {
    gap: 12px;
}

.ghost-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
}

.ghost-btn:hover .heart-wrap {
    transform: scale(1.2);
    color: #dc2626; /* Turns Red on Hover */
}

/* TIMELINE INDICATORS */
.vertical-timeline {
    display: flex;
    gap: 30px;
}

.timeline-node {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.timeline-node:hover,
.timeline-node.active {
    opacity: 1;
}

.node-num {
    font-family: monospace;
    font-size: 13px;
    font-weight: 800;
    color: #ffffff;
}

.node-bar {
    width: 50px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
}

.node-bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #dc2626; /* Crimson Red slider timeline tracking */
    animation: slideLoader 7s linear forwards;
}

/* RIGHT COLUMN: SCULPTED IMAGE STAGE */
.media-portrait-stage {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 12;
}

.sculpted-frame-wrapper {
    position: relative;
    width: 100%;
    max-width: 440px;
    aspect-ratio: 1 / 1.15;
}

.sculpted-mask {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 180px 40px 180px 180px;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.masked-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.15) rotate(1deg);
    transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.masked-image.active {
    opacity: 1;
    transform: scale(1) rotate(0);
}

.sculpted-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(15, 43, 92, 0.6) 100%);
    z-index: 3;
    pointer-events: none;
}

/* FLOATING METRIC WIDGETS */
/*.floating-widget {
    position: absolute;
    background-color:red;
    backdrop-filter: blur(15px) saturate(120%);
    -webkit-backdrop-filter: blur(15px) saturate(120%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 14px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    z-index: 4;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    transition: all 0.4s ease;
    animation: widgetFloat 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}*/

/*.widget-icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 14px;
}*/

/*.blue-badge {
    background-color: rgba(59, 130, 246, 0.15);
    color: #3b82f6;
}*/

/*.green-badge {
    background-color: rgba(16, 185, 129, 0.15);
    color: #10b981;
}*/

/*
.widget-info {
    display: flex;
    flex-direction: column;
}*/

/*
.widget-label {
    font-size: 9px;
    font-weight: 800;
    color: #a0aec0;
    letter-spacing: 1.5px;
}*/
/*
.widget-val {
    font-size: 13px;
    font-weight: 900;
    color: #ffffff;
}*/

/*
.widget-metric {
    top: 15%;
    left: -40px;
}*/
/*
.widget-location {
    bottom: 12%;
    right: -20px;
}*/

/* ANIMATIONS */
@keyframes pulseGlow {
    0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
    70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
    100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}

@keyframes figmaReveal {
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes widgetFloat {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideLoader {
    from { width: 0%; }
    to { width: 100%; }
}

/* RESPONSIVE LAYOUTS */
@media (max-width: 991px) {
    .art-landing {
        padding: 100px 6% 60px 6%;
    }

    .main-canvas {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .editorial-panel {
        order: 2;
    }

    .media-portrait-stage {
        order: 1;
        width: 100%;
    }

    .sculpted-frame-wrapper {
        max-width: 360px;
        aspect-ratio: 1 / 1.1;
    }

    .sculpted-mask {
        border-radius: 120px 40px 120px 120px;
    }

    .bold-title {
        font-size: 38px;
    }

    .widget-metric {
        left: -15px;
    }

    .widget-location {
        right: -10px;
    }

    .community-silhouette {
        width: 90%;
        left: 5%;
    }
}

@media (max-width: 480px) {
    .bold-title {
        font-size: 30px;
    }

    .clean-lead {
        font-size: 16px;
    }

    .cta-block {
        flex-direction: column;
        gap: 12px;
        margin-bottom: 35px;
    }

    .art-btn {
        width: 100%;
        justify-content: center;
    }

    .vertical-timeline {
        justify-content: center;
    }

    .widget-metric, .widget-location {
        position: static;
        margin-top: 12px;
        width: 100%;
        box-sizing: border-box;
    }

    .sculpted-frame-wrapper {
        display: flex;
        flex-direction: column;
        height: auto;
        aspect-ratio: auto;
    }

    .sculpted-mask {
        aspect-ratio: 1.1 / 1;
    }
}
</style>