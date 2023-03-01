<template>
  <div class="w-full  h-full p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">
    <div class="h-full">
      <div class="flex flex-col items-center">
        <span
          class="italic inline-block text-5xl p-3 font-bold bg-gradient-to-r  from-[#080749] via-[#721a96] to-[#0d799c] text-transparent bg-clip-text ">
          The
          One-stop Shopping
        </span>
        <br>
        <span
          class=" scale-[2.5] inline-block text-5xl p-3 font-bold bg-gradient-to-r  from-[#e6dd20] via-[#099995] to-[#e86a1b] text-transparent bg-clip-text ">
          /\
        </span>
        <br>
        <span
          class=" italic inline-block text-5xl p-3 font-bold bg-gradient-to-r  from-[#080749] via-[#721a96] to-[#0d799c] text-transparent bg-clip-text ">
          Destination
        </span>
      </div>

      <div class="drop-shadow-lg bg-white m-auto w-[75%] p-5   rounded-lg shadow-gls">

        <h4 class="font-bold text-teal-800 text-center text-2xl mb-4">E-COMMERCE APP </h4>
        <p class="text-lg font-medium indent-10 leading-7 tracking-wide mb-3">
          E-commerce is revolutionizing the way we all shop in India. Why do you want to
          hop from one store to another?

          A simple way to create an online store to list products, collect credit card payments, and ship your goods.
          Boost your sales with live shopping
        <p class="text-lg indent-10 leading-7 tracking-wide">
        <h2 class="text-xl  text-center leading-9 font-medium text-emerald-800 mb-2">

          9 elements of a strong eCommerce branding strategy
        </h2>
        <p class="text-lg indent-10 leading-7 text-gray-900  font-medium tracking-wide mb-5">

          A brand isn’t built overnight. It needs plenty of time to develop—and lots of trial and error. Few stores hit
          the nail on the head on their first attempt at developing a brand.


          But regardless of whether you’re creating a brand from scratch or rethinking your current branding, there are
          nine indispensable elements of any branding strategy.


          Purpose

          Mission and vision

          Values

          Visual identity

          Voice

          Target market

          Positioning

          Authenticity

          Cause



          01. Purpose

          Identifying your brand purpose starts with one simple question: why did you start your online store in the first
          place? Go beyond “making money.” Instead, think about the problem that you originally sought to solve and the
          factors that motivate you every day.


          Having a clear purpose gives your brand an instant differentiator. In fact, purpose-driven companies tend to
          grow three times faster and experience higher market share gains than their competitors, according to Deloitte.


        </p>

        </p>
        <p class="text-lg indent-10 leading-7 text-green-900  font-medium tracking-wide mb-5">
          Why is it impossible to mention online shopping without thinking of Amazon? The answer is simple—branding. The
          Amazon branding strategy has transformed it into a business that stands out in the crowded e-commerce space and
          rakes in billions in annual sales. But, how did they do it? This post looks deeper into the Amazon success
          strategy, plus how business owners can leverage some of these strategies and take their businesses to the next
          level.

        </p>
        <p class="text-lg indent-10 text-purple-700 leading-7 font-medium tracking-wide">
          95% of what marketing today is being spent on creating demand through being over-skewed on acquisition. And for
          a long-standing customer relationship to come to fruition, the focus needs to shift to creating demand—which is
          answered by a long-term approach to building a brand.

        </p>


        </p>





      </div>
      <div class="mt-20">

        <products-card :products="initialHomeProducts"></products-card>
      </div>
    </div>



  </div>
</template>
<script setup>
import { useProductsStore } from "../stores/Products.js"
import { storeToRefs } from "pinia";
import ProductsCard from "../components/products/ProductsCard.vue";
const { initialHomeProducts } = storeToRefs(useProductsStore())

</script>
