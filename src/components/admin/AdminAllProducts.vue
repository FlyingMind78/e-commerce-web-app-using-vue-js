<template>
  <ul>
    <div class="flex flex-col" v-for="(product, index) in allProducts" :key="product.id">
      <li class="flex flex-row m-2 shadow-md p-3 cursor-pointer shadow-sky-800 items-center justify-items-center">
        <img :src="product.image" alt="image" class="block w-14 h-14 mr-2" />
        <p class="block grow text-violet-900 font-medium text-center">
          {{ product.title }}
        </p>

        <p class="block grow text-violet-900 font-medium text-center">
          Rs. {{ product.price }}
        </p>
        <slot name="button" :product="product">
        </slot>

      </li>
    </div>
    <!-- <div class="p-2 bg-teal-400"></div> -->
  </ul>
</template>
<script setup>
import { useProductsStore } from "../../stores/Products.js";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted, watch, unref } from "vue";
const { getProducts } = storeToRefs(useProductsStore());
const allProducts = ref([])
watch(getProducts, (getProductsNewValue) => {
  allProducts.value = unref(getProductsNewValue)
})
onMounted(() => {
  allProducts.value = unref(getProducts)
})  
</script>
<style scoped></style>
