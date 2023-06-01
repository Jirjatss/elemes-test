<template>
  <div ata-aos="fade-down" data-aos-duration="3000" class="text-center py-5 rounded-md floating" :style="{ backgroundColor: backgroundColor }">
    <img :src="image" alt="" class="m-auto py-5" />
    <h1 class="text-[16px]">{{ product }}</h1>
    <h1 class="text-[14px]">{{ jumlah }}</h1>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
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
  mounted() {
    AOS.init({
      // Konfigurasi AOS (jika diperlukan)
    });
  },
};
</script>

<style>
body {
  background-color: blue;
}

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
