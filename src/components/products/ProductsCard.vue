<template>
  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <div class="grid grid-cols-3 gap-4 mb-4">
      <base-card v-for="product in products" :key="product.id" :title="product.title" :price="product.price"
        :description="product.description" :imageUrl="product.image" :category="product.category"
        :rating="product.rating">
      </base-card>
    </div>
  </div>
</template>

<script setup>
const { products } = defineProps({
  products: Object,
});
</script>
