<script>
import CardCategory from "../Card/CardCategory1.vue";
import CardCategory2 from "../Card/CardCategory2.vue";
import Cupcake from "../../assets/image/Cupcake.png";
import Pizaa from "../../assets/image/pizza.png";
import Kebab from "../../assets/image/kebab.png";
import Salmon from "../../assets/image/salmon.png";
import Donat from "../../assets/image/doughnut.png";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  data() {
    return {
      cupcake: Cupcake,
      pizza: Pizaa,
      kebab: Kebab,
      salmon: Salmon,
      donat: Donat,
      modules: [Navigation, Autoplay],
      swiperInstance: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperInstance = this.$refs.swiper.swiper;
    });
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    onSlideChange() {},
  },

  components: {
    Swiper,
    SwiperSlide,
    CardCategory,
    CardCategory2,
  },
};
</script>

<template>
  <div class="bg-white md:px-16 px-8 md:-mt-20">
    <h1 class="md:text-[38px] text-[24px] text-black">Browser Our Category</h1>
    <h1 class="md:text-[38px] text-[24px] text-[#8BAC3E]">Receipt</h1>
    <div class="mt-10">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="50"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <CardCategory product="Cupcake" jumlah="22 Items" :image="cupcake" backgroundColor="#F0FEEB" />
        </swiper-slide>
        <swiper-slide>
          <CardCategory2 product="Pizza" jumlah="25 Items" :image="pizza" backgroundColor="#e1eff0" />
        </swiper-slide>
        <swiper-slide>
          <CardCategory product="Kebab" jumlah="12 Items" :image="kebab" backgroundColor="#EAEEFA" />
        </swiper-slide>
        <swiper-slide>
          <CardCategory2 product="Salmon" jumlah="22 Items" :image="salmon" backgroundColor="#F9EEF3" />
        </swiper-slide>
        <swiper-slide>
          <CardCategory product="Doughnut" jumlah="11 Items" :image="donat" backgroundColor="#F3F7D9" />
        </swiper-slide>
        ...
      </swiper>
    </div>
    <div class="flex md:justify-end justify-center w-full py-2 gap-2 px-8 mt-5">
      <button class="bg-[#8BAC3E] px-3 py-2 rounded-full flex gap-2 wiper-button-prev" @click="onSwiper()">
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

<style></style>
