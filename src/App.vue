<template>
  <the-navigation-bar></the-navigation-bar>
  <the-side-bar v-if="!!authToken"></the-side-bar>

  <div :class="{ 'p-4 sm:ml-64 relative ': !!authToken }">

    <router-view> </router-view>
  </div>
</template>
  
<script setup>
import TheNavigationBar from "./components/TheNavigationBar/TheNavigationBar.vue";
import TheSideBar from "./components/TheSideBar/TheSideBar.vue";

import { useAuthStore } from "./stores/Auth.js"
import { useProductsStore } from "./stores/Products.js";
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia"
import router from "./router/index.js"

const { authToken } = storeToRefs(useAuthStore())
const { setProducts } = useProductsStore();
onMounted(() => {
  setProducts();
});
router.beforeEach((to, from, next) => {
  console.log("Route TO :", to, from);
  if (to.meta.requiresAuth && !authToken.value) {
    next(false)
    router.push('/auth')
  } else {
    if (to.path === "/auth" && authToken.value) {
      next(false)
      router.push("/")
    }
    next()
  }
});

components: {
  TheNavigationBar;
  TheSideBar;
}
</script>

