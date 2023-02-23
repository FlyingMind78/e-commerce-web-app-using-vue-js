<template>
    <span v-if="badgeColor === 'blue'"
        class="bg-blue-100 text-blue-800 font-medium mr-2 text-lg px-3 py-1 mr-2  rounded-full dark:bg-blue-900 dark:text-blue-300">{{
            badgeName }}</span>
    <span v-else-if="badgeColor === 'gray'"
        class="bg-gray-100 text-gray-800  font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {{ badgeName }}</span>
    <span v-else-if="badgeColor === 'red'"
        class="bg-red-100 text-red-800 font-medium mr-2 text-lg px-3 py-1 mr-2 rounded-full dark:bg-red-900 dark:text-red-300">
        {{ badgeName }}</span>
    <span v-else-if="badgeColor === 'green'"
        class="bg-green-100 text-green-800 font-medium mr-2 text-lg px-3 py-1 mr-2  rounded-full dark:bg-green-900 dark:text-green-300">
        {{ badgeName }}</span>
    <span v-else-if="badgeColor === 'yellow'"
        class="bg-yellow-100 text-yellow-800 text-lg px-3 py-1 mr-2  font-medium mr-2  rounded-full dark:bg-yellow-900 dark:text-yellow-300">
        {{ badgeName }}</span>
    <span v-else-if="badgeColor === 'purple'"
        class="bg-purple-100 text-purple-800 text-lg px-3 py-1 mr-2 font-medium  rounded-full dark:bg-purple-900 dark:text-purple-300">
        {{ badgeName }}</span>
    <span v-else-if="badgeColor === 'pink'"
        class="bg-pink-100 text-pink-800 text-lg px-3 py-1 font-medium mr-2  rounded-full dark:bg-pink-900 dark:text-pink-300">{{
            badgeName
        }}</span>
</template>

<script setup>



const { badgeName, badgeColor } = defineProps({
    badgeName: String,
    badgeColor: String
})

</script>