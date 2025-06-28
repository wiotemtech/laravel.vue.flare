<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const volunteerImageRef = ref(null);
const volunteerTitleRef = ref(null);
const volunteerDescriptionRef = ref(null);
const volunteerButtonsRef = ref(null);

let observers = [];

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observeElement = (elementRef, animationClass, delay = "0s") => {
        const element = elementRef.value;
        if (element) {
            element.classList.add("volunteer-animate-hidden");
            element.style.transitionDelay = delay;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            observer.observe(element);
            observers.push(observer);
        }
    };

    observeElement(volunteerImageRef, "volunteer-image-animate-visible", "0s");
    observeElement(
        volunteerTitleRef,
        "volunteer-title-animate-visible",
        "0.2s"
    );
    observeElement(
        volunteerDescriptionRef,
        "volunteer-description-animate-visible",
        "0.4s"
    );
    observeElement(
        volunteerButtonsRef,
        "volunteer-buttons-animate-visible",
        "0.6s"
    );
});

onUnmounted(() => {
    observers.forEach((observer) => observer.disconnect());
});
</script>

<template>
    <section
        class="volunteer-with-us-section"
        :class="{ 'dark-theme': props.isDarkMode }"
    >
        <div class="content-wrapper">
            <div class="image-column" ref="volunteerImageRef">
                <img
                    src="/public/assets/images/flare.png"
                    alt="Volunteers making a positive impact"
                    class="volunteer-image"
                />
            </div>

            <div class="text-column">
                <h2 class="section-title" ref="volunteerTitleRef">
                    Volunteer With Us: Be The Change
                </h2>
                <p class="section-description" ref="volunteerDescriptionRef">
                    Your time and passion can transform lives. Join our
                    dedicated team of volunteers and become a catalyst for
                    positive change in Northern Uganda. From community outreach
                    and education to healthcare support and environmental
                    initiatives, there's a role for every skill and heart. Make
                    a tangible difference today.
                </p>
                <div class="button-group" ref="volunteerButtonsRef">
                    <a href="#explore-roles" class="btn volunteer-btn-primary"
                        >Explore Roles</a
                    >
                    <a href="#apply-now" class="btn volunteer-btn-outline"
                        >Apply Now</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.volunteer-with-us-section {
    padding: 20px 8%;
    background-color: #e8f5e9;
    color: #333;
    transition: background-color 0.4s ease, color 0.4s ease;
    text-align: center;
    overflow: hidden;
}

body.dark-theme-body .volunteer-with-us-section {
    background-color: #111;
}

.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    text-align: left;
}

@media (min-width: 992px) {
    .content-wrapper {
        flex-direction: row;
        justify-content: space-between;
        gap: 80px;
    }

    .image-column,
    .text-column {
        flex: 1;
        max-width: 50%;
    }

    .image-column {
        order: 1;
    }
    .text-column {
        order: 2;
    }
}

.image-column {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;

    opacity: 0;
    transform: translateX(-50px) scale(0.95);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.volunteer-image {
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    display: block;
}

.text-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    position: relative;
}

.section-title {
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin-bottom: 25px;
    line-height: 1.2;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-description {
    font-size: 1.2em;
    line-height: 1.7;
    color: #555;
    margin-bottom: 40px;

    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Add transition for animation */
}

.button-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Add transition for animation */
}

.btn {
    padding: 14px 30px;
    font-size: 1.05em;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    cursor: pointer;
}

.volunteer-btn-primary {
    background-color: #1e88e5;
    color: #fff;
    border: 2px solid white;
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.2);
}

.volunteer-btn-primary:hover {
    background-color: white;
    color: #1e88e5;
    border-color: #1e88e5;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(76, 175, 80, 0.3);
}

.volunteer-btn-outline {
    background-color: transparent;
    color: #1e88e5;
    border: 2px solid #1e88e5;
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.1);
}

.volunteer-btn-outline:hover {
    background-color: #1e88e5;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(76, 175, 80, 0.2);
}

.volunteer-animate-hidden {
    opacity: 0;
    filter: blur(5px);
}

.volunteer-image-animate-visible {
    opacity: 1;
    transform: translateX(0) scale(1);
}

.volunteer-title-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

.volunteer-description-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

.volunteer-buttons-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

@media (max-width: 991px) {
    .volunteer-with-us-section {
        padding: 80px 5%;
    }
    .content-wrapper {
        gap: 40px;
        text-align: center;
    }
    .section-title {
        font-size: 3em;
        margin-bottom: 20px;
    }
    .section-description {
        font-size: 1.1em;
        margin-bottom: 30px;
    }
    .volunteer-image {
        max-height: 400px;
    }
}

@media (max-width: 767px) {
    .volunteer-with-us-section {
        padding: 60px 4%;
    }
    .section-title {
        font-size: 2.5em;
    }
    .section-description {
        font-size: 1em;
    }
    .button-group {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .btn {
        width: 100%;
        max-width: 280px;
        font-size: 0.95em;
        padding: 12px 25px;
    }
    .volunteer-image {
        max-height: 300px;
    }
}

@media (max-width: 575px) {
    .volunteer-with-us-section {
        padding: 40px 3%;
    }
    .section-title {
        font-size: 2em;
    }
    .section-description {
        font-size: 0.9em;
    }
    .btn {
        max-width: 250px;
        padding: 10px 20px;
    }
}
</style>
