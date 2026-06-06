import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../pages/Catalog.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../components/ProductCard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/AboutSection.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../pages/ProductPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
