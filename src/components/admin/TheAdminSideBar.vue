<template>
  <div class="self-start">
    <div
      class="w-48 text-gray-900 bg-white border border-gray-200 mb-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <h3 class="text-center text-teal-500 font-bold m-1">Admin Panel</h3>
      <p class="text-center text-base m-2 font-medium">
        Easily organise your products.
      </p>
    </div>

    <div
      class="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <AdminBaseButton btnText="Add a Product" @click="adminAction('add')" />
      <AdminBaseButton btnText="Delete a Product" @click="adminAction('delete')" />
      <AdminBaseButton btnText="Update  a Product" @click="adminAction('update')" />
    </div>
  </div>
</template>

<script setup>
import AdminBaseButton from "./AdminBaseButton.vue";
import { ref } from "vue";

const activeAdminAction = ref("");
const emit = defineEmits(["admin-action"]);
function adminAction(action) {
  activeAdminAction.value = action;
  emit("admin-action", activeAdminAction);
}
</script>
