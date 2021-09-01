import Default from "../layouts/Default.vue";
import Home from "../pages/Home.vue";
import Details from "../pages/Details.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { layout: Default },
    },
    {
        path: "/id",
        name: "details",
        component: Details,
        meta: { layout: Default },
    },
];

export default routes;
