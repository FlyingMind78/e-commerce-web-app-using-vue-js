<template>
  <form class="bg-transparent  shadow-3ht rounded px-8 pt-6 pb-8 mb-4 grow" @submit.prevent>
    <h3 class="text-xl font-bold text-center">Add a product</h3>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Product Title">
        Product Title
      </label>
      <input v-model="title"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Product Title" type="text" placeholder="Product Title" />
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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Rating Count">
        Rating Count
      </label>
      <input v-model.trim="rating.count"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Rating Count" type="number" placeholder="Rating Count" />
    </div>



    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Rate">
        Rate out of 5
      </label>
      <input v-model.trim="rating.rate"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Rate" type="number" placeholder="Rate" />
    </div>



    <base-button btnName="Add product" @click="addProductHandler"></base-button>
  </form>
</template>
<script setup>
import AdminBaseForm from "../AdminBaseForm.vue";
import { ref, reactive } from "vue"
import { useProductsStore } from "../../../stores/Products.js"

const { addProduct } = useProductsStore()


const title = ref("")
const price = ref(null)
const category = ref("")
const description = ref("")
const imgUrl = ref("")
const rating = ref({ count: null, rate: null })
function resetForm() {
  title.value = ""
  description.value = ""
  imgUrl.value = ""
  rating.value = ""
  price.value = null
  category.value = ""
  rating.value = { count: null, rate: null }
}

function addProductHandler() {
  const productData = {
    id: Date.parse(new Date()),
    title: title.value,
    description: description.value,
    image: imgUrl.value,
    rating: rating.value,
    price: price.value,
    category: category.value.toLowerCase()
  }

  addProduct(productData)
  resetForm()
}


</script>
