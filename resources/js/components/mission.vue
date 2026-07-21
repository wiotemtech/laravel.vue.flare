<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false
    }
});

const cardsData = ref([
    {
        num: "01",
        title: "Our Vision",
        glowColor: "rgba(2, 132, 199, 0.25)", /* Blue glow */
        text: "To create a compassionate and empowered world where every individual has access to basic needs, rights, education, gender equality and opportunities to improve their quality of life."
    },
    {
        num: "02",
        title: "Our Mission",
        glowColor: "rgba(16, 185, 129, 0.25)", /* Green glow */
        text: "To provide holistic support and resources to vulnerable communities focusing on education, healthcare, girl child education, gender equality, vulnerable children, economic empowerment and social inclusion while fostering a spirit of charity and collaboration."
    },
    {
        num: "03",
        title: "Our Motto",
        glowColor: "rgba(244, 63, 94, 0.25)", /* Rose/Red glow */
        text: "Empowering Hearts, Transforming Lives."
    }
]);

const cardRefs = ref([]); 
const cardVisibility = ref(new Array(cardsData.value.length).fill(false));
let cardObservers = [];

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    cardRefs.value.forEach((cardElement, index) => {
        if (!cardElement) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cardVisibility.value[index] = true;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(cardElement);
        cardObservers.push(observer);
    });
});

onUnmounted(() => {
    cardObservers.forEach((observer) => {
        observer.disconnect();
    });
});
</script>

<template>
    <section 
        class="vision-mission-motto-section" 
        :class="{ 'dark-theme': props.isDarkMode }"
        style="background-image: url('/public/assets/images/pupils.jpg');"
    >
        <div class="section-overlay"></div>

        <div class="content-wrapper">
            <div class="section-header">
                <span class="section-tagline">What Drives Us</span>
                <h2 class="section-title">Our Core Principles</h2>
            </div>
            
            <div class="cards-container">
                <div
                    v-for="(card, index) in cardsData"
                    :key="index"
                    class="card-item"
                    :ref="el => { if (el) cardRefs[index] = el }"
                    :class="{ 'card-animate-visible': cardVisibility[index] }" 
                    :style="{ 
                        'transition-delay': `${index * 0.12}s`,
                        '--hover-glow-color': card.glowColor 
                    }"
                >
                    <!-- Background Glow Overlay used dynamically on hover -->
                    <div class="card-glow-bg"></div>

                    <!-- Elegant Translucent Background Numbering -->
                    <span class="card-number">{{ card.num }}</span>
                    
                    <div class="card-header-block">
                        <span class="card-accent-bar"></span>
                        <h3>{{ card.title }}</h3>
                    </div>
                    
                    <div class="card-body-block">
                        <p>{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Main Section Setup */
.vision-mission-motto-section {
    --primary-accent: #38bdf8;
    --text-primary: #ffffff;
    --text-muted: #cbd5e1;
    --number-color: rgba(255, 255, 255, 0.05);

    /* Glassmorphism Defaults */
    --glass-bg: rgba(255, 255, 255, 0.07);
    --glass-border: rgba(255, 255, 255, 0.15);
    --glass-blur: 16px;

    position: relative;
    padding: 120px 8%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: var(--text-primary);
    text-align: center;
    overflow: hidden;
}

/* Dark Theme Adjustments: Makes glass look deep & moody */
.vision-mission-motto-section.dark-theme {
    --primary-accent: #0ea5e9;
    --text-muted: #94a3b8;
    --glass-bg: rgba(15, 23, 42, 0.45);
    --glass-border: rgba(255, 255, 255, 0.08);
    --number-color: rgba(255, 255, 255, 0.03);
}

.section-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%);
    z-index: 1;
  
}

.vision-mission-motto-section.dark-theme .section-overlay {
    background: linear-gradient(180deg, rgba(8, 10, 18, 0.85) 0%, rgba(8, 10, 18, 0.95) 100%);
}

.content-wrapper {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header block */
.section-header {
    margin-bottom: 80px;
}

.section-tagline {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--primary-accent);
    margin-bottom: 12px;
}

.section-title {
    font-size: 2.6rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.03em;
}

/* Cards Layout Grid */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
}

/* Premium Glassmorphism Card Style */
.card-item {
    position: relative;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 45px 35px;
    flex: 1;
    min-width: 300px;
    max-width: 360px;
    text-align: left;
    
    /* Crucial Glass properties */
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    
    /* Animation initial state */
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.4s ease,
                box-shadow 0.4s ease;
}

/* Hidden dynamic glow backing activated on hover */
.card-glow-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 10%, var(--hover-glow-color), transparent 75%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 0;
    border-radius: 20px;
}

/* Scroll Entrance State */
.card-item.card-animate-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Interactive Hover States */
.card-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.35); /* Shines the frosted border edge on hover */
}

/* Activate the local element glows on hover */
.card-item:hover .card-glow-bg {
    opacity: 1;
}

/* Glass Floating Background Numbers */
.card-number {
    position: absolute;
    top: -5px;
    right: 20px;
    font-size: 6.5rem;
    font-weight: 900;
    color: var(--number-color);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    user-select: none;
    pointer-events: none;
    line-height: 1;
    z-index: 1;
    transition: transform 0.4s ease;
}

.card-item:hover .card-number {
    transform: scale(1.05) translateY(-5px);
}

/* Card Header Block */
.card-header-block {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
    z-index: 2;
}

/* Vibrant Left Structural Accent Bar */
.card-accent-bar {
    display: block;
    width: 4px;
    height: 28px;
    background-color: #38bdf8; /* Blue */
    margin-right: 15px;
    border-radius: 2px;
}

.card-item:nth-child(2) .card-accent-bar {
    background-color: #10b981; /* Green for Mission */
}

.card-item:nth-child(3) .card-accent-bar {
    background-color: #f43f5e; /* Rose/Red for Motto */
}

.card-item h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.02em;
}

/* Content Text block */
.card-body-block {
    position: relative;
    z-index: 2;
}

.card-body-block p {
    font-size: 0.98rem;
    line-height: 1.7;
    color: var(--text-muted);
    font-weight: 400;
    margin: 0;
}

/* Responsive Customization */
@media (max-width: 768px) {
    .vision-mission-motto-section {
        padding: 80px 6%;
        background-attachment: scroll; /* Disables heavy parallax logic on mobile GPU */
    }

    .section-title {
        font-size: 2.1rem;
    }

    .card-item {
        min-width: 100%;
        padding: 40px 30px;
    }
}
</style>