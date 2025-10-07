<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { useRoute } from "vue-router";

export default {
    name: "App",
    components: {
        NavBar,
        Footer,
    },
    data() {
        return {
            isDarkMode: false,
            menuOpen: false,
        };
    },
    methods: {
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
    },
    mounted() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            this.isDarkMode = true;
            document.body.classList.add("dark-theme-body");
        }
    },
    setup() {
        const route = useRoute();
        return {
            route,
        };
    },
};
</script>

<template>
    <div id="app-wrapper">
        <NavBar v-if="!route.meta.hideLayout" :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" @close-menu="closeMenu" />

        <main class="main-content">
            <router-view />
        </main>
        
        <Footer v-if="!route.meta.hideLayout" />
    </div>
</template>

<style>
/* --------------------------------------------------------
  ESSENTIAL CSS FOR THE MAIN LAYOUT
  --------------------------------------------------------
*/
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    background-color: #f4f4f4;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark-theme-body {
    background: linear-gradient(to right, #121212, #121212);
    color: #eee;
}

/* Style for the fixed top bar */
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
    height: 35px;
}

/* Style for the fixed main header */
.header {
    position: fixed;
    top: 35px; /* Positioned below the top-header */
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
    height: 80px;
}

/* This is the key to preventing content from overlapping with the fixed headers */
.main-content {
    margin-top: 115px; /* Sum of top-header (35px) + main header (80px) */
    flex-grow: 1;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
    .main-content {
        margin-top: 170px;
    }
    .top-header {
        height: auto;
    }
    .header {
        top: 140px;
        height: auto;
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
    .icons {
        display: inline-flex;
    }
    #check:checked ~ .icons #menu-icon {
        display: none;
    }
    #check:checked ~ .icons #close-icon {
        display: inline;
    }
}
</style>
