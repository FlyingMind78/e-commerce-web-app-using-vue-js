import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("carts", () => {
  const userCart = ref([]);

  const getUserCart = computed(() => {
    return userCart.value;
  });

  return {
    getUserCart,
  };
});
