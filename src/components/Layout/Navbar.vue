.
<template>
  <div class="navbar bg-white px-10 py-5 fixed z-50">
    <div class="navbar-start">
      <div class="dropdown"></div>
      <a href="/" class="btn btn-ghost normal-case text-xl">
        <img class="md:w-[207px] md:h-[50px] w-[150px] h-[36px]" src="../../assets/image/logo.png" alt="" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/#home" class="">Home</a></li>
        <li><a>About</a></li>
        <li>
          <a class="relative"
            >Promotions
            <span class="badge absolute -top-1 -right-2 text-white bg-red-600 border-none">Hot</span>
          </a>
        </li>
        <li><a>Blogs</a></li>
        <li><a href="/#footer">Contact Us</a></li>
      </ul>
    </div>
    <div class="navbar-end space-x-3">
      <div>
        <router-link v-if="name" to="/" class="lg:flex hidden">{{ name }}</router-link>
        <router-link v-else to="/login" class="lg:flex hidden">Masuk</router-link>
      </div>
      <div>
        <button type="" v-if="name" @click="keluar" class="bg-red-500 rounded-3xl px-5 py-3 lg:text-sm md:text-[14px] text-[10px] text-white">Log Out</button>
        <a href="/register" v-else class="bg-[#A4B441] rounded-3xl px-5 py-3 lg:text-sm md:text-[14px] text-[10px] text-white">Daftar Sekarang</a>
      </div>
      <!-- <div>
        <router-link v-if="name" @click="logout" class="bg-[#A4B441] rounded-3xl px-5 py-3 lg:text-sm md:text-[14px] text-[10px] text-white">Logout </router-link>
        <router-link v-else class="bg-red-500 rounded-3xl px-5 py-3 lg:text-sm md:text-[14px] text-[10px] text-white">Log Out </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    keluar() {
      Swal.fire({
        title: "Apakah Anda Yakin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#A4B441",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Anda Berhasil Keluar", "success");
          localStorage.removeItem("UserLogin");
          this.name = "";
        }
        this.$router.push("/login");
      });
    },
    getdata() {
      const data = localStorage.getItem("UserLogin");

      if (data) {
        const datauser = JSON.parse(data);
        this.name = datauser.username;
      }
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style></style>
