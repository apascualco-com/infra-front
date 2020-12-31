import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/nodes",
    name: "Nodes",
    component: () => import("../views/Nodes.vue")
  },
  {
    path: "/pods",
    name: "Pods",
    component: () => import("../views/Pods.vue")
  },
  {
    path: "/metallb",
    name: "Metallb",
    component: () => import("../views/Metallb.vue")
  },
  {
    path: "/monitoring",
    name: "Monitoring",
    component: () => import("../views/Monitoring.vue")
  },
  {
    path: "/certmanager",
    name: "Certmanager",
    component: () => import("../views/Certmanager.vue")
  },
  {
    path: "/wordpress",
    name: "Wordpress",
    component: () => import("../views/Wordpress.vue")
  },
  {
    path: "/infra",
    name: "Infra",
    component: () => import("../views/Infra.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
