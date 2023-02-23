<template>
  <button type="button"
    class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    {{ btnText }}
  </button>
</template>
<script setup>
const { btnText } = defineProps({
  btnText: String,
});
</script>
