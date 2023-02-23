<template>
  <admin-base-form>
    <template #default>
      <h3 class="text-xl font-bold text-center">Delete a product</h3>
      <admin-all-products>
        <template #button="{ product }">
          <base-button btnName="Delete Product" @click="deleteProductHandler(product.id)"></base-button>
        </template>
      </admin-all-products>

    </template>
  </admin-base-form>
  <base-modal-dialog v-if="isUserSure" @confirm-delete-action="confirmDeleteAction"
    @close-dialog="closeDialog"></base-modal-dialog>
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import AdminAllProducts from "../AdminAllProducts.vue";

import { useProductsStore } from "../../../stores/Products.js"
import { ref } from "vue"
const { deleteProduct } = useProductsStore()

const isUserSure = ref(false)
const toDeleteProdId = ref(null)

function deleteProductHandler(prodId) {
  console.log("Clicking delete button")
  isUserSure.value = true
  toDeleteProdId.value = prodId
}
function closeDialog() {
  console.log("Closing dialog")
  isUserSure.value = false;

}
function confirmDeleteAction() {
  deleteProduct(toDeleteProdId.value)
  console.log("Product Deleted")
  isUserSure.value = false;
}

</script>
