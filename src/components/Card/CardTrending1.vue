<template>
  <div class="text-start py-5 rounded-md px-5" :style="{ backgroundColor: backgroundColor }">
    <img :src="image" alt="" class="m-start py-5 w-[114.73px] floating-4" />
    <div class="grid grid-rows-3">
      <h1 class="md:text-[26px] text-[10px] text-start floating-4">{{ product }}</h1>
      <h1 class="md:text-[18px] text-[8px] text-[#8BAC3E] text-start floating-4">{{ category }}</h1>
      <div class="rating floating-4">
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" checked />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 w-[10.66px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "", // Warna latar belakang default
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.floating-4 {
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating-4 {
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
