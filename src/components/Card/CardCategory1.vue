<template>
  <div class="text-center py-5 rounded-md floating-4" :style="{ backgroundColor: backgroundColor }">
    <img :src="image" alt="" class="m-auto py-5" />
    <h1 class="text-[16px]">{{ product }}</h1>
    <h1 class="text-[14px]">{{ jumlah }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: String,
      default: "",
    },
    jumlah: {
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
body {
  background-color: blue;
}

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
