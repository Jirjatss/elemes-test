<script setup>
import CardTrending1 from "../Card/CardTrending1.vue";
import CardTrending2 from "../Card/CardTrending2.vue";
import Trending1 from "../../assets/image/trending1.png";
import Trending2 from "../../assets/image/trending2.png";
import Trending3 from "../../assets/image/trending3.png";
import Trending4 from "../../assets/image/trending4.png";
import Trending5 from "../../assets/image/trending5.png";
import Trending6 from "../../assets/image/trending6.png";
import Trending7 from "../../assets/image/trending7.png";
import Trending8 from "../../assets/image/trending8.png";
</script>

<template>
  <div class="bg-white md:px-16 px-8 lg:mt-5 mt-10 py-20" id="trending">
    <h1 class="md:text-[38px] text-[24px] text-black">Browser Our Trending</h1>
    <h1 class="md:text-[38px] text-[24px] text-[#8BAC3E]">Receipt</h1>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-2 gap-y-2 mt-10" data-aos="fade-down">
      <CardTrending1 :image="Trending1" backgroundColor="#E6F3F5" product="Pizza Paperoni" category="Pizza" />
      <CardTrending2 :image="Trending2" backgroundColor="#E6F3F5" product="Pizza Meat" category="Pizza" />
      <CardTrending1 :image="Trending3" backgroundColor="#EAEEFA" product="Doner Kebab" category="Kebab" />
      <CardTrending2 :image="Trending4" backgroundColor="#F9EEF3" product="Salmon Roll" category="Salmon" />
      <CardTrending1 :image="Trending5" backgroundColor="#F0FEEB" product="Cupcake Choco" category="Cupcake" />
      <CardTrending2 :image="Trending6" backgroundColor="#F3F7D9" product="Doughnut Milk" category="Doughnut" />
      <CardTrending1 :image="Trending7" backgroundColor="#F3F7D9" product="Doughnut Unicorn" category="Doughnut" />
      <CardTrending2 :image="Trending8" backgroundColor="#EAEEFA" product="Kathi Kebab" category="Kebab" />
    </div>
    <div class="justify-center flex mt-10">
      <a class="bg-[#8BAC3E] px-3 py-3 rounded-full text-center" href="#trending">
        <span class="text-white text-[16px]">All Receipt</span>
      </a>
    </div>
  </div>
</template>

<style></style>
