<script setup>
import Navbar from "../components/Layout/Navbar.vue";
import Home from "../components/Dashboard/Home.vue";
import Category from "../components/Dashboard/Category.vue";
import Trending from "../components/Dashboard/Trending.vue";
import Footer from "../components/Layout/Footer.vue";
import BottomNavBar from "../components/Layout/BottomNavbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <Home />
    <Category />
    <Trending />
    <Footer />
    <BottomNavBar />
  </div>
</template>

<style scoped></style>
