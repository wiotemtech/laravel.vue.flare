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

let cardObservers = [];

onMounted(() => {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };


    cardRefs.value.forEach((cardElement, index) => {
      
        cardElement.classList.add('card-animate-hidden');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                
                
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(cardElement);
        cardObservers.push(observer); 
    });
});

onUnmounted(() => {

    cardObservers.forEach((observer, index) => {
        if (cardRefs.value[index]) {
            observer.unobserve(cardRefs.value[index]);
        }
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
                :style="{ 'animation-delay': `${index * 0.2}s` }"
            >
                <h3>{{ card.title }}</h3>
                <p>{{ card.text }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.vision-mission-motto-section {
    padding: 80px 10%;
    background-color: #eef7ee; 
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
}

body.dark-theme-body .vision-mission-motto-section {
    background-color: #111;

   
}


.section-title {
    font-size: 30px; 
    color: red; 
    margin-bottom: 60px; 
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.1); 
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
    opacity: 0; 
    transform: translateY(50px); 
    position: relative; 
    overflow: hidden; 
    border: 2px solid transparent; 
}


body.dark-theme-body .card-item {
        background: linear-gradient(135deg, #111, #111);
        box-shadow: 0 10px 30px rgba(200, 133, 133, 0.1);

    
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

.vision-mission-motto-section.dark-theme .card-item {
    background: linear-gradient(135deg, #2a342c, #3a443c); /* Darker gradient */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    border-color: transparent; 
}



.card-item:hover {
    transform: translateY(-10px); 
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25); /* Stronger shadow on hover */
    border-color: #1e88e5; /* Add a subtle border on hover */
}



.card-item h3 {
    font-size: 1.9em; /* Slightly larger title */
    color: #007bff; /* Blue for card titles */
    margin-bottom: 15px;
    font-weight: 700; /* Bolder */
    letter-spacing: -0.5px; /* Tighter letter spacing */
    position: relative;
    padding-top: 10px; /* Space from the top accent */
    z-index: 2; /* Ensure title is above pseudo-element on hover */
}



.card-item p {
    font-size: 1.1em; /* Slightly larger text */
    line-height: 1.8;
    color: #444; /* Slightly darker text for better contrast */
    z-index: 2; /* Ensure text is above pseudo-element on hover */
}

body.dark-theme-body .card-item p {
    color: white;

    
}


/* Animation classes (retained) */
.card-animate-hidden {
    opacity: 0;
    transform: translateY(50px);
}

.card-animate-visible {
    opacity: 1;
    transform: translateY(0);
    /* Staggered animation handled via inline style animation-delay */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
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
        max-width: 90%; /* Allow cards to take more width on mobile */
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
        min-width: 200px; /* Even smaller min-width for very small screens */
        padding: 20px;
    }
}
</style>
