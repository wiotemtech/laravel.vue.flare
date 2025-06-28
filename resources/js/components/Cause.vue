<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const causes = ref([
    {
        title: "Support and Relief",
        image: "/assets/images/relief.jpg",
        description:
            "Provide basic necessities such as food, clothing, and shelter to the most vulnerable individuals, including orphans, the elderly, and persons with disabilities.",
    },
    {
        title: "Education and Training",
        image: "/assets/images/educ2.jpg",
        description:
            "Facilitate access to quality education for underprivileged children and youth, including scholarships, school supplies, and mentorship programs.",
    },
    {
        title: "Health Care",
        image: "/assets/images/heal.jpg",
        description:
            "Facilitate access to essential healthcare services for vulnerable communities, including medical camps, immunizations, and health education programs among others..",
    },
    {
        title: "Environmental Protection",
        image: "/assets/images/environ.jpg",
        description:
            "Environmental protection Through horticulture like bee keeping, using ecosystem which is sustainable and by planting more tree to upgrade our climate",
    },

    {
        title: "Economic Empowerment",
        image: "/assets/images/econ.jpg",
        description:
            " Implement income-generating projects and vocational training programs to enhance the livelihoods of vulnerable populations.Support small-scale entrepreneurship and self-reliance initiatives.",
    },

    {
        title: "Advocacy and Social Inclusion",
        image: "/assets/images/advoc.jpg",
        description:
            " Advocate for the rights and inclusion of marginalized groups, including women, children, and persons with disabilities.Collaborate with local and international partners to influence policies that promote social justice and equality.",
    },
]);

const cardRefs = ref([]);
let cardObservers = [];

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    cardRefs.value.forEach((cardElement, index) => {
        cardElement.classList.add("cause-card-animate-hidden");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("cause-card-animate-visible");
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
    <div class="container my-5 causes-section">
        <h2 class="section-title text-center mb-5">Our Cause</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div
                class="col"
                v-for="(cause, index) in causes"
                :key="index"
                :ref="
                    (el) => {
                        if (el) cardRefs[index] = el;
                    }
                "
                :style="{ 'animation-delay': `${index * 0.1}s` }"
            >
                <div class="card h-100 shadow-sm cause-card">
                    <img
                        :src="cause.image"
                        class="card-img-top"
                        :alt="cause.title"
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ cause.title }}</h5>
                        <p class="card-text">{{ cause.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-body h5 {
    font-size: 20px;
    color: #1e88e5;
}
.causes-section {
    padding: 0px 0;
}

.section-title {
    font-size: 30px;
    font-weight: bold;
    color: red;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    height: 180px;
    object-fit: cover;
}

.cause-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
}

body.dark-theme-body .cause-card {
    background-color: #111;
    border: 2px solid #1e88e5;
}

.cause-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

body.dark-theme-body .card-body p {
    color: white;
}

.cause-card-animate-hidden {
    opacity: 0;
    transform: translateY(50px);
    filter: blur(5px);
}

.cause-card-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out,
        filter 0.6s ease-out;
}
</style>
