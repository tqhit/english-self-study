import Default from "../layouts/Default.vue";
import Home from "../pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { layout: Default },
    },
];

export default routes;
