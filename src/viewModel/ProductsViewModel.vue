<template>
  <products-card :products="productsPerPage"></products-card>
  <products-pagination class="text-center" :noOfPages="noOfPages" @page-number="pageNumberHandler"></products-pagination>
</template>

<script setup>
import ProductsCard from "../components/products/ProductsCard.vue";
import ProductsPagination from "../components/products/ProductsPagination.vue";

import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

import { useProductsStore } from "../stores/Products.js";

components: {
  ProductsCard;
}

const { getProducts } = storeToRefs(useProductsStore());
const productsPerPage = ref([])
const noOfPages = ref(Math.ceil(getProducts.value.length / 9))


function pageNumberHandler(pageNumber) {

  calulateProductsPerPage(pageNumber)

}
function calulateProductsPerPage(currentPage) {
  let start = (currentPage - 1) * 9
  let end = start + 9
  productsPerPage.value = getProducts.value.slice(start, end)
}



onMounted(() => {
  console.log("All products no ", getProducts.value.length)
  calulateProductsPerPage(1)
})
</script>
