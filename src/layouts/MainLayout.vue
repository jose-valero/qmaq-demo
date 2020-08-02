<template>
  <div class="container main">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
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
.fade-enter-active {
  transition: transform 1s, opacity 2s;
}
.fade-enter {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
