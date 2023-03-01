<template>
    <nav>
        <ul class="inline-flex -space-x-px ">
            <!-- <li>
                <a @click="emit('prev-page')"
                    class="px-3 py-2 ml-0 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li> -->
            <li v-for="(_, i) in Array(noOfPages).fill(' ')">
                <a @click="emit('page-number', i + 1)"
                    class="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{ i + 1 }}</a>
            </li>

            <!-- <li>
                <a @click="emit('next-page')"
                    class="px-3 py-2  cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li> -->
        </ul>
    </nav>
</template>
<script setup>
const { noOfPages } = defineProps({
    noOfPages: Number
})
const emit = defineEmits(["page-number"])
</script>