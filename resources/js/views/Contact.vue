<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  isDarkMode: { type: Boolean, default: false },
});

// Contact Form State
const formName = ref("");
const formEmail = ref("");
const formMessage = ref("");
const isSubmitting = ref(false);
const showSuccessToast = ref(false);
const toastMessage = ref("");

// Email validation regex + non-empty validations
const isFormValid = computed(() => {
  return formName.value.trim() !== "" && 
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail.value.trim()) && 
         formMessage.value.trim().length >= 10;
});

const submitForm = async () => {
  if (!isFormValid.value || isSubmitting.value) return;
  isSubmitting.value = true;
  
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  isSubmitting.value = false;
  toastMessage.value = "Message Sent! Thank you, we have received your submission.";
  showSuccessToast.value = true;
  
  formName.value = "";
  formEmail.value = "";
  formMessage.value = "";
  
  setTimeout(() => { showSuccessToast.value = false; }, 4000);
};

// Copy to Clipboard Utility
const copiedItem = ref("");
const copyToClipboard = (text, itemName) => {
  navigator.clipboard.writeText(text).then(() => {
    copiedItem.value = itemName;
    setTimeout(() => {
      copiedItem.value = "";
    }, 2000);
  });
};

// Intersection Observer for Animate-on-Scroll
let observer = null;
onMounted(() => {
  const options = {
    root: null,
    threshold: 0.1, // Trigger when 10% of the card is visible
    rootMargin: "0px 0px -50px 0px"
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        // Unobserve once animated if you only want it to animate once
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Target all bento cards and hero text elements
  const animTargets = document.querySelectorAll(".reveal-on-scroll");
  animTargets.forEach(el => observer.observe(el));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="contact-page" :class="{ 'dark-mode': isDarkMode }">
    <!-- Centered Hero Section with Darkened Image Background -->
    <section class="hero-section">
      <div class="hero-bg-media"></div>
      <div class="grid-pattern"></div>
      <div class="glow-overlay"></div>

      <div class="hero-content reveal-on-scroll reveal-fade">
        <span class="badge">Contact Us</span>
        <h1>Let's build something <span class="gradient-text">meaningful</span> together</h1>
        <p>Connecting Environments, Health,Education, and Community Engagement.</p>
      </div>
    </section>

    <!-- Bento-Grid Layout Contact & Donation Section -->
    <section class="contact-wrapper">
      <div class="bento-grid">
        
        <!-- Card 1: Interactive Information Block (Left) -->
        <div class="bento-card info-card reveal-on-scroll reveal-left">
          <div class="card-glow"></div>
          <div class="card-content">
            <span class="card-tag">Contact Info</span>
            <h2>Get In Touch</h2>
            <p class="subtitle">Have questions or want to collaborate? Reach out to our teams directly.</p>
            
            <div class="contact-list">
              <a href="https://maps.google.com/?q=Junior+Quarters,+Lira+City+West+Division,+Lira+City" target="_blank" class="contact-item">
                <div class="icon-wrapper">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="item-text">
                  <span class="label">Our Headquarters</span>
                  <span class="value">Junior Quarters, Lira City West Division, Lira City</span>
                </div>
              </a>

              <a href="tel:+256392995534" class="contact-item">
                <div class="icon-wrapper">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="item-text">
                  <span class="label">Call Us Directly</span>
                  <span class="value">+256 (392) 995-534</span>
                </div>
              </a>

              <a href="mailto:flareinternationalfoundation@gmail.com" class="contact-item">
                <div class="icon-wrapper">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="item-text">
                  <span class="label">Email Address</span>
                  <span class="value">flareinternationalfoundation@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Card 2: Immersive Form Block (Right) -->
        <div class="bento-card form-card reveal-on-scroll reveal-right">
          <div class="card-content">
            <span class="card-tag">Direct Inquiry</span>
            <h2>Send a Message</h2>
            <p class="subtitle font-sm">Drop us a line and we'll respond within 24 business hours.</p>

            <form @submit.prevent="submitForm" class="interactive-form">
              <div class="input-container" :class="{ 'has-value': formName }">
                <input type="text" id="name" v-model="formName" required autocomplete="off" />
                <label for="name">Your Full Name</label>
                <span class="focus-border"></span>
              </div>

              <div class="input-container" :class="{ 'has-value': formEmail }">
                <input type="email" id="email" v-model="formEmail" required autocomplete="off" />
                <label for="email">Your Email Address</label>
                <span class="focus-border"></span>
              </div>

              <div class="input-container textarea-container" :class="{ 'has-value': formMessage }">
                <textarea id="message" v-model="formMessage" required rows="4"></textarea>
                <label for="message">How can we help you today?</label>
                <span class="focus-border"></span>
              </div>

              <button type="submit" class="modern-submit-btn">
                <span v-if="isSubmitting" class="loader"></span>
                <span v-else>Submit Request <i class="fas fa-arrow-right icon-arrow"></i></span>
              </button>
            </form>
          </div>
        </div>

        <!-- Card 3: Split-Layout Donation Block (Hidden) -->
        <template v-if="false">
          <div class="bento-card donation-card reveal-on-scroll reveal-bottom">
             <!-- Donation code remains here if you need to toggle it back -->
          </div>
        </template>

        <!-- Card 4: Immersive Map Block (Bottom - Full Width) -->
        <div class="bento-card map-card reveal-on-scroll reveal-bottom">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.77583685608!2d32.88373685!3d2.2536448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771b9c97805178b%3A0x8677c7d0d0f5e71!2sLira!5e0!3m2!1sen!2sug!4v1715000000000" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>

      </div>
    </section>

    <!-- Success Toast Notification -->
    <Transition name="toast-slide">
      <div v-if="showSuccessToast" class="success-toast">
        <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
        <div class="toast-body">
          <span class="toast-title">Message Received</span>
          <span class="toast-desc">{{ toastMessage }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Theme Variables & Tokens */
.contact-page {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --primary-rgb: 37, 99, 235;
  --surface: #ffffff;
  --surface-secondary: #f8fafc;
  --bg: #f1f5f9;
  --text: #0f172a;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --glow: rgba(37, 99, 235, 0.05);
  
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  transition: background-color 0.4s ease, color 0.4s ease;
  overflow-x: hidden;
}

.contact-page.dark-mode {
  --primary: #3b82f6;
  --primary-hover: #60a5fa;
  --primary-rgb: 59, 130, 246;
  --surface: #0f172a;
  --surface-secondary: #1e293b;
  --bg: #020617;
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --border: #1e293b;
  --glow: rgba(59, 130, 246, 0.08);
}

/* Scroll Animation Classes */
.reveal-on-scroll {
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
  will-change: transform, opacity;
}

.reveal-fade {
  transform: translateY(10px);
}

.reveal-left {
  transform: translateX(-30px);
}

.reveal-right {
  transform: translateX(30px);
}

.reveal-bottom {
  transform: translateY(40px);
}

/* Visibility Trigger Class */
.reveal-on-scroll.reveal-visible {
  opacity: 1;
  transform: translate(0) scale(1);
}

/* Immersive Darkened Hero Section */
.hero-section {
  position: relative;
  
  height:50vh;
  min-height: 45px;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 
  text-align: center;      
  padding: 0 24px;
  background-color: #020617; 
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  z-index: 1;
}

.hero-bg-media {
  position: absolute;
  inset: 0;
  background-image: url('/assets/images/fight.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.45; 
  z-index: -3;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0);
  background-size: 24px 24px;
  opacity: 0.25; 
  z-index: -2;
}

.glow-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.9) 85%),
              linear-gradient(to bottom, rgba(2, 6, 23, 0.5), rgba(2, 6, 23, 0.95));
  z-index: -1;
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6));
}

.badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.hero-content h1 {
  font-size: clamp(2.3rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(135deg, #60a5fa,#60a5fa); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(96, 165, 250, 0.25); 
}

.hero-content p {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #94a3b8; 
  max-width: 600px;
  margin: 0 auto;
}

/* Bento Grid System Structure */
.contact-wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 24px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Bento Cards Design */
.bento-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  z-index: 10;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), 
              box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), 
              border-color 0.3s ease;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
  border-color: rgba(var(--primary-rgb), 0.3);
}

.dark-mode .bento-card:hover {
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}

.card-content {
  position: relative;
  padding: 48px;
  z-index: 15;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.bento-card h2 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}

.subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 40px;
}

.font-sm {
  font-size: 0.95rem;
  margin-bottom: 30px;
}

/* Card Mappings */
.info-card {
  grid-column: span 5;
}

.form-card {
  grid-column: span 7;
}

.map-card {
  grid-column: span 12;
  height: 450px;
  min-height: 350px;
}

/* Card Glow Effect */
.card-glow {
  position: absolute;
  top: -150px;
  left: -150px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

/* Contact List Layout */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 16px;
  border-radius: 16px;
  background: var(--surface-secondary);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.contact-item:hover {
  background: var(--surface);
  border-color: var(--border);
  transform: translateX(6px);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.item-text {
  display: flex;
  flex-direction: column;
}

.item-text .label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.item-text .value {
  font-weight: 500;
  line-height: 1.4;
}

/* Interactive Form with Floating Labels */
.interactive-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  z-index: 20;
}

.textarea-container, .modern-submit-btn {
  grid-column: span 2;
}

.input-container {
  position: relative;
  width: 100%;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 24px 16px 8px 16px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text);
  background: var(--surface-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input-container textarea {
  resize: vertical;
}

.input-container label {
  position: absolute;
  left: 16px;
  top: 18px;
  color: var(--text-muted);
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none;
}

.input-container input:focus ~ label,
.input-container textarea:focus ~ label,
.input-container.has-value label {
  top: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary);
}

.input-container input:focus,
.input-container textarea:focus {
  background: var(--surface);
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
}

/* Modern Dynamic Submit Button */
.modern-submit-btn {
  position: relative;
  width: 100%;
  padding: 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s ease;
  z-index: 30;
}

.modern-submit-btn:hover:not(:disabled) {
  background: var(--primary-hover);
  box-shadow: 0 8px 24px -6px rgba(var(--primary-rgb), 0.5);
}

.modern-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon-arrow {
  transition: transform 0.2s ease;
}

.modern-submit-btn:hover:not(:disabled) .icon-arrow {
  transform: translateX(4px);
}

/* Custom CSS Spinner */
.loader {
  width: 22px;
  height: 22px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Notification Toast */
.success-toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 20px 45px -10px rgba(16, 185, 129, 0.4);
  z-index: 1000;
}

.dark-mode .success-toast {
  background: #059669;
}

.toast-icon {
  font-size: 1.5rem;
}

.toast-body {
  display: flex;
  flex-direction: column;
}

.toast-title {
  font-weight: 700;
  font-size: 0.95rem;
}

.toast-desc {
  font-size: 0.8rem;
  opacity: 0.9;
}

/* Vue Slide Transitions */
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toast-slide-enter-from {
  transform: translateY(100px) scale(0.9);
  opacity: 0;
}

.toast-slide-leave-to {
  transform: translateY(20px) scale(0.9);
  opacity: 0;
}

/* Responsive Styling Adaptations */
@media (max-width: 1024px) {
  .info-card, .form-card {
    grid-column: span 12;
  }
  
  .map-card {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .bento-grid {
    gap: 16px;
  }
  
  .map-card {
    min-height: 300px;
    height: 350px;
  }
  
  .interactive-form {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .textarea-container, .modern-submit-btn {
    grid-column: span 1;
  }
  
  .card-content {
    padding: 32px 24px;
  }
  
  .contact-wrapper {
    padding: 40px 16px;
  }
}
</style>