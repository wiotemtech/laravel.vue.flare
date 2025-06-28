<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cards = ref([
    {
        title: "Voices of Change",
        text: "We advocate for vulnerable populations...",
        icon: "fas fa-bullhorn",
    },
    {
        title: "Be the Change",
        text: "We encourage individuals to lead by example...",
        icon: "fas fa-hand-holding-heart",
    },
    {
        title: "Empower Communities",
        text: "Together We Can emphasizes the power of unity...",
        icon: "fas fa-users",
    },
    {
        title: "Together We Rise",
        text: "Together We Can Rise reflects our belief in unity...",
        icon: "fas fa-hands-holding-child",
    },
]);

const cardRefs = ref([]);
let observers = [];

onMounted(() => {
    const options = { threshold: 0.3 };

    cardRefs.value.forEach((el, idx) => {
        el.classList.add("hidden-card");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible-card");
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(el);
        observers.push(observer);
    });
});

onUnmounted(() => {
    observers.forEach((observer, idx) => {
        if (cardRefs.value[idx]) observer.unobserve(cardRefs.value[idx]);
        observer.disconnect();
    });
});
</script>

<template>
    <section class="impact-section">
        <h2 class="section-title">Our Impact Pillars</h2>
        <div class="cards-wrapper">
            <div
                class="impact-card"
                v-for="(card, index) in cards"
                :key="index"
                :ref="(el) => (cardRefs[index] = el)"
                :style="{ animationDelay: `${index * 0.2}s` }"
            >
                <i :class="card.icon" class="card-icon"></i>
                <h3>{{ card.title }}</h3>
                <p>{{ card.text }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.impact-section {
    padding: 60px 20px;
    background: #f7fafd;
    text-align: center;
}

body.dark-theme-body .impact-section {
    background-color: #111;
}

.section-title {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: bold;
    color: red;
}

.cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.impact-card {
    background: #fff;
    border-radius: 16px;
    padding: 25px;
    width: 100%;
    max-width: 280px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s, box-shadow 0.4s;
    opacity: 0;
    transform: translateY(50px);
}

body.dark-theme-body .impact-card {
    background-color: #1e88e5;
}

.impact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.card-icon {
    font-size: 3rem;
    color: red;
    margin-bottom: 15px;
}

.impact-card h3 {
    font-size: 1.3rem;
    color: #1e88e5;
    margin-bottom: 10px;
    font-weight: 600;
}

body.dark-theme-body .impact-card h3 {
    color: white;
}

.impact-card p {
    font-size: 1rem;
    color: #444;
    line-height: 1.5;
}

.hidden-card {
    opacity: 0;
    transform: translateY(60px);
}

.visible-card {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

@media (min-width: 768px) {
    .impact-card {
        flex: 1 1 calc(50% - 40px);
    }
}

@media (min-width: 1024px) {
    .impact-card {
        flex: 1 1 calc(25% - 40px);
    }
}
</style>
