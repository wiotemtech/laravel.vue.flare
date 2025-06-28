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
        title: "Our Vision",
        text: "To create a compassionate and empowered world where every individual has access to basic needs, rights, education, gender equality and opportunities to improve their quality of life."
    },
    {
        title: "Our Mission",
        text: "To provide holistic support and resources to vulnerable communities focusing on education, healthcare, girl child education, gender equality, vulnerable children, economic empowerment and social inclusion while fostering a spirit of charity and collaboration."
    },
    {
        title: "Our Motto",
        text: "Empowering Hearts, Transforming Lives." // Placeholder motto, you can update this!
    }
]);

const cardRefs = ref([]); 
// We'll store a reactive state for whether each card should be visible
const cardVisibility = ref(new Array(cardsData.value.length).fill(false));

let cardObservers = []; // To store IntersectionObserver instances

onMounted(() => {
    const observerOptions = {
        root: null, // Observe relative to the viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the item is visible
    };

    cardRefs.value.forEach((cardElement, index) => {
        // No need to add card-animate-hidden directly here.
        // The default styles (opacity:0, transform:Y(50px)) in CSS handle the initial hidden state.

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the card enters the viewport, set its visibility to true
                    cardVisibility.value[index] = true;
                    // Stop observing once it's visible to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(cardElement);
        cardObservers.push(observer); // Store the observer for cleanup
    });
});

onUnmounted(() => {
    // Disconnect all observers when the component is unmounted
    cardObservers.forEach((observer) => {
        observer.disconnect();
    });
});
</script>

<template>
    <section class="vision-mission-motto-section" :class="{ 'dark-theme': props.isDarkMode }">
        <h2 class="section-title">Our Core Principles</h2>
        <div class="cards-container">
            <div
                v-for="(card, index) in cardsData"
                :key="index"
                class="card-item"
                :ref="el => { if (el) cardRefs[index] = el }"
                :class="{ 'card-animate-visible': cardVisibility[index] }" 
                :style="{ 'animation-delay': `${index * 0.2}s` }"
            >
                <h3>{{ card.title }}</h3>
                <p>{{ card.text }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
/*
   IMPORTANT:
   Remove 'opacity: 0;' and 'transform: translateY(50px);' from .card-item base style.
   These should only be present in '.card-animate-hidden' or implicit initial states if not directly controlled.
   Since 'card-animate-hidden' is removed, .card-item's base style will be its final state.
   The animation class will then transition it.
*/
.vision-mission-motto-section {
    padding: 80px 10%;
    background-color: #eef7ee; 
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
}

/* Ensure dark mode styles are correctly applied, if 'body.dark-theme-body' is the global class */
body.dark-theme-body .vision-mission-motto-section {
    background-color: #111;
}

body.dark-theme-body .card-item {
    background: linear-gradient(135deg, #1e1e1e, #2a2a2a); /* Darker background for dark theme */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Adjust shadow for dark theme */
}

body.dark-theme-body .card-item p {
    color: #eee; /* Light text color for dark theme */
}

body.dark-theme-body .card-item h3 {
    color: #8ab4f8; /* A lighter blue for dark theme titles */
}


.section-title {
    font-size: 30px; 
    color: red; 
    margin-bottom: 60px; 
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.1); 
}

/* Horizontal line for section title (added for better visual separation as common in designs) */
.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;

    margin: 20px auto 0;
    border-radius: 2px;
}


.cards-container {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 30px; 
}

.card-item {
    background: linear-gradient(135deg, #f0f0f0, #ffffff); /* Subtle gradient for depth */
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    flex: 1; 
    min-width: 280px; 
    max-width: 350px; 
    text-align: left; 
    transition: all 0.4s ease-in-out; 
    position: relative; 
    overflow: hidden; 
    border: 2px solid transparent; 

    /* Initial state for animation */
    opacity: 0;
    transform: translateY(50px);
}

.card-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px; 
    background: linear-gradient(90deg,#1e88e5,#1e88e5); /* Gradient accent */
    border-radius: 15px 15px 0 0;
    transform: scaleX(0); 
    transform-origin: left;
    transition: transform 0.4s ease-in-out;
    z-index: 1; 
}

.card-item:hover::before {
    transform: scaleX(1); 
}

/* This targets the dark theme class directly on the section */
.vision-mission-motto-section.dark-theme .card-item {
    background: linear-gradient(135deg, #2a342c, #3a443c); /* Darker gradient for cards in dark theme */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    border-color: transparent; 
}

.vision-mission-motto-section.dark-theme .card-item h3 {
    color: #8ab4f8; /* Lighter blue for titles in dark theme */
}

.vision-mission-motto-section.dark-theme .card-item p {
    color: #eee; /* Light text for paragraphs in dark theme */
}


.card-item:hover {
    transform: translateY(-10px); 
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25); /* Stronger shadow on hover */
    border-color: #1e88e5; /* Add a subtle border on hover */
}

.card-item h3 {
    font-size: 1.9em; 
    color: #007bff; 
    margin-bottom: 15px;
    font-weight: 700; 
    letter-spacing: -0.5px; 
    position: relative;
    padding-top: 10px; 
    z-index: 2; 
}

.card-item p {
    font-size: 1.1em; 
    line-height: 1.8;
    color: #444; 
    z-index: 2; 
}

/* Animation classes */
/* Renamed and simplified: card-animate-hidden is now implicitly the default .card-item styles */
.card-animate-visible {
    opacity: 1;
    transform: translateY(0);
    /* Transition applied directly to card-item, animation-delay via inline style */
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .vision-mission-motto-section {
        padding: 60px 5%;
    }

    .section-title {
        font-size: 2.5em;
        margin-bottom: 30px;
    }

    .card-item {
        min-width: 250px;
        max-width: 90%; 
        padding: 25px;
    }

    .card-item h3 {
        font-size: 1.6em;
    }

    .card-item p {
        font-size: 0.95em;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 2em;
        margin-bottom: 25px;
    }

    .card-item {
        min-width: 200px; 
        padding: 20px;
    }
}
</style>