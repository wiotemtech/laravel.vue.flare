<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import { useRoute } from "vue-router";
import { watch, nextTick } from "vue";

export default {
    components: {
        NavBar,
        Footer,
    },

    setup() {
        const route = useRoute();

        // Watch for route changes and scroll to top
        watch(
            () => route.path,
            async () => {
                // Use multiple approaches to ensure scroll works
                await nextTick();
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                
                // Also scroll main content if it's scrollable
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.scrollTop = 0;
                }
            },
            { immediate: true }
        );

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
            <router-view :key="route.fullPath" />
        </main>

        <Footer v-if="!route.meta.hideLayout" />
    </div>
</template>