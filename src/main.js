import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("vue-slick-carousel", VueSlickCarousel);
