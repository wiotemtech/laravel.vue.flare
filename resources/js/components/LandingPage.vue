<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isDarkMode = ref(false);
const currentIndex = ref(0);
const slides = ref([
    { imageUrl: "/assets/images/washing.jpg" },
    { imageUrl: "/assets/images/fight.jpg" },
    { imageUrl: "/assets/images/carpent.jpg" },
]);
const texts = ref([
    {
        title: " UNITE WITH US TO SCULPT A LEGACY OF GLOBAL PROGRESS",
        subtitle: "Your health, our priority",
    },
    {
        title: "JOIN OUR MISSION TO FORGE EDURING PROGRESS",
        subtitle: "Support sustainable growth and self-reliance",
    },
    {
        title: "UNITE WITH US TO CREATE AN EPOACH OF TRANSFORMATIVE IMPACT",
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
    const previousIndex = currentIndex.value;
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

onMounted(() => {
    startSlider();
});

onUnmounted(() => {
    stopSlider();
});
</script>

<template>
    <div id="app" :class="{ 'dark-theme-header': isDarkMode }">
        <div class="landing-container">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="slide"
                :class="{ active: currentIndex === index }"
                :style="{ backgroundImage: `url(${slide.imageUrl})` }"
            ></div>

            <div class="overlay"></div>

            <div
                class="text-overlay"
                :class="{ active: true }"
                :key="currentIndex"
            >
                <h1>{{ texts[currentIndex].title }}</h1>
                <p>{{ texts[currentIndex].subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    background-color: #f4f4f4;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme-header body,
.dark-theme-header html {
    background-color: #121212;
    color: #eee;
}

#app.dark-theme-header {
    background-color: #121212;
    color: #eee;
}

.landing-container {
    position: relative;
    height: 70vh;
    margin-top: -120px;
    width: 100%;
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
    z-index: 0;
}

.slide.active {
    opacity: 1;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    pointer-events: none;
}

.text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    z-index: 2;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    padding: 0 20px;
    max-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text-overlay.active {
    opacity: 1;
}

.text-overlay h1 {
    font-size: 60px;
    font-weight: bolder;

    margin-bottom: 15px;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    opacity: 0;
    transform: translateX(-100%);
}

.dark-theme-header .text-overlay h1 {
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.9);
}

.text-overlay p {
    font-size: 3.2rem;
    font-weight: bolder;

    margin-bottom: 25px;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: translateY(100%);
}

.dark-theme-header .text-overlay p {
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}

.text-overlay.active h1 {
    animation: slideInLeft 1s forwards;
}

.text-overlay.active p {
    animation: slideUp 1s 0.3s forwards;
}

.text-overlay.active .donate-button {
    animation: fadeInScale 1s 0.6s forwards;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (max-width: 768px) {
    .text-overlay h1 {
        font-size: 35px;

        margin-bottom: 10px;
    }

    .text-overlay p {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .donate-button {
        padding: 12px 25px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .text-overlay h1 {
        font-size: 28px;
    }

    .text-overlay p {
        font-size: 1.2rem;
    }

    .donate-button {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}
</style>
