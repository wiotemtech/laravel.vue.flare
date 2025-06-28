<script>
export default {
    name: "App",
    data() {
        return {
            showDropdown: false,
            isDarkMode: false,
            menuOpen: false,
            currentIndex: 0,
            slides: [1, 2, 3],
            intervalId: null,
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        closeDropdown() {
            this.showDropdown = false;
            this.closeMenu();
        },
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle("dark-theme-body", this.isDarkMode);
            localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
        },
        closeMenu() {
            this.menuOpen = false;
            const check = document.getElementById("check");
            if (check) {
                check.checked = false;
            }
        },
        startSlider() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 6000);
        },
        stopSlider() {
            clearInterval(this.intervalId);
        },
        nextSlide() {
            const previousIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.resetAnimations(previousIndex);
        },
        resetAnimations(index) {
            const textOverlay =
                document.querySelectorAll(".text-overlay")[index];
            if (textOverlay) {
                const h1 = textOverlay.querySelector("h1");
                const p = textOverlay.querySelector("p");
                const button = textOverlay.querySelector(".donate-button");

                if (h1) {
                    h1.style.animation = "none";
                    void h1.offsetWidth;
                    h1.style.animation = "";
                }
                if (p) {
                    p.style.animation = "none";
                    void p.offsetWidth;
                    p.style.animation = "";
                }
                if (button) {
                    button.style.animation = "none";
                    void button.offsetWidth;
                    button.style.animation = "";
                }
            }
        },
    },
    mounted() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            this.isDarkMode = true;
            document.body.classList.add("dark-theme-body");
        }
        this.startSlider();
    },
    beforeUnmount() {
        this.stopSlider();
    },
};
</script>

<template>
    <div id="app-wrapper">
        <div class="top-header">
            <p class="top-header-left-info">
                <span><i class="fas fa-id-badge"></i></span>FLARE INTERNATIONAL
                FOUNDATION
            </p>

            <div class="top-header-center-info">
                <p>
                    <span><i class="fas fa-envelope"></i></span
                    >flareinternationalfoundation@gmail.com
                </p>
            </div>

            <div class="top-header-social">
                <a href="#" target="_blank" rel="noopener noreferrer"
                    ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                    ><i class="fab fa-youtube"></i
                ></a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                    ><i class="fab fa-linkedin-in"></i
                ></a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                    ><i class="fab fa-x-twitter"></i
                ></a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                    ><i class="fab fa-instagram"></i
                ></a>
            </div>
        </div>

        <header class="header" :class="{ 'dark-theme-header': isDarkMode }">
            <a
                class="navbar-brand logo"
                href="#"
                :class="{ 'dark-theme-logo': isDarkMode }"
            >
                <img
                    src="/public/assets/images/flare.png"
                    alt="Logo"
                    width="80"
                    height="80"
                    class="logo-img"
                />
                <span class="logo-text">FLARE INT’L <br />FOUNDATION</span>
            </a>

            <input type="checkbox" id="check" v-model="menuOpen" />
            <label
                for="check"
                class="icons"
                :class="{ 'dark-theme-icons': isDarkMode }"
            >
                <i class="bx bx-menu" id="menu-icon" v-show="!menuOpen"></i>
                <i class="bx bx-x" id="close-icon" v-show="menuOpen"></i>
            </label>

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
                    >HOME</router-link
                >

                <router-link
                    to="/About-us"
                    class="ojede"
                    :class="{ 'dark-theme-link': isDarkMode }"
                    @click="closeMenu"
                    >ABOUT US</router-link
                >

                <router-link
                    to="/blogs"
                    class="ojede"
                    :class="{ 'dark-theme-link': isDarkMode }"
                    @click="closeMenu"
                    >BLOGS</router-link
                >

                <router-link
                    to="/our-gallery"
                    :class="{ 'dark-theme-link': isDarkMode }"
                    @click="closeMenu"
                    >GALLERY</router-link
                >
                <router-link
                    to="/contact-us"
                    :class="{ 'dark-theme-link': isDarkMode }"
                    @click="closeMenu"
                    >CONTACT US</router-link
                >

                <button
                    @click="
                        toggleTheme();
                        closeMenu();
                    "
                    class="theme-toggle"
                    :class="{ 'dark-theme-button': isDarkMode }"
                >
                    <i :class="isDarkMode ? 'bx bx-sun' : 'bx bx-moon'"></i>
                    <span class="theme-label">{{
                        isDarkMode ? "Light Mode" : "Dark Mode"
                    }}</span>
                </button>
            </nav>
        </header>
    </div>
</template>
<style>
body,
html {
    height: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    background-color: #f4f4f4;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;

    padding-top: 115px;
}

body.dark-theme-body {
    background: linear-gradient(to right, #121212, #121212);
    color: #eee;
}

.top-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    color: #fff;
    padding: 3px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 1.1em;
    flex-wrap: wrap;
    min-height: 1px;
}

body.dark-theme-body .top-header {
    background-color: red;
    color: #eee;
}

.top-header-left-info {
    margin: 0;
    display: flex;
    font-size: 16px;
    align-items: center;
    white-space: nowrap;
}

.top-header-left-info span {
    margin-right: 8px;
    font-size: 1.2em;
    color: #fff;
}

.top-header-center-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-grow: 1;
    padding: 0 10px;
}

.top-header-center-info p {
    margin: 0;
    display: flex;
    font-size: 16px;
    align-items: center;
    white-space: nowrap;
}

.top-header-center-info p span {
    margin-right: 8px;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
}

