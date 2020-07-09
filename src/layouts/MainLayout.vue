<template>
  <div class="container">
    <Header />
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderBar/Header";
import Footer from "@/components/FooterBar/Footer";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer
  }
};
</script>
