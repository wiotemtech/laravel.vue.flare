<template>
  <div class="contact-page">
    <div class="container">
      <span class="title">Get in Touch</span>
      <p class="subtitle">Let's Start a Conversation</p>
      <p class="description">
        Whether you have questions about Flare International Foundation, need support, or want to explore partnerships, we're here to help you build a brighter future.
      </p>

      <div class="contact-sections three-columns">
        <div class="contact-section assistance">
          <div class="icon">&#128231;</div>
          <h3 class="section-title">For Assistance</h3>
          <p class="section-text">
          Need help or have questions about our programs?
          </p>
          <a :href="`mailto:${contactInfo.assistance}`" class="contact-link">{{
            contactInfo.assistance
          }}</a>
        </div>

        <div class="contact-section careers">
          <div class="icon">&#128100;</div>
          <h3 class="section-title">For Careers</h3>
          <p class="section-text">
            Interested in joining our team? We're always looking for dedicated individuals.
          </p>
          <a :href="`mailto:${contactInfo.careers}`" class="contact-link">{{
            contactInfo.careers
          }}</a>
        </div>

        <div class="contact-section everything-else">
          <div class="icon">&#128172;</div>
          <h3 class="section-title">Everything Else</h3>
          <p class="section-text">
            Media inquiries? Want to partner with us? We'll respond within 24 hours.
          </p>
          <a :href="`mailto:${contactInfo.everythingElse}`" class="contact-link">{{
            contactInfo.everythingElse
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const contactInfo = reactive({
  assistance: 'flareinternationalfoundation@gmail.com',
  careers: 'flareinternationalfoundation@gmail.com',
  everythingElse: 'flareinternationalfoundation@gmail.com'
});
</script>

<style scoped>
/* Scoped styles ensure that these CSS rules only apply to this component */
.contact-page {
  padding: 4rem 0;
  text-align: center;
  font-family: sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background-color: lightblue;
  padding: 6px;
  border-radius: 8px;
}

body.dark-theme-body .title {
    color: white;
}

.subtitle {
  font-size: 3.9rem;
  font-weight: bold;
  color: black;
  margin-bottom: 2rem;
}

body.dark-theme-body .subtitle {
    color: white;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
}

body.dark-theme-body .description {
    color: white;
}

.contact-sections {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.three-columns {
  flex-direction: row;
}

.contact-section {
  flex: 1 1 300px;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #eee;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.contact-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-section.assistance {
  background-color: #e6f7ff; /* Light blue */
}

.contact-section.careers {
  background-color: #f0f0e0; /* Light beige */
}

.contact-section.everything-else {
  background-color: #e8f5e9; /* Light green */
}

.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.section-title {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.section-text {
  margin-bottom: 1rem;
}

.contact-link {
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .contact-sections {
    flex-direction: column;
  }
}
</style>