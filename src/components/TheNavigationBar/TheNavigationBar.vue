<template>
  <nav class=" bg-glass shadow-3ht border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center cursor-pointer justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <svg class="w-10 h-10 mx-3" fill="red" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M545.7 254.4H160.2l3-22.6c6-45.7 28.4-87.7 63.1-118.3 35-30.9 80-47.9 126.7-47.9s91.7 17 126.7 47.9c34.7 30.6 57.1 72.6 63.1 118.3l2.9 22.6z m-338.1-40h290.7C479.8 151 420.9 105.5 353 105.5S226.2 151 207.6 214.4z"
            fill="#515151" />
          <path d="M641 960.2H136.7c-39.6 0-71.8-32.1-71.8-71.8v-674H641v745.8z" fill="#4D96FF" />
          <path
            d="M834.3 488.3H448.8l3-22.6c6-45.7 28.4-87.7 63.1-118.3 35-30.9 80-47.9 126.7-47.9s91.7 17 126.7 47.9C803 378 825.4 420 831.4 465.7l2.9 22.6z m-338.1-40h290.7c-18.6-63.4-77.5-108.8-145.3-108.8-67.9 0-126.8 45.4-145.4 108.8z"
            fill="#19c9c2" />
          <path d="M890.8 959.6H392.4c-39.4 0-71.4-32-71.4-71.4v-440h641.3v439.9c-0.1 39.5-32 71.5-71.5 71.5z"
            fill="#8bc20f" />
        </svg>
        <span class="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->


          E-Commerce App
        </span>
      </router-link>


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
          <li v-if="!!!authToken">
            <router-link to="/auth" class="block py-2 pl-3 pr-4 text-white text-lg rounded">Login</router-link>
          </li>

          <li v-else-if="!!authToken" @click="logoutUserHandler">
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
  <logout-modal-error-dialog @close-dialog="closeLogoutDialog" @confirm-logout-action="confirmLogout"
    v-if="isLogoutDialogShown"></logout-modal-error-dialog>
</template>
<script setup>
import { useAuthStore } from "../../stores/Auth.js"
import { storeToRefs } from "pinia"
import { ref } from "vue";
import LogoutModalErrorDialog from "./LogoutModalErrorDialog.vue";
const { authToken } = storeToRefs(useAuthStore())
const { logoutUser } = useAuthStore();
const isLogoutDialogShown = ref(false)
const isUserSureLogout = ref(null)

function closeLogoutDialog() {
  isLogoutDialogShown.value = false
  isUserSureLogout.value = false
}
function confirmLogout() {
  isLogoutDialogShown.value = false;
  isUserSureLogout.value = true
  logoutUserHandler()
}
function logoutUserHandler() {
  isLogoutDialogShown.value = true
  if (isUserSureLogout.value) {
    logoutUser()
  }
}



</script>
