<template>
  <section class="testimonials-section">
    <div class="container">
      <h1>Watch Our Testimonies</h1>

      <div class="video-grid">
        <div v-for="videoItem in testimonials" :key="videoItem.id" class="video-wrapper">
          <div class="video-embed-container">
            <iframe
              :src="videoItem.embedUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="testimonial-iframe"
              :title="videoItem.caption"
            ></iframe>
          </div>
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
    // Use the YouTube embed URL format: https://www.youtube.com/embed/VIDEO_ID
    // Replace VIDEO_ID with the actual ID from your YouTube video URL
    // Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
    embedUrl: "https://www.youtube.com/embed/8qOpx6L-KAM", // Replace with your actual YouTube embed URL
    caption: "A Story of Transformation and Hope.",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/cTeka5JBU-c", // Replace with your actual YouTube embed URL
    caption: "Hear the Impact on Our Community.",
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/XF94SGd9mN4", // Replace with your actual YouTube embed URL
    caption: "Witness the Change We're Making.",
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
  /*background-color: red;  Using the same color as the h1 for consistency */
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


.video-embed-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.testimonial-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0; 
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