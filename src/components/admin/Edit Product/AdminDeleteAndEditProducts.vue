<template>
    <admin-base-form v-if="!isInEditedMode">
        <template #default>
            <h3 class="text-xl font-bold text-center">Edit a product</h3>
            <admin-all-products>
                <template #button="{ product }">
                    <base-button @click="editButton(product)" btnName="Edit Product"></base-button>
                    <base-button btnName="Delete Product" @click="deleteProductHandler(product.id)"></base-button>
                    <!-- <base-button @click="editButton(product)" btnName="Delete Product"></base-button> -->
                </template>
            </admin-all-products>


        </template>
    </admin-base-form>
    <AdminEditProductForm v-else-if="isInEditedMode" :editProduct="toBeEditedProduct"
        @leave-edit-mode="isInEditedMode = false" />
    <base-modal-dialog v-if="isUserSure" @confirm-delete-action="confirmDeleteAction"
        @close-dialog="closeDialog"></base-modal-dialog>
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import AdminAllProducts from "../AdminAllProducts.vue";
import AdminEditProductForm from "./AdminEditProductForm.vue";
import { ref } from "vue";
import { useProductsStore } from "../../../stores/Products.js"
const { deleteProduct } = useProductsStore()
const isInEditedMode = ref(false)
const toBeEditedProduct = ref(null)

function editButton(product) {
    isInEditedMode.value = true
    toBeEditedProduct.value = product

}






// delete functionality
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
