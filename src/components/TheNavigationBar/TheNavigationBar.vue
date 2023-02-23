<template>
  <nav class="bg-glass shadow-3ht border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center cursor-pointer justify-between mx-auto">
      <div class="flex items-center">
        <span class="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">E-Commerce App</span>
      </div>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 text-white text-lg rounded "
              aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/products" class="block py-2 pl-3 pr-4 text-white text-lg rounded"
              aria-current="page">Products</router-link>
          </li>
          <li v-if="!isUserAuthenticated">
            <router-link to="/auth" class="block py-2 pl-3 pr-4 text-white text-lg rounded">Login</router-link>
          </li>

          <li v-else-if="isUserAuthenticated" @click="logoutUser">
            <router-link to="/" class="block py-2 pl-3 pr-4 text-white text-lg rounded">Logout
            </router-link>
          </li>


          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white text-lg rounded">Carts
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">10</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useAuthStore } from "../../stores/auth.js"
import { storeToRefs } from "pinia"
const { isUserAuthenticated } = storeToRefs(useAuthStore())
const { logoutUser } = useAuthStore();




</script>
