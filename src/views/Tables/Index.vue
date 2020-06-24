<template>
  <div class="Home">
    <HomeTitle />
    <TxMaquinaria />
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle";
import TxMaquinaria from "./TxMaquinaria/TxMaquinaria";

export default {
  name: "TxMaquinaria",
  components: {
    HomeTitle,
    TxMaquinaria
  }
};
</script>
