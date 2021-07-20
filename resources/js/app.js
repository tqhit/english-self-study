require("./bootstrap");

import { createApp } from "vue";
import router from "./router";

import App from "./components/App.vue";

window.Vue = require("vue").default;

const app = createApp({
    components: { App },
});

app.use(router);
app.mount("#app");
