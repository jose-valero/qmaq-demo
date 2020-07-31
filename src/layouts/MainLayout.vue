<template>
  <div class="container main">
    <Header />
    <router-view />
    <!--    <Footer />-->
  </div>
</template>

<script>
import Header from "@/components/HeaderBar/Header";
// import Footer from "@/components/FooterBar/Footer";

export default {
  name: "MainLayout",
  components: {
    Header
    // Footer
  }
};
</script>
<style scoped>
.main {
  height: 100vh !important;
}
</style>
