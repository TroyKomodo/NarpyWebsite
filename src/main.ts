import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "@/assets/styles.scss";
import "@/icons";

const app = createApp(App);

app.component("FaIcon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
