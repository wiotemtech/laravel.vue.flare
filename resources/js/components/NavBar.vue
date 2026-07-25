<script setup>
import { ref, onMounted } from "vue";

// Reactive State
const isDarkMode = ref(false);
const menuOpen = ref(false);

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle("dark-theme-body", isDarkMode.value);
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
};

const closeMenu = () => {
    menuOpen.value = false;
};

// Lifecycle Hooks
onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        isDarkMode.value = true;
        document.body.classList.add("dark-theme-body");
    }
});
</script>

<template>
    <div id="app-wrapper" :class="{ 'dark-theme': isDarkMode }">
        <!-- Top Info Header -->
        <div class="top-header">
            <div class="top-header-container">
                <div class="top-header-left-info">
                    <span class="icon-bubble"><i class="fas fa-map-marker-alt"></i></span>
                    <span>Junior Quarters, Lira City</span>
                </div>

                <div class="top-header-center-info">
                    <p>
                        <span class="icon-bubble"><i class="fas fa-envelope"></i></span>
                        <a href="mailto:flareinternationalfoundation@gmail.com">flareinternationalfoundation@gmail.com</a>
                    </p>
                </div>

                <div class="top-header-social">
                    <!--<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>-->
                    <a href="https://www.youtube.com/@FlareinternationalFoundati-i4y" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/flare-international-foundation-4b0386424/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://x.com/FlareUG" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                    <!--<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>-->
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
                    <div class="logo-frame">
                        <img
                            src="/public/assets/images/logo1.JPG"
                            alt="Flare Logo"
                            class="logo-img"
                        />
                    </div>
                    <div class="logo-text-group">
                        <span class="logo-title">FLARE INTERNATIONAL</span>
                        <span class="logo-subtitle">FOUNDATION</span>
                    </div>
                </router-link>

                <!-- Menu Controls with Prominent Touch Target -->
                <input type="checkbox" id="check" v-model="menuOpen" />
                <label
                    for="check"
                    class="icons"
                    :class="{ 'dark-theme-icons': isDarkMode }"
                    aria-label="Toggle Navigation Menu"
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
                    <router-link to="/" @click="closeMenu" style="--i: 1">HOME</router-link>
                    <router-link to="/About-us" @click="closeMenu" style="--i: 2">ABOUT US</router-link>
                    <router-link to="/projects" @click="closeMenu" style="--i: 3">PROGRAMS</router-link>
                    <router-link to="/blogs" @click="closeMenu" style="--i: 4">BLOGS</router-link>
                    <router-link to="/our-gallery" @click="closeMenu" style="--i: 5">GALLERY</router-link>
                    <router-link to="/contact-us" @click="closeMenu" style="--i: 6">CONTACT US</router-link>

                    <!-- Professional Theme Controller -->
                    <button
                        @click="toggleTheme(); closeMenu();"
                        class="theme-toggle"
                        :class="{ 'dark-theme-button': isDarkMode }"
                        :aria-label="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
                        style="--i: 7"
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
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    overflow-x: hidden;
    background-color: #ffffff;
    color: #1e293b;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding-top: 75px;
}

body.dark-theme-body {
    background-color: #0b0f17;
    color: #f1f5f9;
}

/* CENTERED CONTAINERS WITH GENEROUS MARGINS */
.top-header-container,
.header-container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
}

/* TOP METADATA BAR */
.top-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color:red;
    color: #ffffff;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
    box-sizing: border-box;
}

.top-header-left-info,
.top-header-center-info p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.top-header-left-info .icon-bubble,
.top-header-center-info .icon-bubble {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    opacity: 0.9;
}

.top-header-center-info a {
    color: #ffffff;
    text-decoration: none;
    transition: opacity 0.2s ease;
}

.top-header-center-info a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

.top-header-social {
    display: flex;
    align-items: center;
    gap: 14px;
}

.top-header-social a {
    color: #ffffff;
    font-size: 13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.top-header-social a:hover {
    background-color: #ffffff;
    color: red;
    transform: translateY(-2px);
}

/* MAIN NAVIGATION HEADER */
.header {
    position: fixed;
    top: 39px;
    left: 0;
    width: 100%;
    padding: 14px 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(226, 232, 240, 0.6);
}

.dark-theme-header {
    background-color: rgba(15, 23, 42, 0.95) !important;
    border-bottom-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* LOGO GROUP */
.navbar-brand.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    flex-shrink: 0;
}

.logo-frame {
    width: 84px;
    height: 44px;
    /* Restored border-radius and background box look */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.04);
}

.dark-theme-header .logo-frame {
    background: #1e293b;
    border-color: rgba(255,255,255,0.08);
}

.logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-text-group {
    display: flex;
    flex-direction: column;
}

.logo-title {
    font-size: 14px;
    font-weight: 900;
    line-height: 1.1;
    color: red;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
}

.dark-theme-header .logo-title {
    color: #f8fafc;
}

.logo-subtitle {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 3px;
    color: #1e88e5;
    margin-top: 2px;
}

/* NAVBAR LINKS */
.navbar {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
}

.navbar a {
    color: #475569;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.5px;
    position: relative;
    padding: 6px 10px;
    border-radius: 8px;
    transition: all 0.25s ease;
}

.dark-theme-header .navbar a {
    color: #94a3b8;
}

.navbar a:hover,
.navbar a.router-link-active {
    color: #2563eb;
    background-color: rgba(37, 99, 235, 0.08);
}

.dark-theme-header .navbar a:hover,
.dark-theme-header .navbar a.router-link-active {
    color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.12);
}

.navbar a::after {
    display: none;
}

/* MENU ICONS & HAMBURGER */
.icons {
    font-size: 46px;
    color: black;
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    z-index: 1001;
    transition: all 0.2s ease;
}

.dark-theme-header .icons {
    color: #f8fafc;
    background-color: #1e293b;
    border-color: rgba(255, 255, 255, 0.08);
}

#check {
    display: none;
}

/* THEME CONTROLLER TOGGLE BUTTON */
.theme-toggle {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #475569;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
    outline: none;
    margin-left: 6px;
}

.theme-toggle:hover {
    background-color: #1e88e5;
    color: #ffffff;
    border-color: white;
    transform: rotate(15deg) scale(1.05);
}

.dark-theme-header .theme-toggle {
    background-color: white;
    border-color: rgba(255, 255, 255, 0.08);
    color: black;
}

.dark-theme-header .theme-toggle:hover {
    background-color: white;
    color: black;
    border-color: black;
}

/* RESPONSIVE BREAKPOINTS (TABLETS & MOBILE) */
@media (max-width: 991px) {
    body {
        padding-top: 75px;
    }

    .top-header {
        display: none !important;
    }

    .header {
        top: 0;
    }

    .header-container {
        padding: 0 16px;
    }

    /* Increased logo size and frame dimensions on mobile screens */
    .logo-frame {
        width: 50px;
        height: 31px;
        
    }

    .logo-title {
        font-size: 15px;
    }

    .logo-subtitle {
        font-size: 11px;
    }

    .icons {
        display: inline-flex;
    }

    /* Smooth half-screen slide-in drawer from the right */
    .navbar {
        position: fixed;
        top: 75px;
        right: -50%; /* Hidden off-screen to the right */
        width: 50%; /* Covers exactly half of the mobile screen width */
        height: calc(100vh - 75px);
        background-color: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        flex-direction: column;
        align-items: stretch;
        padding: 24px 20px;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
        display: flex; /* Kept flex active so transitions can interpolate smoothly */
        visibility: hidden;
        pointer-events: none;
        border-left: 1px solid #e2e8f0;
        box-sizing: border-box;
        gap: 8px;
        margin-left: 0;
        transition: right 0.4s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.4s ease;
        z-index: 998;
    }

    .dark-theme-header .navbar {
        background-color: rgba(15, 23, 42, 0.98);
        border-left-color: rgba(255, 255, 255, 0.06);
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
    }

    .navbar a {
        color: #334155;
        font-size: 14px;
        font-weight: 700;
        padding: 12px 14px;
        border-radius: 8px;
        border-bottom: 1px solid #f1f5f9;
        transition: color 0.2s ease, background-color 0.2s ease, padding-left 0.2s ease;
    }

    .dark-theme-header .navbar a {
        color: #cbd5e1;
        border-bottom-color: rgba(255, 255, 255, 0.05);
    }

    .navbar a:hover,
    .navbar a.router-link-active {
        color: #2563eb;
        background-color: rgba(37, 99, 235, 0.08);
        padding-left: 18px;
    }

    .dark-theme-header .navbar a:hover,
    .dark-theme-header .navbar a.router-link-active {
        color: #3b82f6;
        background-color: rgba(59, 130, 246, 0.12);
    }

    .theme-toggle {
        margin-top: auto; /* Pushes the theme controller neatly to the bottom of the sliding drawer */
        align-self: center;
        width: 44px;
        height: 44px;
        margin-left: 0;
    }

    /* Trigger slide-in animation smoothly when checkbox is checked */
    #check:checked ~ .navbar {
        right: 0;
        visibility: visible;
        pointer-events: auto;
    }
}
</style>