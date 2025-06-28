import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/global.css';




import { createApp } from "vue";
import router from './router';

import App from './components/App.vue'
const app = createApp(App);
app.use(router);

app.mount("#app");