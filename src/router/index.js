import { createRouter, createWebHistory } from "vue-router";
import HomeViewModel from "../viewModel/HomeViewModel.vue";
import AuthViewModel from "../viewModel/AuthViewModel.vue";
import ProductsViewModel from "../viewModel/ProductsViewModel.vue";
import ProductsFilterViewModel from "../viewModel/ProductsFilterViewModel.vue";
import AdminViewModel from "../viewModel/AdminViewModel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: "/",
      component: HomeViewModel,
      meta: { requiresAuth: false },
    },
    {
      path: "/products",
      component: ProductsViewModel,
      meta: { requiresAuth: true },
    },
    {
      path: "/products/category/:categoryId",
      component: ProductsFilterViewModel,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      component: AuthViewModel,
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/admin",
      component: AdminViewModel,
      meta: { requiresAuth: true },
    },
    {
      path: "/users/:id/carts",
      component: null,
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
