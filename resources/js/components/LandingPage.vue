<template>
  <div class="landing-container">
    <div class="image-slider">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${slide.imageUrl})` }"
      ></div>
    </div>

    <div class="content-panel">
      <div class="text-content" :class="{ active: true }" :key="currentIndex">
        <h1>{{ texts[currentIndex].title }}</h1>
        <p>{{ texts[currentIndex].subtitle }}</p>
        <button class="cta-button">DONATE NOW</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentIndex = ref(0);
const slides = ref([
    { imageUrl: "/assets/images/washing.jpg" },
    { imageUrl: "/assets/images/fight.jpg" },
    { imageUrl: "/assets/images/carpent.jpg" },
]);
const texts = ref([
    {
        title: "BUILDING A GLOBAL PROGRESS TOGETHER",
        subtitle: "Together we can make a difference",
    },
    {
        title: "JOIN OUR MISSION TO FORGE ENDURING PROGRESS",
        subtitle: "Support sustainable growth and self-reliance",
    },
    {
        title: "UNITE WITH US TO CREATE AN EPOCH OF TRANSFORMATIVE IMPACT",
        subtitle: "So let's do it!",
    },
]);
let intervalId = null;

const startSlider = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 6000);
};

const stopSlider = () => {
    clearInterval(intervalId);
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

onMounted(() => {
    startSlider();
});

onUnmounted(() => {
    stopSlider();
});
</script>

<style scoped>
.landing-container {
    display: flex;
    height: 75vh;
    width: 100%;
    
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    background-color:#1e88e5;
}

.image-slider {
    position: relative;
    flex-basis: 60%;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    transform: scale(1.0);
    animation: panZoom 8s ease-in-out infinite alternate;
}

.slide.active {
    opacity: 1;
}

.content-panel {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    color: #fff;
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.08); /* Frosted Glass Background */
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.text-content {
    text-align: left;
    max-width: 500px;
    opacity: 0;
    transition: opacity 1s;
}

.text-content.active {
    opacity: 1;
}

h1 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translateY(20px);
}

p {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(20px);
}

.cta-button {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(45deg, #007bff, #005c99);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: scale(0.9);
}

.cta-button:hover {
    background: linear-gradient(45deg, #005c99, #003366);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.text-content.active h1 {
    animation: fadeInUp 1s forwards;
}

.text-content.active p {
    animation: fadeInUp 1s 0.3s forwards;
}

.text-content.active .cta-button {
    animation: fadeInUp 1s 0.6s forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes panZoom {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
}

/* Responsive Styles */
@media (max-width: 992px) {
    .landing-container {
        flex-direction: column;
        margin-top: 33px;
        height: 100vh;
    }

    .image-slider {
        flex-basis: 50vh;
        width: 100%;
    }

    .content-panel {
        flex-basis: auto;
        width: 100%;
        padding: 2rem;
        background-color: #1e88e5;
        backdrop-filter: none;
        border-left: none;
    }
}
</style>