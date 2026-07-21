<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Reactive State
const isDarkMode = ref(false);
const menuOpen = ref(false);
const showDropdown = ref(false);
const currentIndex = ref(0);
const slides = ref([1, 2, 3]);
let intervalId = null;

// Methods
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const closeDropdown = () => {
    showDropdown.value = false;
    closeMenu();
};

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle("dark-theme-body", isDarkMode.value);
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
};

const closeMenu = () => {
    menuOpen.value = false;
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const startSlider = () => {
    intervalId = setInterval(nextSlide, 6000);
};

const stopSlider = () => {
    if (intervalId) clearInterval(intervalId);
};

// Lifecycle Hooks
onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        isDarkMode.value = true;
        document.body.classList.add("dark-theme-body");
    }
    startSlider();
});

onBeforeUnmount(() => {
    stopSlider();
});
</script>

<template>
    <div id="app-wrapper" :class="{ 'dark-theme': isDarkMode }">
        <!-- Top Info Header -->
        <div class="top-header">
            <div class="top-header-container">
                <p class="top-header-left-info">
                    <span><i class="fas fa-map-marker-alt contact-icon"></i></span>
                    Junior Quarters, Lira City
                </p>

                <div class="top-header-center-info">
                    <p>
                        <span><i class="fas fa-envelope"></i></span>
                        <a href="mailto:flareinternationalfoundation@gmail.com">flareinternationalfoundation@gmail.com</a>
                    </p>
                </div>

                <div class="top-header-social">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <!-- Main Navigation Header -->
        <header class="header" :class="{ 'dark-theme-header': isDarkMode }">
            <div class="header-container">
                <router-link
                    to="/"
                    class="navbar-brand logo"
                    :class="{ 'dark-theme-logo': isDarkMode }"
                >
                    <img
                        src="/public/assets/images/logo1.JPG"
                        alt="Flare Logo"
                        class="logo-img"
                    />
                    <span class="logo-text">FLARE INTERNATIONAL<br><span class="">FOUNDATION</span></span>
                </router-link>

                <!-- Menu Controls -->
                <input type="checkbox" id="check" v-model="menuOpen" />
                <label
                    for="check"
                    class="icons"
                    :class="{ 'dark-theme-icons': isDarkMode }"
                >
                    <i class="bx bx-menu" id="menu-icon" v-show="!menuOpen"></i>
                    <i class="bx bx-x" id="close-icon" v-show="menuOpen"></i>
                </label>

                <!-- Navigation Bar -->
                <nav
                    class="navbar"
                    :class="{
                        'show-nav': menuOpen,
                        'dark-theme-navbar': isDarkMode,
                    }"
                >
                    <router-link
                        to="/"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 1"
                    >HOME</router-link>

                    <router-link
                        to="/About-us"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 2"
                    >ABOUT US</router-link>

                     <router-link
                        to="/projects"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 3"
                    >PROGRAMS</router-link>

                    <router-link
                        to="/blogs"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 3"
                    >BLOGS</router-link>

                    <router-link
                        to="/our-gallery"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 4"
                    >GALLERY</router-link>

                    <router-link
                        to="/contact-us"
                        :class="{ 'dark-theme-link': isDarkMode }"
                        @click="closeMenu"
                        style="--i: 5"
                    >CONTACT US</router-link>

                    <!-- Icon-Only Theme Controller -->
                    <button
                        @click="toggleTheme(); closeMenu();"
                        class="theme-toggle"
                        :class="{ 'dark-theme-button': isDarkMode }"
                        :aria-label="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
                        style="--i: 6"
                    >
                        <i :class="isDarkMode ? 'bx bx-sun' : 'bx bx-moon'"></i>
                    </button>
                </nav>
            </div>
        </header>
    </div>
</template>

<style>
/* Global Base Layout & Resets */
body,
html {
    margin: 0px;
    padding: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    overflow-x: hidden;
    background-color: white;
    color: #2c3e50;
    transition: background-color 0.4s ease, color 0.4s ease;
    padding-top: 65px; /* Increased padding to support the taller, spaced-out header rules */
}

body.dark-theme-body {
    background-color: #0f1013;
    color: #e2e8f0;
}

/* INNER CONTAINER FOR ALIGNMENT */
.top-header-container,
.header-container {
    width: 100%;
    max-width: 1200px; /* Brought max-width down from 1280px to pull content more inward */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* TOP METADATA BAR */
.top-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    color: #ffffff;
    padding: 12px 6%; /* Increased from 10px 4% for deep layout inset padding */
    display: flex;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 13px;
    letter-spacing: 0.5px;
    box-sizing: border-box;
}

.top-header-left-info {
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 700;
}

.top-header-left-info span {
    margin-right: 8px;
    font-size: 16px;
}

