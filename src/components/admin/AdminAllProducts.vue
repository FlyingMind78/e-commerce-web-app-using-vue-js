<template>
  <ul>
    <div class="flex flex-col" v-for="(product, index) in allProducts" :key="product.id">
      <li class="flex flex-row m-2 rounded-xl p-3 cursor-pointer shadow-3ht items-center justify-items-center">
        <img :src="product.image" alt="image" class="block w-14 h-14 mr-2" />
        <p class="block grow text-gray-900  font-bold text-center">
          {{ product.title }}
        </p>

        <p class="block grow text-gray-900 font-bold text-center">
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
