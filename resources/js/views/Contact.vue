<script setup>
import { ref } from "vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const formName = ref("");
const formEmail = ref("");
const formSubject = ref("");
const formMessage = ref("");

const submitForm = () => {
    alert(
        "Form submission is not implemented yet. Data captured:\n" +
            `Name: ${formName.value}\n` +
            `Email: ${formEmail.value}\n` +
            `Message: ${formMessage.value}`
    );

    formName.value = "";
    formEmail.value = "";
    formSubject.value = "";
    formMessage.value = "";
};
</script>

<template>
    <div>
        <section
            :class="{ 'dark-theme-events': isDarkMode }"
            style="background-image: url('/assets/images/fight.jpg')"
            class="landing-section"
        >
            <div class="overlay"></div>
            <div class="landing-content">
                <h1>Contact Us</h1>
            </div>
        </section>

        <section
            class="contact-us-section"
            :class="{ 'dark-theme': props.isDarkMode }"
        >
            <h2 class="section-main-title">GET IN TOUCH</h2>
            <div class="contact-container">
                <div class="contact-details">
                    <h3 class="contact-title">CONTACT-US</h3>
                    <p class="contact-description">
                        Flare International Foundation. Reach out to learn more
                        or partner with us in making a difference.
                    </p>
                    <div class="contact-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span
                            >Junior Quarters,Lira city west Division,lira
                            city</span
                        >
                    </div>
                    <div class="contact-info-item">
                        <i class="fas fa-phone"></i>
                        <span>+256-392-995-534</span>
                    </div>
                    <div class="contact-info-item">
                        <i class="fas fa-envelope"></i>
                        <span>flareinternationalfoundation@gmail.com</span>
                    </div>
                </div>

                <div class="contact-form-container">
                    <form @submit.prevent="submitForm" class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    v-model="formName"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    v-model="formEmail"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea
                                id="message"
                                v-model="formMessage"
                                rows="6"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" class="send-message-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
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
    padding: 100px 10%;
    background-color: #f0f4f8;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
}

body.dark-theme-body .contact-us-section {
    background-color: #111;
}

.contact-us-section.dark-theme {
    background-color: #222b31;
    color: #eee;
}

.section-main-title {
    margin-top: -90px;
    font-size: 30px;
    color: #007bff;
    margin-bottom: 30px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-us-section.dark-theme .section-main-title {
    color: #66b3ff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.contact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

body.dark-theme-body .contact-container {
    background-color: #222;
}

.contact-details {
    flex: 1;
    min-width: 300px;
    text-align: left;
    padding: 20px;
}

.contact-title {
    font-size: 30px;
    color: red;
    margin-bottom: 25px;
    font-weight: bold;
}

.contact-description {
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #555;
}

body.dark-theme-body .contact-description {
    color: white;
}

.contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.05em;
    color: #444;
}

body.dark-theme-body .contact-info-item {
    color: white;
}

.contact-info-item i {
    font-size: 1.3em;
    color: #007bff;
    margin-right: 15px;
    width: 25px;
    text-align: center;
}

.contact-us-section.dark-theme .contact-info-item i {
    color: #66b3ff;
}

.contact-form-container {
    flex: 1.5;
    min-width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-form .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.contact-form .form-row .form-group {
    flex: 1;
    min-width: 200px;
    margin-bottom: 0;
}

.contact-form .form-group {
    margin-bottom: 25px;
    text-align: left;
}

.contact-form label {
    display: block;
    font-size: 1em;
    color: #333;
    margin-bottom: 8px;
    font-weight: bold;
}

body.dark-theme-body .contact-form label {
    color: white;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #1e88e5;
    border-radius: 8px;
    font-size: 1em;
    color: #333;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
body.dark-theme-body .contact-form input[type="text"],
body.dark-theme-body .contact-form input[type="email"],
body.dark-theme-body .contact-form textarea {
    background-color: #222;
    color: white;
}

.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    outline: none;
}

.contact-form textarea {
    resize: vertical;
}

.send-message-button {
    display: block;
    width: auto;
    padding: 15px 35px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease,
        box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
    margin-top: 20px;
    margin-left: auto;
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

@media (max-width: 992px) {
    .contact-container {
        flex-direction: column;
        padding: 20px;
        gap: 40px;
    }

    .section-main-title {
        font-size: 3em;
        margin-bottom: 50px;
    }

    .contact-details,
    .contact-form-container {
        min-width: unset;
        flex: none;
        width: 100%;
        text-align: center;
    }

    .contact-info-item {
        justify-content: center;
    }

    .contact-form .form-group {
        text-align: left;
    }

    .send-message-button {
        width: 80%;
    }

    .contact-form .form-row {
        flex-direction: column;
        gap: 25px;
    }
    .contact-form .form-row .form-group {
        min-width: unset;
    }
}

@media (max-width: 576px) {
    .contact-us-section {
        padding: 60px 5%;
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
