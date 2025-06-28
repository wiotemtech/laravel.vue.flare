<template>
    <section class="testimonials-section">
        <div class="container">
            <h1>Watch Our Testimonies</h1>

            <div class="video-grid">
                <div
                    v-for="videoItem in testimonials"
                    :key="videoItem.id"
                    class="video-wrapper"
                >
                    <video
                        controls
                        :src="videoItem.src"
                        preload="metadata"
                        class="testimonial-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <p class="video-caption">{{ videoItem.caption }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const testimonials = ref([
    {
        id: 1,

        src: "/assets/images/washingv.mp4",
        caption: "Direct Call to Action ",
    },
    {
        id: 2,
        src: "/assets/images/cap.mp4",
        caption: "Emphasizing Transformation and Hope.",
    },
    {
        id: 3,
        src: "/assets/images/tree.mp4",
        caption: "Focusing on Impact and Community.",
    },
]);
</script>

<style scoped>
.testimonials-section {
    padding: 80px 0;
    background-color: #f9f9f9;
    text-align: center;
    font-family: "Arial", sans-serif;
}

body.dark-theme-body .testimonials-section {
    background-color: #111;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1 {
    font-size: 30px;
    font-weight: bold;
    color: red;
    margin-bottom: 60px;
    position: relative;
    display: inline-block;
}

h1::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;

    border-radius: 2px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    justify-content: center;
    align-items: start;
}

.video-wrapper {
    background-color: #1e88e5;
    color: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.video-wrapper:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.testimonial-video {
    width: 100%;
    aspect-ratio: 16 / 9;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.video-caption {
    padding: 20px;
    font-size: 18px;
    color: white;
    line-height: 1.5;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5em;
        margin-bottom: 40px;
    }

    .testimonials-section {
        padding: 60px 0;
    }

    .video-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 2em;
    }

    .video-caption {
        font-size: 1em;
        padding: 15px;
    }
}
</style>
