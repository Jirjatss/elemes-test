import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "../node_modules/swiper";
import "./assets/style.css";
import "swiper/swiper-bundle.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(VueAwesomeSwiper);
