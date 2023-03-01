<template>
  <div class="p-4 flex flex-row flex-nowrap gap-4 justify-items-center items-center">
    <TheAdminSideBar @admin-action="setAdminAction" />
    <div class="h-screen"></div>
    <AdminAddProductForm v-if="activeFormType === 'add'" />
    <AdminDeleteAndEditProducts v-else-if="activeFormType === 'update&delete'" />
  </div>
</template>

<script setup>
import TheAdminSideBar from "../components/admin/TheAdminSideBar.vue";
import AdminAddProductForm from "../components/admin/AddProduct/AdminAddProductForm.vue";
import AdminDeleteAndEditProducts from "../components/admin/Edit Product/AdminDeleteAndEditProducts.vue";

import { ref, unref } from "vue";

const activeFormType = ref("");
function setAdminAction(action) {
  activeFormType.value = unref(action);
}
</script>
