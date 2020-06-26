<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>

<style lang="stylus">
#app {
  padding: 20px 0 75px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #f0f0f0;
}
</style>
