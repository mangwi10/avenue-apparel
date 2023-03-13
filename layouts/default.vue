<template>
  <div>
    <div>
      <Navbar></Navbar>
      <!-- <Header></Header> -->
      <Nuxt />
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Header, Footer, Navbar
  }
}
</script>
<style></style>