.top-header-social {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.top-header-social a {
    color: #fff;
    margin-left: 18px;
    font-size: 1em;
    transition: color 0.3s ease, transform 0.2s ease;
}

body.dark-theme-body .top-header-social a {
    color: #eee;
}

.top-header-social a:hover {
    color: #d1ecf1;
    transform: translateY(-2px);
}

.header {
    position: fixed;
    top: 35px;
    left: 0;
    width: 100%;
    padding: 8px 12%;
    background-color: #1e88e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 998;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

body.dark-theme-body .header {
    background-color: #111;
}
.navbar-brand.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
    transition: color 0.3s ease;
}

.navbar-brand.logo.dark-theme-logo {
    color: #eee;
}

.logo-img {
    margin-right: 10px;
}

.logo-text {
    margin-left: -5px;
    font-size: 18px;
    font-weight: inherit;
    color: white;
    font-weight: bold;
}

body.dark-theme-body .logo-text {
    color: white;
}

.navbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    transition: background-color 0.3s ease;
    justify-content: flex-end;
}

.navbar > * {
    margin-left: 18px;
}

.navbar > *:first-child {
    margin-left: 0;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: 650;
    font-size: 18px;
    position: relative;
    transition: color 0.3s ease;
    padding: 4px 0;
}

.navbar a:hover {
    color: white;
}

.navbar a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: white;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
}

.navbar a:hover::after,
.navbar a.router-link-active::after {
    width: 100%;
}

.navbar a.router-link-active {
    color: white;
}

#check {
    display: none;
}

.icons {
    position: absolute;
    right: 8%;
    font-size: 28px;
    color: black;
    display: none;
    cursor: pointer;
    transition: color 0.3s ease;
    align-items: center;
    z-index: 1000;
}

.icons.dark-theme-icons {
    color: #eee;
}

#menu-icon {
    display: inline;
}

#close-icon {
    display: none;
}

.theme-toggle {
    background: none;
    border: 2px solid white;
    padding: 2px 3px;
    border-radius: 10px;
    color: white;
    font-size: 28px;
    cursor: pointer;
    outline: none;
    transition: color 0.3s ease;
}

.theme-toggle:hover {
    background-color: white;
    color: #1e88e5;
}

.theme-label {
    font-size: 18px;
    position: relative;
    bottom: 4px;
    padding-right: 3px;
}

.theme-toggle.dark-theme-button {
    color: #eee;
}

.custom-dropdown-toggle {
    position: relative;
    padding: 4px 0;
}

.custom-dropdown-toggle::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: green;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
}

.custom-dropdown-toggle:hover::after,
.custom-dropdown-toggle.router-link-active::after {
    width: 100%;
}

.custom-dropdown-menu .dropdown-item {
    position: relative;
    font-weight: 650;
    font-size: 18px;
    padding: 12px 16px;
    color: white;
    text-decoration: none;
}

.custom-dropdown-menu .dropdown-item::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: #235620;
    left: 0;
    bottom: 8px;
    transition: width 0.3s ease-in-out;
}

.custom-dropdown-menu .dropdown-item:hover::after {
    width: 100%;
}

.custom-dropdown {
    position: relative;
    display: inline-block;
    margin: 0 10px;
}

.custom-dropdown-toggle {
    cursor: pointer;
    font-weight: 650;
    margin-right: -18px;
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
}

body.dark-theme-body .custom-dropdown-toggle {
    color: white;
}

.custom-dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 999;
    transition: all 0.3s ease;
}

.custom-dropdown-menu.show {
    display: block;
}

.custom-dropdown-menu .dropdown-item {
    padding: 12px 16px;
    display: block;
    color: black;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
    body {
        padding-top: 170px;
    }

    .top-header {
        flex-direction: column;
        align-items: center;
        padding: 10px 5%;
        font-size: 0.95em;
        min-height: auto;
    }

    .top-header-left-info,
    .top-header-center-info,
    .top-header-social {
        width: 100%;
        text-align: center;
        margin-left: 0;
        margin-right: 0;
        padding: 5px 0;
    }

    .top-header-center-info p {
        justify-content: center;
        white-space: normal;
    }

    .top-header-left-info span,
    .top-header-center-info p span {
        margin-right: 5px; /* Slightly reduce spacing for mobile icons */
    }

    .top-header-social {
        margin-top: 10px;
        justify-content: center;
    }

    .top-header-social a {
        margin: 0 8px;
    }

    .header {
        top: 140px;
        padding: 10px 5%;
    }

    .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        display: none;
        border-top: 1px solid #eee;
    }

    .navbar-brand.logo {
        padding-top: 8px;
    }

    .navbar > * {
        margin-left: 0;
    }

    .navbar a {
        display: block;
        font-size: 1.1rem;
        margin: 1rem 0;
        text-align: center;
        transform: translateY(-20px);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        color: #333;
    }

    #check:checked ~ .navbar {
        display: flex;
    }

    #check:checked ~ .navbar a {
        transform: translateY(0);
        opacity: 1;
        transition-delay: calc(0.15s * var(--i));
    }

    .navbar a.router-link-active {
        color: #1e88e5;
    }

    .navbar a::after {
        background: #1e88e5;
    }

    .icons {
        display: inline-flex;
    }

    #check:checked ~ .icons #menu-icon {
        display: none;
    }

    #check:checked ~ .icons #close-icon {
        display: inline;
    }

    .custom-dropdown-menu {
        position: static;
        width: 100%;
        box-shadow: none;
        border-radius: 0;
        background-color: transparent;
    }

    .dark-theme-dropdown {
        background-color: transparent;
    }

    .custom-dropdown-menu .dropdown-item {
        padding: 8px 16px;
        text-align: center;
    }
}
</style>
