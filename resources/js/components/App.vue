<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { useRoute } from "vue-router";

export default {
    components: {
        NavBar,
        Footer,
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
    <div id="app" class="wrapper">
        <NavBar v-if="!route.meta.hideLayout" />

        <main class="main-content">
            <router-view />
        </main>
        <Footer v-if="!route.meta.hideLayout" />
    </div>
</template>
