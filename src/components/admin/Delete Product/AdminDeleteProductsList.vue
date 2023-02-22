<template>
  <admin-base-form>
    <template #default>
      <h3 class="text-xl font-bold text-center">Delete a product</h3>
      <admin-all-products>
        <template #button="{ product }">
          <base-button btnName="Delete Product" @click="deleteProduct(product.id)"></base-button>
        </template>
      </admin-all-products>
    </template>
  </admin-base-form>
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import AdminAllProducts from "../AdminAllProducts.vue";

import { useProductsStore } from "../../../stores/Products.js"
const { deleteProduct } = useProductsStore()

</script>
