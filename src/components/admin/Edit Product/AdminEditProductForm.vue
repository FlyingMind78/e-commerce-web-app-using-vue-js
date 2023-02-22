<template>
    <admin-base-form @submit.prevent>
        <template #default>
            <h3 class="text-xl font-bold text-center">Edit a product</h3>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Product title">
                    Product title
                </label>
                <input v-model="title"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Product title" type="text" placeholder="Product title" />
            </div>


            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Price">
                    Price
                </label>
                <input v-model="price"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Price" type="number" placeholder="Price" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Category">
                    Category
                </label>
                <input v-model="category"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Category" type="text" placeholder="Category" />
            </div>


            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Description">
                    Description
                </label>
                <input v-model="description"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Description" type="text" placeholder="Description" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Image URL">
                    Image URL
                </label>
                <input v-model="imgUrl"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Image URL" type="text" placeholder="Image URL" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Rating">
                    Rating
                </label>
                <input v-model="rating.rate"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Rating" type="number" placeholder="Rating" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Rating count">
                    Rating count
                </label>
                <input v-model="rating.count"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Rating count" type="number" placeholder="Rating count" />
            </div>
            <base-button btnName="Go Back" class="mr-10" @click="$emit('leave-edit-mode')"></base-button>
            <base-button btnName="Update product" @click="updateProductHandler"></base-button>
        </template>
    </admin-base-form>
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import { unref, ref, onMounted } from "vue"
import { useProductsStore } from "../../../stores/Products.js"

const { editProduct } = defineProps({
    editProduct: Object
})

const { updateProduct } = useProductsStore();


const toEditProduct = unref(editProduct)
const title = ref(null)
const price = ref(null)
const category = ref(null)
const description = ref(null)
const imgUrl = ref(null)
const rating = ref({ count: null, rate: null })


function initInputValues() {

    title.value = toEditProduct.title;
    price.value = toEditProduct.price;
    category.value = toEditProduct.category;
    description.value = toEditProduct.description;
    imgUrl.value = toEditProduct.image;
    rating.value.count = toEditProduct.rating.count
    rating.value.rate = toEditProduct.rating.rate
}
function reset() {
    title.value = ""
    price.value = ""
    category.value = ""
    description.value = ""
    imgUrl.value = ""
    rating.value = { rate: null, count: null }
}
function updateProductHandler() {
    const newlyUpdatedProduct = {

        id: toEditProduct.id,
        title: title.value,
        category: category.value.toLowerCase(),
        description: description.value,
        price: price.value,
        image: imgUrl.value,
        rating: rating.value

    }
    updateProduct(toEditProduct.id, newlyUpdatedProduct)
    reset()
}

onMounted(() => {

    initInputValues()
})

</script>
