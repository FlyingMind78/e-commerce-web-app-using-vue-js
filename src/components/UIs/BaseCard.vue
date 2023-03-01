<template>
  <!-- class="block max-w-sm p-7 pb-20 bg-white cursor-pointer border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" -->
  <a
    class=" cursor-pointer overflow-hidden max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img :src="imageUrl" alt="Image" class="rounded-t-lg h-1/3 m-2 " />
    <div class="p-5">

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ title }}
      </h5>

      <p class="text-md m-4">
        <span class="text-lg text-red-900 font-medium">
          Price:
        </span>
        <span class="text-md bg-teal-800 text-white rounded-lg px-2 py-0.5 text-center font-medium ml-1">

          Rs. {{ price }}
        </span>
      </p>

      <base-badge :badgeName="category" :badgeColor="randomColor"></base-badge>


      <p class=" block mt-3 text-md text-purple-900 font-medium leading-7 p-2">
        {{ description.slice(0, 130) + " ..." }}
      </p>

      <p class="block m-2">
        <span class="text-lg text-rose-900 font-medium">
          Rating :

        </span>
      <div class="flex flex-row my-2">

        <base-rating-star-icon v-for="(_, i) in Array(5).fill(' ')"
          :starType="i + 1 <= Math.floor(rating.rate) ? 'full' : ((i + 1) - rating.rate) < 1 ? 'half' : 'empty'"></base-rating-star-icon>
      </div>
      <span class="text-md bg-green-800 text-white rounded-lg px-2 py-0.5 text-center font-medium ml-1">



        {{ rating.rate }}
      </span>
      <span class="text-md bg-sky-900 text-white rounded-lg px-2 py-0.5 text-center font-medium ml-1">
        out of
      </span>
      <span class="text-md bg-red-800 text-white rounded-lg px-2 py-0.5 text-center font-medium ml-1">
        {{ rating.count }}
      </span>

      </p>
      <base-button btnName="Add to cart" class="mt-4"></base-button>
    </div>

  </a>
</template>
<script setup>
import { computed } from "vue"
const { title, price, description, imageUrl, category, rating } = defineProps({
  title: String,
  price: Number,
  description: String,
  imageUrl: String,
  category: String,
  rating: Object,
});


const colors = ["red", 'gray', "purple", "yellow", "pink", "blue", "green"]

const randomColor = computed(randColor)
function randColor() {
  return colors[Math.floor(Math.random() * colors.length)]

}


</script>
