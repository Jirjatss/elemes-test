<template>
  <div class="bg-white pt-20" id="home">
    <div class="lg:flex justify-center grid-rows-2">
      <div class="w-full lg:flex md:py-20 py-10">
        <div class="m-auto lg:px-16 px-10 -mt-4 gap-y-3">
          <h1 class="md:text-[64px] text-[50px] text-[#8BAC3E]" data-aos="fade-right" data-aos-once="true">Good Food Us</h1>
          <h1 class="md:text-[64px] text-[50px] text-[#8BAC3E]" data-aos="fade-right" data-aos-once="true">Good Mood</h1>
          <div class="lg:flex py-3 md:flex hidden">
            <div class="grid grid-rows-2">
              <h1 class="md:text-[18px] text-[12px]" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
                I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
              </h1>
              <div class="grid grid-cols-2 mt-5 gap-3 lg:w-1/2 items-start w-3/4" data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
                <router-link to="/register" class="bg-[#A4B441] rounded-3xl py-3 lg:text-sm md:text-[14px] text-[10px] text-white text-center">Daftar Sekarang</router-link>
                <button class="bg-slate-200 rounded-3xl py-3 lg:text-sm md:text-[14px] text-[10px]">About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:py-20 py-5 mb-20" data-aos="fade-up" data-aos-once="true">
        <div class="relative">
          <img src="../../assets/image/1.png" alt="" class="m-auto md:w-[412.9px] w-[250px] px-10 mb-5" />
          <div class="md:flex bg-white bg-opacity-70 grid-cols-2 absolute -bottom-10 lg:left-16 md:w-[292px] sm:w-[210px] rounded-lg justify-center lg:py-5 py-2 space-x-6 px-3 hidden floating">
            <div>
              <img src="../../assets/image/2.png" alt="" class="float md:w-[70px] sm:w-[65px] m-auto" />
            </div>
            <div class="grid grid-rows-3">
              <h1 class="md:text-[14px] text-[10px] text-start">Green Salad Tomato</h1>
              <h1 class="md:text-[12px] text-[8px] text-slate-400 text-start italic">Tomato</h1>
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
              </div>
            </div>
          </div>
          <div class="md:hidden bg-white bg-opacity-70 grid-cols-2 absolute -bottom-10 right-16 md:w-[292px] sm:w-[210px] rounded-lg justify-center lg:py-5 py-2 space-x-6 px-3 flex floating">
            <div>
              <img src="../../assets/image/2.png" alt="" class="md:w-[70px] sm:w-[65px] m-auto" />
            </div>
            <div class="grid grid-rows-3">
              <h1 class="md:text-[14px] text-[10px] text-start">Green Salad Tomato</h1>
              <h1 class="md:text-[12px] text-[8px] text-slate-400 text-start italic">Tomato</h1>
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-8 py-3 md:hidden flex mb-10">
        <div class="grid grid-rows-2">
          <h1 class="md:text-[18px] text-[12px]" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
            I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </h1>
          <div class="grid grid-cols-2 mt-5 gap-3 lg:w-1/2 items-start w-3/4" data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
            <router-link to="/register" class="bg-[#A4B441] rounded-3xl py-3 lg:text-sm md:text-[14px] text-[10px] text-white text-center">Daftar Sekarang</router-link>
            <button class="bg-slate-200 rounded-3xl py-3 lg:text-sm md:text-[14px] text-[10px]">About Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({
      // Konfigurasi AOS (jika diperlukan)
    });
  },
};
</script>

<style>
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 8px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>
