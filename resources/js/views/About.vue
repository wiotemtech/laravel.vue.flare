<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mission from "../components/mission.vue";
import Team from "../components/Team.vue";
import Volunteer from "../components/Volunteer.vue";
import Video from "../components/Video.vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const imageElement = ref(null);
const contentElement = ref(null);

let imageObserver;
let contentObserver;

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible-left");

                imageObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contentObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible-right");

                contentObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (imageElement.value) {
        imageElement.value.classList.add("animate-hidden-left");
        imageObserver.observe(imageElement.value);
    }
    if (contentElement.value) {
        contentElement.value.classList.add("animate-hidden-right");
        contentObserver.observe(contentElement.value);
    }
});

onUnmounted(() => {
    if (imageObserver && imageElement.value) {
        imageObserver.unobserve(imageElement.value);
    }
    if (contentObserver && contentElement.value) {
        contentObserver.unobserve(contentElement.value);
    }
});
</script>

<template>
    <section
        :class="{ 'dark-theme-events': isDarkMode }"
        style="background-image: url('/assets/images/fight.jpg')"
        class="landing-section"
    >
        <div class="overlay"></div>
        <div class="landing-content">
            <h1>About Us</h1>
        </div>
    </section>

    <section class="about-section" :class="{ 'dark-theme': props.isDarkMode }">
        <div class="about-image-container" ref="imageElement">
            <img
                src="/public/assets/images/fif.jpg"
                alt="Flare International Foundation Team"
            />
        </div>
        <div class="about-content-container" ref="contentElement">
            <h2 class="section-title">ABOUT FLARE INTERNATIONAL FOUNDATION</h2>
            <p>
                At Flare International Foundation, we are a Non-Governmental
                Organization working to transform lives across borders. While
                our roots and current operations are anchored in Uganda, where
                we work closely with the Lira City NGO Monitoring Committee, our
                vision extends far beyond these boundaries!
            </p>
            <p>
                We believe in creating lasting change that knows no geographical
                limits. At the heart of our mission is the empowerment of women
                and girls, alongside our dedication to transforming the lives of
                street-connected children and vulnerable communities. We
                champion gender equality, fight against gender-based violence
                (GBV), and create safe spaces where women and girls can thrive.
            </p>
            <h3 class="subsection-title">What drives us every day:</h3>
            <ul>
                <li>
                    Empowering girls and women through education, skills
                    training, and leadership programs
                </li>
                <li>
                    Combating gender-based violence through prevention,
                    response, and survivor support
                </li>
                <li>
                    Breaking down barriers to gender equality in communities
                </li>
                <li>
                    Rescuing and rehabilitating street-connected children,
                    giving them hope and a path to a better future
                </li>
                <li>
                    Supporting vulnerable children to access quality education
                    through our sponsorship program
                </li>
                <li>
                    Equipping out-of-school youth with hands-on skills in trades
                    like tailoring, carpentry, and agriculture
                </li>
                <li>
                    Strengthening women's economic independence through Village
                    Savings and Loan Associations (VSLA)
                </li>
            </ul>
            <p>
                We believe in the power of humanity coming together for positive
                change. Through our gender-responsive approach and collaboration
                with local leaders, schools, families, and youth groups, we're
                not just building stronger communities - we're creating a model
                for transformative change.
            </p>
        </div>
    </section>

    <mission />
    <Team />
    <Video />
    <Volunteer />
</template>

<style scoped>
.landing-section {
    position: relative;
    background-size: cover;
    background-position: center;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: -113px;

    animation: fadeIn 1.5s ease-in;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1;
}

.landing-content {
    position: relative;
    z-index: 2;
    color: #fff;
    padding-top: 10px;
    text-align: center;
}

.landing-content h1 {
    font-size: 40px;
    font-weight: bold;
    animation: slideDown 1s ease;
}

.tagline {
    font-weight: bold;
    font-size: 20px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.about-section {
    margin-top: -28px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 80px 10%;
    gap: 60px;
    background-color: #f8f8f8;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    flex-wrap: wrap;
}

body.dark-theme-body .about-section {
    background-color: #111;
}

.about-image-container {
    flex: 1.2;
    min-width: 300px;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-image-container img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    object-fit: cover;
}

.about-section.dark-theme .about-image-container img {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

.about-content-container {
    flex: 1;
    min-width: 400px;
}

.section-title {
    font-size: 30px;
    color: #007bff;
    margin-bottom: 25px;
    text-align: left;
    font-weight: bold;
    line-height: 1.2;
}

body.dark-theme-body .section-title {
    color: red;
}

.about-content-container p {
    font-size: 1.15em;
    line-height: 1.4;
    margin-bottom: 18px;
    text-align: justify;
}

body.dark-theme-body .about-content-container p {
    color: white;
}

.subsection-title {
    font-size: 30px;
    color: #1e88e5;
    margin-top: 3px;
    margin-bottom: 5px;
    text-align: left;
    font-weight: bold;
}

body.dark-theme-body .subsection-title {
    color: red;
}

.about-content-container ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 25px;
}

.about-content-container ul li {
    font-size: 1.05em;
    line-height: 1.4;
    margin-bottom: 8px;
    position: relative;
    padding-left: 25px;
}

body.dark-theme-body .about-content-container ul li {
    color: white;
}

.about-content-container ul li::before {
    content: "\2022";
    color: #007bff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: 0;
}

.about-section.dark-theme .about-content-container ul li::before {
    color: #66b3ff;
}

.animate-hidden-left {
    opacity: 0;
    transform: translateX(-80px);
    transition: opacity 1s ease-out, transform 1s ease-out; /* Smooth transition */
}
.animate-visible-left {
    opacity: 1;
    transform: translateX(0);
}

.animate-hidden-right {
    opacity: 0;
    transform: translateX(80px);
    transition: opacity 1s ease-out, transform 1s ease-out; /* Smooth transition */
}
.animate-visible-right {
    opacity: 1;
    transform: translateX(0);
}

@media (max-width: 992px) {
    .about-section {
        flex-direction: column;
        padding: 60px 8%;
        gap: 40px;
        align-items: center;
    }

    .about-image-container,
    .about-content-container {
        max-width: 100%;
        min-width: unset;
        flex: none;
        min-height: auto;
    }

    .about-image-container img {
        max-width: 70%;
        height: auto;
        margin: 0 auto;
        display: block;
    }

    .section-title,
    .subsection-title,
    .about-content-container p,
    .about-content-container ul {
        text-align: center;
    }

    .about-content-container ul {
        padding-left: 20px;
    }
    .about-content-container ul li {
        text-align: left;
    }
}

@media (max-width: 576px) {
    .about-section {
        padding: 40px 5%;
        gap: 30px;
    }

    .about-image-container img {
        max-width: 90%;
    }

    .section-title {
        font-size: 2em;
        margin-bottom: 15px;
    }

    .about-content-container p {
        font-size: 1em;
        line-height: 1.7;
        margin-bottom: 10px;
    }

    .subsection-title {
        font-size: 1.6em;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .about-content-container ul li {
        font-size: 0.95em;
        margin-bottom: 5px;
    }
}
</style>
