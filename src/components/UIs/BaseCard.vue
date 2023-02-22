<template>
  <a
    class="block max-w-sm p-7 pb-20 bg-white cursor-pointer border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <img :src="imageUrl" alt="Image" class="w-1/4 h-1/4 m-2" />

    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ title }}
    </h5>

    <p class="text-md m-2">Price:{{ price }}</p>
    <span>{{ category }}</span>
    <p class="font-normal block truncate  text-gray-700 dark:text-gray-400">
      {{ description }}
    </p>

    <p class="block m-2">
      Rating :{{ rating.rate }} out of {{ rating.count }}
    </p>
    <base-button btnName="Add to cart" class="mt-4"></base-button>

  </a>
</template>
<script setup>
const props = defineProps({
  title: String,
  price: Number,
  description: String,
  imageUrl: String,
  category: String,
  rating: Object,
});
</script>
