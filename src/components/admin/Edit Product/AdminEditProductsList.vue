<template>
    <admin-base-form v-if="!isInEditedMode">
        <template #default>
            <h3 class="text-xl font-bold text-center">Edit a product</h3>
            <admin-all-products>
                <template #button="{ product }">
                    <base-button @click="editButton(product)" btnName="Edit Product"></base-button>
                </template>
            </admin-all-products>
        </template>
    </admin-base-form>
    <AdminEditProductForm v-else-if="isInEditedMode" :editProduct="toBeEditedProduct"
        @leave-edit-mode="isInEditedMode = false" />
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import AdminAllProducts from "../AdminAllProducts.vue";
import AdminEditProductForm from "./AdminEditProductForm.vue";
import { ref } from "vue";
const isInEditedMode = ref(false)
const toBeEditedProduct = ref(null)

function editButton(product) {
    isInEditedMode.value = true
    toBeEditedProduct.value = product

}

</script>
