<script setup>
import CardCategory from "../Card/CardCategory1.vue";
import CardCategory2 from "../Card/CardCategory2.vue";
import Cupcake from "../../assets/image/Cupcake.png";
import Pizaa from "../../assets/image/pizza.png";
import Kebab from "../../assets/image/kebab.png";
import Salmon from "../../assets/image/salmon.png";
import Donat from "../../assets/image/doughnut.png";
</script>

<template>
  <div class="bg-white md:px-16 px-8 md:-mt-20">
    <h1 class="md:text-[38px] text-[24px] text-black">Browser Our Category</h1>
    <h1 class="md:text-[38px] text-[24px] text-[#8BAC3E]">Receipt</h1>
    <div class="grid md:grid-cols-5 grid-cols-1 justify-center gap-2 gap-y-2 mt-10" data-aos="fade-up">
      <CardCategory product="Cupcake" jumlah="22 Items" :image="Cupcake" backgroundColor="#F0FEEB" />
      <CardCategory2 product="Pizza" jumlah="25 Items" :image="Pizaa" backgroundColor="#e1eff0" />
      <CardCategory product="Kebab" jumlah="12 Items" :image="Kebab" backgroundColor="#EAEEFA" />
      <CardCategory2 product="Salmon" jumlah="22 Items" :image="Salmon" backgroundColor="#F9EEF3" />
      <CardCategory product="Doughnut" jumlah="11 Items" :image="Donat" backgroundColor="#F3F7D9" />
    </div>
    <div class="flex md:justify-end justify-center w-full py-2 gap-2 px-8 mt-5">
      <button class="bg-[#8BAC3E] px-3 py-2 rounded-full flex gap-2">
        <img src="../../assets/image/prev.png" alt="" class="md:w-[33px] w-[15px] m-auto" />
        <span class="text-white m-auto md:text-[16px] text-[11px]">Prev</span>
      </button>
      <button class="bg-[#8BAC3E] px-3 py-2 rounded-full flex gap-2">
        <span class="text-white m-auto md:text-[16px] text-[11px]">Next</span>
        <img src="../../assets/image/next.png" alt="" class="md:w-[33px] w-[15px] m-auto" />
      </button>
    </div>
  </div>
</template>
