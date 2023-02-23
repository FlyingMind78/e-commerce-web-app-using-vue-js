<template>
  <div class="self-start">
    <div
      class="w-48 text-gray-900 bg-transparent opacity-80  shadow-gls mb-2  p-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <h3 class="text-center text-violet font-bold m-1">Admin Panel</h3>
      <p class="text-center text-base m-2 font-medium">
        Easily organise your products.
      </p>
    </div>

    <div
      class="w-48 mt-10 text-gray-900 bg-transparent  shadow-gls rounded-lg dark:bg-white dark:border-white dark:text-white">
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
