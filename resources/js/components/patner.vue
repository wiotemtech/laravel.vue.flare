<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const sectionTitleRef = ref(null);
const sectionDescriptionRef = ref(null);
const buttonsContainerRef = ref(null);

let observers = [];

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observeElement = (elementRef, animationClass) => {
        const element = elementRef.value;
        if (element) {
            element.classList.add("partner-animate-hidden"); // Add initial hidden class
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            }, observerOptions);
            observer.observe(element);
            observers.push(observer);
        }
    };

    observeElement(sectionTitleRef, "partner-title-animate-visible");
    observeElement(
        sectionDescriptionRef,
        "partner-description-animate-visible"
    );
    observeElement(buttonsContainerRef, "partner-buttons-animate-visible");
});

onUnmounted(() => {
    observers.forEach((observer) => observer.disconnect());
});
</script>

<template>
    <section
        class="partner-with-us-section"
        :class="{ 'dark-theme': props.isDarkMode }"
    >
        <div class="container">
            <h2 class="section-title" ref="sectionTitleRef">Partner With Us</h2>
            <p class="section-description" ref="sectionDescriptionRef">
                Join hands with us to create a lasting positive impact in
                communities across Northern Uganda and beyond. Your partnership
                empowers us to expand our reach, implement vital projects, and
                foster sustainable change. Whether you're an individual, a
                corporation, or an organization, together, we can build a
                brighter future.
            </p>
            <div class="button-group" ref="buttonsContainerRef">
                <a href="#contact" class="btn btn-primary btn-lg"
                    >Become a Partner</a
                >
                <a href="#learn-more" class="btn btn-outline-secondary btn-lg"
                    >Donate to us</a
                >
            </div>
        </div>
    </section>
</template>

<style scoped>
.partner-with-us-section {
    padding: 40px 8%;

    background-color: white;
    color: #333;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: background-color 0.4s ease, color 0.4s ease;
}

body.dark-theme-body .partner-with-us-section {
    background-color: #111;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
}
.section-title {
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin-bottom: 30px;
    line-height: 1.2;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15);
}

.section-description {
    font-size: 1.3em;
    line-height: 1.8;
    color: #555;
    margin-bottom: 50px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
}

.partner-with-us-section.dark-theme .section-description {
    color: #bbb;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.btn {
    padding: 15px 35px;
    font-size: 1.1em;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    display: inline-block;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: 2px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 123, 255, 0.3);
}

.partner-with-us-section.dark-theme .btn-primary {
    background-color: #4da6ff;
    border-color: #4da6ff;
    color: #222;
    box-shadow: 0 4px 10px rgba(77, 166, 255, 0.2);
}

.partner-with-us-section.dark-theme .btn-primary:hover {
    background-color: #1c88ff;
    border-color: #1c88ff;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(77, 166, 255, 0.4);
}

.btn-outline-secondary {
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.1);
}

.btn-outline-secondary:hover {
    background-color: #007bff;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 123, 255, 0.2);
}

.partner-with-us-section.dark-theme .btn-outline-secondary {
    color: #82caff;
    border-color: #82caff;
    box-shadow: 0 4px 10px rgba(130, 202, 255, 0.1);
}

.partner-with-us-section.dark-theme .btn-outline-secondary:hover {
    background-color: #82caff;
    color: #1a2a3a;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(130, 202, 255, 0.3);
}

.partner-animate-hidden {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(5px);
}

.partner-title-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out,
        filter 0.8s ease-out;
}

.partner-description-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
    transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s,
        filter 0.8s ease-out 0.2s;
}

.partner-buttons-animate-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
    transition: opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s,
        filter 0.8s ease-out 0.4s;
}

@media (max-width: 992px) {
    .partner-with-us-section {
        padding: 100px 5%;
    }
    .section-title {
        font-size: 3em;
    }
    .section-description {
        font-size: 1.15em;
    }
    .btn {
        padding: 12px 30px;
        font-size: 1em;
    }
}

@media (max-width: 768px) {
    .partner-with-us-section {
        padding: 80px 4%;
    }
    .section-title {
        font-size: 2.5em;
        margin-bottom: 25px;
    }
    .section-description {
        font-size: 1em;
        margin-bottom: 40px;
    }
    .button-group {
        flex-direction: column;
        gap: 15px;
    }
    .btn {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
}

@media (max-width: 480px) {
    .partner-with-us-section {
        padding: 60px 3%;
    }
    .section-title {
        font-size: 2em;
    }
    .section-description {
        font-size: 0.95em;
    }
    .btn {
        padding: 10px 25px;
        font-size: 0.9em;
    }
}
</style>
