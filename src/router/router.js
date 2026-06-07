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
    path: "/products/:id",
    name: "Product",
    component: () => import("../pages/ProductPage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../pages/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Если есть hash — скроллим к якорю
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // Иначе наверх страницы
    return { top: 0 };
  },
});

export default router;
