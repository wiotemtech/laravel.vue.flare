import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";
import Gallery from "./views/Gallery.vue";
import Blogs from "./views/Blogs.vue";

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/about-us", name: "About", component: About },
{ path: "/our-gallery", name:"Gallery", component:Gallery},
    { path: "/contact-us", name: "Contact", component: Contact },
{ path:"/blogs",name:"Blogs",component:Blogs},
   
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
        meta: { hideLayout: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
