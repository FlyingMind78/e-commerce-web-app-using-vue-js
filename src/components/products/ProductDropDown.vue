<template>
  <button @click="isDroppedContent = !isDroppedContent"
    class="   text-white text-2md font-bold hover:text-green-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none font-medium rounded-lg  pr-4 pl-2 py-2.5 text-center inline-flex items-center"
    type="button">
    <svg aria-hidden="true"
      class="flex-shrink-0 mr-2 w-6 h-6 text-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"
        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
        clip-rule="evenodd"></path>
    </svg>

    Categories
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" v-if="true" class=" z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul v-if="isDroppedContent" class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton">
      <li>
        <router-link to="/products"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 font-lg dark:hover:text-white">ALL
          CATEGORIES</router-link>
      </li>
      <li v-for="(category, index) in getProductsCategories" :key="index">
        <router-link :to="'/products/category/' + category"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 font-lg dark:hover:text-white">{{
            category.toUpperCase() }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useProductsStore } from "../../stores/Products";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const isDroppedContent = ref(false);

const { getProductsCategories } = storeToRefs(useProductsStore());
</script>
