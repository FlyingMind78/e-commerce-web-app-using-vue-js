<template>
  <button
    class="mx-3 text-clip overflow-hidden bg-gradient-to-r from-LC1 LC2 to-LC3 hover:text-slate-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button">
    {{ btnName }}
  </button>
</template>

<script setup>
const { btnName } = defineProps({
  btnName: String,
});
</script>
