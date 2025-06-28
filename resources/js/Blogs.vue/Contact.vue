<script setup>
import { ref } from 'vue';

// Props to receive dark mode state from parent
const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false
    }
});

// Form data references
const formName = ref('');
const formEmail = ref('');
const formSubject = ref(''); // Subject will still exist in data but won't be used
const formMessage = ref('');

// Placeholder for form submission logic
const submitForm = () => {
    alert('Form submission is not implemented yet. Data captured:\n' +
          `Name: ${formName.value}\n` +
          `Email: ${formEmail.value}\n` +
          `Message: ${formMessage.value}`); // Removed subject from alert
    // In a real application, you would send this data to a backend server.
    // e.g., axios.post('/api/contact', { name: formName.value, email: formEmail.value, message: formMessage.value });

    // Optionally reset form fields
    formName.value = '';
    formEmail.value = '';
    formSubject.value = ''; // Resetting subject as well, though not visible
    formMessage.value = '';
};
</script>

<template>
     <section
            :class="{ 'dark-theme-events': isDarkMode }"
            style="background-image: url('/assets/images/flare.png')"
            class="landing-section"
        >
            <div class="overlay"></div>
            <div class="landing-content">
                <h1>Contact Us</h1>
                <!-- <p style="font-weight: bold; color: red">
                    "Leave No One Behind"
                </p>-->
            </div>
        </section>

    <section class="contact-us-section" :class="{ 'dark-theme': props.isDarkMode }">
        
        <h2 class="section-main-title">GET IN TOUCH</h2>
        <div class="contact-container">
            <!-- Left Column: Contact Details -->
            <div class="contact-details">
                <h3 class="contact-title">CONTACT-US</h3>
                <p class="contact-description">
                    Flare International Foundation. Reach out to learn more or partner with us in making a difference.
                </p>
                <div class="contact-info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Lira City</span>
                </div>
                <div class="contact-info-item">
                    <i class="fas fa-phone"></i>
                    <span>+256-392-995-534</span>
                </div>
                <div class="contact-info-item">
                    <i class="fas fa-envelope"></i>
                    <span>info@flareinternationalfoundation.org</span>
                </div>
            </div>

            <!-- Right Column: Contact Form -->
            <div class="contact-form-container">
                <form @submit.prevent="submitForm" class="contact-form">
                    <div class="form-row"> <!-- NEW: Wrapper for name and email -->
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" v-model="formName" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" v-model="formEmail" placeholder="Enter your email" required>
                        </div>
                    </div>
                    <!-- REMOVED: Subject form-group -->
                    <div class="form-group">
                        <label for="message">Your Message</label>
                        <textarea id="message" v-model="formMessage" rows="6" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button type="submit" class="send-message-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>
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


.contact-us-section {
    padding: 100px 10%; /* More vertical padding for a distinct section */
    background-color: #f0f4f8; /* Light blue-grey background */
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
}

.contact-us-section.dark-theme {
    background-color: #222b31; /* Darker blue-grey background */
    color: #eee;
}

.section-main-title {
    margin-top: -90px;
    font-size: 30px; /* Larger, prominent title */
    color: #007bff; /* Bright blue */
    margin-bottom: 30px; /* More space below main title */
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-us-section.dark-theme .section-main-title {
    color: #66b3ff; /* Lighter blue in dark theme */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.contact-container {
    display: flex;
    flex-wrap: wrap; /* Allow columns to wrap on smaller screens */
    gap: 60px; /* Space between the two main columns */
    justify-content: center; /* Center the columns */
    max-width: 1200px; /* Max width for the content block */
    margin: 0 auto; /* Center the entire container */
    padding: 20px; /* Inner padding for the container */
    background-color: #fff; /* White background for the inner content block */
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); /* Elevated shadow */
}

.contact-us-section.dark-theme .contact-container {
    background-color: #2c3a44; /* Darker background for the inner block */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
}

/* Contact Details Column */
.contact-details {
    flex: 1; /* Allows it to grow */
    min-width: 300px; /* Minimum width before wrapping */
    text-align: left;
    padding: 20px;
}

.contact-title {
    font-size: 30px;
    color: red; /* Green color for sub-title */
    margin-bottom: 25px;
    font-weight: bold;
}

.contact-us-section.dark-theme .contact-title {
    color: #79f291; /* Lighter green in dark theme */
}

.contact-description {
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #555;
}

.contact-us-section.dark-theme .contact-description {
    color: #ccc;
}

.contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.05em;
    color: #444;
}

.contact-us-section.dark-theme .contact-info-item {
    color: #bbb;
}

.contact-info-item i {
    font-size: 1.3em;
    color: #007bff; /* Icon color */
    margin-right: 15px;
    width: 25px; /* Fixed width for icons to align text */
    text-align: center;
}

.contact-us-section.dark-theme .contact-info-item i {
    color: #66b3ff;
}

/* Contact Form Column */
.contact-form-container {
    flex: 1.5; /* Form takes more space */
    min-width: 400px; /* Minimum width for form */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center form vertically */
}

/* NEW: Form Row for Name and Email */
.contact-form .form-row {
    display: flex;
    gap: 20px; /* Space between name and email fields */
    margin-bottom: 25px; /* Space below the row */
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.contact-form .form-row .form-group {
    flex: 1; /* Allow each form group to take equal space */
    min-width: 200px; /* Ensure they don't get too small before wrapping */
    margin-bottom: 0; /* Remove bottom margin here as form-row handles it */
}

.contact-form .form-group {
    margin-bottom: 25px; /* Applies to message field */
    text-align: left;
}

.contact-form label {
    display: block;
    font-size: 1em;
    color: #333;
    margin-bottom: 8px;
    font-weight: bold;
}

.contact-us-section.dark-theme .contact-form label {
    color: #eee;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1em;
    color: #333;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-us-section.dark-theme .contact-form input[type="text"],
.contact-us-section.dark-theme .contact-form input[type="email"],
.contact-us-section.dark-theme .contact-form textarea {
    background-color: #3a4750; /* Darker input background */
    border-color: #555;
    color: #eee;
}

.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    outline: none;
}

.contact-us-section.dark-theme .contact-form input[type="text"]:focus,
.contact-us-section.dark-theme .contact-form input[type="email"]:focus,
.contact-us-section.dark-theme .contact-form textarea:focus {
    border-color: #66b3ff;
    box-shadow: 0 0 0 3px rgba(102, 179, 255, 0.3);
}

.contact-form textarea {
    resize: vertical; /* Allow vertical resizing */
}

.send-message-button {
    display: block;
    width: auto; /* Fit content, not full width */
    padding: 15px 35px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
    margin-top: 20px; /* Space above button */
    margin-left: auto; /* Center button if it's not full width */
    margin-right: auto;
}

.send-message-button:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
}

.contact-us-section.dark-theme .send-message-button {
    background-color: #66b3ff;
    color: #222;
    box-shadow: 0 5px 15px rgba(102, 179, 255, 0.4);
}

.contact-us-section.dark-theme .send-message-button:hover {
    background-color: #4da6ff;
    box-shadow: 0 8px 20px rgba(102, 179, 255, 0.5);
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .contact-container {
        flex-direction: column; /* Stack columns vertically */
        padding: 20px;
        gap: 40px; /* Space between stacked columns */
    }

    .section-main-title {
        font-size: 3em;
        margin-bottom: 50px;
    }

    .contact-details,
    .contact-form-container {
        min-width: unset; /* Remove min-width constraints */
        flex: none; /* Remove flex properties */
        width: 100%; /* Take full width when stacked */
        text-align: center; /* Center content in stacked columns */
    }

    .contact-info-item {
        justify-content: center; /* Center icons and text horizontally */
    }

    .contact-form .form-group {
        text-align: left; /* Keep labels left-aligned within their group */
    }

    .send-message-button {
        width: 80%; /* Make button wider on mobile */
    }

    /* NEW: Mobile adjustments for form-row */
    .contact-form .form-row {
        flex-direction: column; /* Stack name and email fields vertically */
        gap: 25px; /* Space between stacked fields */
    }
    .contact-form .form-row .form-group {
        min-width: unset; /* Remove min-width for mobile */
    }
}

@media (max-width: 576px) {
    .contact-us-section {
        padding: 60px 5%; /* More compact padding for smaller screens */
    }

    .section-main-title {
        font-size: 2.5em;
        margin-bottom: 40px;
    }

    .contact-container {
        padding: 15px;
        gap: 30px;
    }

    .contact-title {
        font-size: 1.8em;
        margin-bottom: 20px;
    }

    .contact-description,
    .contact-info-item,
    .contact-form label,
    .contact-form input,
    .contact-form textarea {
        font-size: 0.95em;
    }

    .send-message-button {
        padding: 12px 25px;
        font-size: 1em;
        width: 90%;
    }
}
</style>
