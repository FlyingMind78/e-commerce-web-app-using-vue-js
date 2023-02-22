<template>
  <products-card :products="getFilteredProducts"></products-card>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import ProductsCard from "../components/products/ProductsCard.vue";
import { useProductsStore } from "../stores/Products.js";

components: {
  ProductsCard;
}
const route = useRoute();
const category = useRoute().params.categoryId;

const { filterProducts } = useProductsStore();
const { getFilteredProducts } = storeToRefs(useProductsStore());

watch(
  () => route.params.categoryId,
  async (newId) => {
    // console.log("Products filter route change: ", filterProducts(newId));
    filterProducts(newId);
  }
);
onMounted(() => {
  // console.log("Products filter: ", filterProducts(category));
  filterProducts(category);
});
</script>
