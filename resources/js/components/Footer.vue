<script setup>
import { ref } from "vue";

const isDarkMode = ref(false);
</script>

<template>
    <footer
        class="footer-custom text-light"
        :class="{ 'dark-theme': isDarkMode }"
    >
        <div class="container">
            <div class="row text-md-start text-center">
                <div class="col-md-4 mb-4">
                    <img
                        src="/public/assets/images/flare.png"
                        alt="Logo"
                        class="footer-logo"
                    />
                    <h6 class="text-uppercase">
                        FLARE INTERNATIONAL FOUNDATION
                    </h6>
                    <p>" partner with us in making a difference."</p>

                    <div style="margin-left: -9px" class="button-group">
                        <router-link
                            to="/contact-us"
                            id="one"
                            class="download-btn"
                            >Partner with us</router-link
                        >

                        <!--

                        <a href="#" id="two" class="story-btn"
                            >Donate to support</a
                        >
                    --></div>
                </div>

                <div class="col-md-2 mb-4">
                    <h6>Quick Links</h6>
                    <p><a href="#">Home</a></p>

                    <p><a href="#">Gallery</a></p>
                    <p><a href="#">Volunteer with us</a></p>
                    <p><a href="#">Donate to us</a></p>
                    <p><a href="#">Contact-us</a></p>
                </div>

                <div class="col-md-3 mb-4">
                    <h6>Top Programs</h6>
                    <p><a href="#">Health Care</a></p>
                    <p><a href="#">Environmental Protection</a></p>
                    <p><a href="#">Education and Training</a></p>
                    <p><a href="#">Support and Relief</a></p>
                    <p><a href="#">Voices of Change</a></p>
                </div>

                <div class="col-md-3 mb-4">
                    <h6>Contact</h6>
                    <p>
                        <i class="fas fa-map-marker-alt me-2"></i>Junior
                        Quarters,Lira city west Division,lira cityJunior
                        Quarters,Lira city west Division,lira city
                    </p>
                    <p>
                        <i class="fas fa-envelope me-2"></i
                        >flareinternationalfoundation@gmail.com
                    </p>
                    <p><i class="fas fa-phone me-2"></i>+256-392-995-534</p>

                    <h5>Follow us</h5>

                    <div class="social-icons d-flex mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-x-twitter"></i></a>

                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom text-center mt-4">
                <p class="mb-0">
                    &copy; 2025 Flare International Foundation. All Rights
                    Reserved. <br />Developed by
                    <a
                        href="https://www.cotiafrica.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >CodeToInnovate Africa</a
                    >
                </p>
            </div>
        </div>

        <div
            class="fixed-bottom-right"
            style="margin-bottom: 70px; right: 20px"
        >
            <a
                class="twitter-dm-button w3-btn w3-green floating-icon"
                href="https://wa.me/256-778-077-765"
            >
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>

        <div
            class="fixed-bottom-right"
            style="bottom: 80px; right: 80px; margin-bottom: 10px"
        >
            <!--
                    <a
                        class="twitter-dm-button w3-btn w3-black floating-icon"
                        href="https://x.com/RuralAgroNet?t=2H8Iq0QbfPWcgZWlQxnYdA&s=09"
                    >
                        <i class="fab fa-x-twitter"></i>
                    </a>

                -->
        </div>
    </footer>
</template>

<style scoped>
.footer-custom {
    background-color: #1e88e5;
    color: #eee;
    padding-top: 60px;
    padding-bottom: 30px;
    border-top: 35px solid red;
}

body.dark-theme-body .footer-custom {
    background-color: #222;

    border-top: 35px solid #1e88e5;
}

.footer-custom h6 {
    color: #fff;
    font-size: 19px;
    font-weight: bold;
    position: relative;
    margin-bottom: 1rem;
}

.footer-custom h6::after {
    content: "";
    width: 40px;
    height: 2px;
    display: block;
    margin-top: 8px;
}

body.dark-theme-body .footer-custom h6::after {
    content: "";
    width: 40px;
    height: 2px;
    display: block;
    margin-top: 8px;
}

.footer-custom a {
    color: white;
    text-decoration: none;
}

.footer-custom a:hover {
    color: #1e88e5;
}

.footer-logo {
    max-width: 90px;
    margin-bottom: 15px;
}

.social-icons a {
    color: white;
    font-size: 1.2rem;
    margin-right: 15px;
    transition: color 0.3s ease;
}

body.dark-theme-body .social-icons a {
    color: white;
}

.social-icons a:hover {
    color: #1e88e5;
}

body.dark-theme-body .social-icons a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid white;
    margin-top: 30px;
    padding-top: 15px;
    font-size: 0.9rem;
}

@media (max-width: 576px) {
    .footer-custom {
        text-align: center;
    }

    .footer-logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
    }

    .social-icons {
        justify-content: center !important;
    }

    .footer-custom h6::after {
        margin-left: auto;
        margin-right: auto;
    }
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
}

.button-group a {
    display: block;
    width: 100%;
    text-decoration: none;
    padding: 14px 28px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.1em;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center;
}

#one {
    color: white;
}

#one:hover {
    color: #1e88e5;
    font-weight: bold;
}

.download-btn {
    border: 2px solid white;
    color: black;
}

body.dark-theme-body .download-btn {
    border: 2px solid #1e88e5;
}

.download-btn:hover {
    background-color: white;
    color: #1e88e5;
    transform: translateY(-2px);
}

#two {
    color: #1e88e5;
}

.story-btn {
    background-color: white;
    color: #fff;
}

body.dark-theme-body .story-btn {
    background-color: #1e88e5;
    color: white;
}

body.dark-theme-body #two {
    color: white;
}

.story-btn:hover {
    background-color: white;
    transform: translateY(-2px);
}

@media (max-width: 600px) {
    .button-group {
        padding: 0.5rem;
    }

    .button-group a {
        font-size: 1em;
        padding: 12px 24px;
    }
}

.fixed-bottom-right {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 1000;
}

.floating-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: white;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.w3-btn {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    background-color: transparent;
}

.w3-green {
    background-color: #4caf50 !important;
}

.w3-black {
    background-color: #000 !important;
}
</style>
