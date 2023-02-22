<template>
  <products-card :products="getProducts"></products-card>
</template>

<script setup>
import ProductsCard from "../components/products/ProductsCard.vue";

import { storeToRefs } from "pinia";

import { useProductsStore } from "../stores/Products.js";

components: {
  ProductsCard;
}

const { getProducts } = storeToRefs(useProductsStore());
</script>
