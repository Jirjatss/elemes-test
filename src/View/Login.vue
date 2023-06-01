<template>
  <Navbar />
  <div class="bg-white pt-24 h-screen">
    <div class="lg:flex justify-center grid-rows-2">
      <div class="w-full m-auto text-center">
        <section data-aos="fade-right" data-aos-once="true">
          <div class="md:flex flex-cols-2 items-center justify-center px-6 py-8 mx-auto lg:py-0 md:space-x-24">
            <div class="md:w-1/2 w-3/4 mx-auto bg-white shadow-2xl md:mt-0 rounded-xl">
              <h1 class="text-xl font-bold text-black md:text-2xl text-center py-5 px-3 rounded-t-xl bg-[#8BAC3E]">Login</h1>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-3" @submit.prevent="handleLogin">
                  <div>
                    <label for="name" class="block mb-2 text-sm text-black">Username</label>
                    <input v-model="username" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black" placeholder="Enter Username" />
                  </div>

                  <div>
                    <label for="password" class="block mb-2 text-sm text-black">Password</label>
                    <input v-model="password" type="password" name="password" id="password" placeholder="Enter Password" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black mb-5" />
                  </div>

                  <button type="submit" @click="handleLogin" class="px-3 py-3 block mx-auto text-black bg-[#8BAC3E] rounded-lg">Masuk</button>
                  <p class="text-sm text-black font-medium underline text-center"><router-link class="nav-link" to="/register">Belum punya akun?</router-link></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-full md:py-20 py-5 mb-20" data-aos="fade-up" data-aos-once="true">
        <div class="relative md:flex hidden">
          <img src="../assets/image/1.png" alt="" class="m-auto md:w-[412.9px] w-[250px] px-10 mb-5" />
          <div class="md:flex bg-white bg-opacity-70 grid-cols-2 absolute -bottom-10 lg:left-16 md:w-[292px] sm:w-[210px] rounded-lg justify-center lg:py-5 py-2 space-x-6 px-3 hidden floating">
            <div>
              <img src="../assets/image/2.png" alt="" class="float md:w-[70px] sm:w-[65px] m-auto" />
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
              <img src="../assets/image/2.png" alt="" class="md:w-[70px] sm:w-[65px] m-auto" />
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
    </div>
  </div>
  <BottomNavbar />
</template>

<script>
import Navbar from "../components/Layout/Navbar.vue";
import BottomNavbar from "../components/Layout/BottomNavbar.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

export default {
  components: { Navbar, BottomNavbar },
  data() {
    return {
      username: "",
      password: "",
      userRegis: "",
      passRegis: "",
    };
  },
  methods: {
    handleLogin(event) {
      const dataLogin = {
        username: this.username,
        password: this.password,
      };
      event.preventDefault();
      if (this.username === "" || this.password === "") {
        Swal.fire({
          icon: "error",
          title: "Pastikan Data Yang Anda Masukkan Benar",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (this.username === this.userRegis && this.password === this.passRegis) {
        localStorage.setItem("UserLogin", JSON.stringify(dataLogin));
        event.preventDefault();

        Swal.fire({
          icon: "success",
          title: "Selamat Anda Berhasil Masuk",
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
          if (result) {
            // Jika pengguna menekan tombol "Ya, lanjutkan"
            // Navigasi ke halaman About menggunakan router-link
            this.$router.push("/");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Username atau Password Salah",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
  mounted() {
    AOS.init({
      // Konfigurasi AOS (jika diperlukan)
    });
  },
  created() {
    const savedData = localStorage.getItem("UserRegistrasi");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.userRegis = parsedData.username;
      this.passRegis = parsedData.password;
    }
  },
};
</script>

<style></style>
