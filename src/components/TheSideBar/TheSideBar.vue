<template>
  <div class=" ">
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
      </svg>
    </button>

    <aside
      class="  fixed  left-5 top-24 bottom-8 z-40 w-64 h-46 transition-transform -translate-x-full sm:translate-x-0  overflow-hidden"
      aria-label="Sidebar">
      <div
        class="h-full mx-3 px-4    rounded-lg shadow-3ht  border-solid  border-zinc-500 py-4 backdrop-blur-xl overflow-y-auto bg-glass dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <router-link to="/auth/admin"
              class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-blue-900 hover:text-white dark:group-hover:text-white"
                fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                </path>
              </svg>

              <span class="flex-1 text-2md  font-bold ml-3 whitespace-nowrap hover:text-emerald-700">
                Admin
              </span>
            </router-link>
          </li>
          <product-drop-down></product-drop-down>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import ProductDropDown from "../products/ProductDropDown.vue";

components: {
  ProductDropDown;
}
</script>