.top-header-center-info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 13px;
}

.top-header-center-info p {
    margin: 0;
    display: flex;
    align-items: center;
}

.top-header-center-info p span {
    margin-right: 8px;
}

.top-header-center-info a {
    color: #ffffff;
    text-decoration: none;
    transition: opacity 0.2s ease;
}

.top-header-center-info a:hover {
    opacity: 0.85;
}

.top-header-social {
    display: flex;
    align-items: center;
    gap: 16px;
}

.top-header-social a {
    color: #ffffff;
    font-size: 14px;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.top-header-social a:hover {
    transform: translateY(-2px);
    opacity: 0.85;
}

/* MAIN NAVIGATION HEADER */
.header {
    position: fixed;
    top: 45px; /* Increased from 38px to give more space between top-header and main header */
    left: 0;
    width: 100%;
    padding: 20px 6%; /* Increased to 6% to push logo and dark theme icon inward from screen margins */
    background-color: white;
    display: flex;
    align-items: center;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: background-color 0.4s ease, top 0.3s ease, padding 0.3s ease;
    box-sizing: border-box;
}

.dark-theme-header {
    background-color: #141519 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* LOGO GROUP */
.navbar-brand.logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    flex-shrink: 0;
}

.logo-img {
    height: 56px;
    width: auto;
    object-fit: contain;
}

.logo-text {
    font-size: 16px;
    font-weight: 800;
    line-height: 1.15;
    color: red;
    letter-spacing: 0.5px;
}

.logo-subtext {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    opacity: 0.9;
}

/* NAVBAR LINKS */
.navbar {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: auto;
}

.navbar a {
    color: black;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.8px;
    position: relative;
    padding: 8px 2px;
    transition: color 0.3s ease;
}

.navbar a:hover,
.navbar a.router-link-active {
    color: #1e88e5;
}

.navbar a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background: #1e88e5;
    left: 0;
    bottom: 0;
    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.navbar a:hover::after,
.navbar a.router-link-active::after {
    width: 100%;
}

/* MENU ICONS (MOBILE) */
.icons {
    font-size: 32px;
    color: #1e88e5;
    display: none;
    cursor: pointer;
    align-items: center;
    z-index: 1001;
}

#check {
    display: none;
}

/* ICON-ONLY THEME CONTROLLER */
.theme-toggle {
    background: none;
    border: none;
    padding: 10px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    outline: none;
    margin-left: 16px; /* Added an extra margin cushion between dark mode toggle and nav links */
}

.theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.08);
}

.dark-theme-button.theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.08);
}

/* RESPONSIVE LAYOUT (TABLETS & MOBILE) */
@media (max-width: 991px) {
    body {
        padding-top: 215px;
    }

    .top-header-container,
    .header-container {
        flex-direction: column;
        gap: 8px;
    }

    .header-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .top-header {
        padding: 12px 6%;
    }

    .header {
        top: 83px; /* Re-balanced drop point based on taller top-bar bounds */
        padding: 16px 6%;
    }

    .icons {
        display: inline-flex;
    }

    .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #ffffff;
        flex-direction: column;
        align-items: stretch;
        padding: 24px 6%;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        display: none;
        border-top: 1px solid #f1f3f5;
        box-sizing: border-box;
        gap: 0;
        margin-left: 0;
        
    }

    .dark-theme-header .navbar {
        background-color: #141519;
        border-top-color: rgba(255, 255, 255, 0.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
    }

    .navbar a {
        color: #495057;
        font-size: 16px;
        padding: 16px 0;
        border-bottom: 1px solid #f1f5f9;
        transform: translateY(-15px);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease;
    }

    .dark-theme-header .navbar a {
        color: #a0a0ab;
        border-bottom-color: rgba(255, 255, 255, 0.05);
    }

    .navbar a::after {
        display: none;
    }

    .navbar a:hover,
    .navbar a.router-link-active {
        color: #1e88e5;
    }

    .dark-theme-header .navbar a:hover,
    .dark-theme-header .navbar a.router-link-active {
        color: #38bdf8;
    }

    .theme-toggle {
        margin-top: 20px;
        align-self: center;
        width: 50px;
        height: 50px;
        color: #2c3e50;
        transform: translateY(-15px);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease;
        margin-left: 0;
    }

    .theme-toggle:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .dark-theme-header .theme-toggle {
        color: #e2e8f0;
    }

    .dark-theme-header .theme-toggle:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    #check:checked ~ .navbar {
        display: flex;
    }

    #check:checked ~ .navbar a,
    #check:checked ~ .navbar .theme-toggle {
        transform: translateY(0);
        opacity: 1;
        transition-delay: calc(0.08s * var(--i));
    }
}
</style>