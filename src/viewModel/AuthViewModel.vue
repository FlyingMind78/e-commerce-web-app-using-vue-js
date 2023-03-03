<template>
  <div class="h-screen w-screen blur-xl relative"></div>
  <div class="w-full max-w-md absolute top-12 left-1/3 ">
    <auth-form :class="{ 'mt-20  ': !!!authToken }"></auth-form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 All rights reserved.
    </p>
  </div>
</template>

<script setup>
import AuthForm from "../components/auth/AuthForm.vue";
import { useAuthStore } from "../stores/Auth.js"
import { storeToRefs } from "pinia"
const { authToken } = storeToRefs(useAuthStore())
</script>
