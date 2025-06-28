<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const cardsData = ref([
    {
        title: "We Fight Together",
        mainText:
            "United in spirit, we stand resilient against challenges, proving the strength of collective action.",
        imageUrl: "/assets/images/fight.jpg",
        footerText: "WE FIGHT TOGETHER",
    },
    {
        title: "We Care About Others",
        mainText:
            "With compassion at our core, we extend our hands to those in need, fostering a world of empathy and support.",
        imageUrl: "/assets/images/care.jpg",
        footerText: "WE CARE ABOUT OTHERS",
    },
]);

const cardRefs = ref([]);
let cardObservers = [];

onMounted(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.1 };
    cardRefs.value.forEach((el, index) => {
        el.classList.add("humanity-card-animate-hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("humanity-card-animate-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        observer.observe(el);
        cardObservers.push(observer);
    });
});

onUnmounted(() => {
    cardObservers.forEach((observer, index) => {
        if (cardRefs.value[index]) observer.unobserve(cardRefs.value[index]);
        observer.disconnect();
    });
});
</script>

<template>
    <section
        class="humanity-section"
        :class="{ 'dark-theme': props.isDarkMode }"
    >
        <h2 class="section-title">Our Humanity in Action</h2>
        <div class="cards-container">
            <div
                v-for="(card, index) in cardsData"
                :key="index"
                class="humanity-card-item"
                :ref="
                    (el) => {
                        if (el) cardRefs[index] = el;
                    }
                "
                :style="{ animationDelay: `${index * 0.2}s` }"
            >
                <div
                    class="card-image-area"
                    :style="{ backgroundImage: `url(${card.imageUrl})` }"
                >
                    <div class="card-overlay"></div>
                    <div class="card-text-content">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.mainText }}</p>
                    </div>
                </div>
                <div
                    class="card-footer"
                    :class="{ 'footer-alt-bg': index % 2 !== 0 }"
                >
                    <span>{{ card.footerText }}</span>
                </div>
            </div>
        </div>

        <a href="#" class="donate-button">Donate Now</a>
    </section>
</template>

<style scoped>
.donate-button {
    display: inline-block;
    padding: 12px 30px;
    background-color: #1e88e5;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;

    margin-top: 44px;
}

.donate-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.6);
}

.humanity-section {
    padding: 100px 8%;
    margin-top: -75px;
    background-color: #f7fcfd;
    color: #333;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark-theme-body .humanity-section {
    background-color: #111;
}

.section-title {
    font-size: 30px;
    color: red;
    margin-bottom: 40px;
    font-weight: bold;
}

.humanity-section.dark-theme .section-title {
    color: #82caff;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.humanity-card-item {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 550px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease;
    overflow: hidden;
    opacity: 0;
    transform: translateY(60px) scale(0.95);
}

.humanity-section.dark-theme .humanity-card-item {
    background-color: #2a3a4a;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
}

.humanity-card-item:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.card-image-area {
    height: 350px;
    background-size: cover;
    background-position: center;
    position: relative;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: background-color 0.4s;
}

.humanity-card-item:hover .card-overlay {
    background-color: rgba(0, 123, 255, 0.6);
}

.humanity-section.dark-theme .humanity-card-item:hover .card-overlay {
    background-color: rgba(130, 202, 255, 0.6);
}

.card-text-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 20px;
    text-align: center;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.humanity-card-item:hover .card-text-content {
    opacity: 1;
    transform: translateY(0);
}

.card-text-content h3 {
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.card-text-content p {
    font-size: 1.1em;
    line-height: 1.6;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.card-footer {
    padding: 25px 20px;
    background-color: red;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
}

.card-footer.footer-alt-bg {
    background-color: #1e88e5;
    color: white;
    font-size: 20px;
}

.humanity-card-item:hover .card-footer {
    background-color: red;
}

.humanity-card-item:hover .card-footer.footer-alt-bg {
    background-color: #1e88e5;
}

.humanity-card-animate-hidden {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
}

.humanity-card-animate-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

@media (max-width: 992px) {
    .humanity-section {
        padding: 80px 5%;
    }

    .section-title {
        font-size: 2.5em;
    }

    .humanity-card-item {
        max-width: 100%;
        width: 48%;
    }

    .card-image-area {
        height: 240px;
    }
}

@media (max-width: 768px) {
    .humanity-section {
        padding: 60px 4%;
    }

    .section-title {
        font-size: 2em;
    }

    .cards-container {
        flex-direction: column;
    }

    .humanity-card-item {
        width: 100%;
        max-width: 100%;
    }

    .card-image-area {
        height: 200px;
    }

    .card-text-content h3 {
        font-size: 1.6em;
    }

    .card-text-content p {
        font-size: 1em;
    }
}

@media (max-width: 480px) {
    .humanity-section {
        padding: 40px 3%;
    }

    .section-title {
        font-size: 1.6em;
    }

    .card-image-area {
        height: 160px;
    }

    .card-text-content h3 {
        font-size: 1.3em;
    }

    .card-text-content p {
        font-size: 0.9em;
    }

    .card-footer {
        font-size: 0.85em;
        padding: 10px 12px;
    }
}
</style>
