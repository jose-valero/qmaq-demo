<template>
  <div class="home-view">
    <HomeTitle />
    <TxTotales />
    <TxShareOfSegment />
    <!-- <b-button class="m-4" justify="center" variant="dark">Hidrogruas</b-button> -->
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle";
import TxTotales from "../Tables/Hidrogruas/TxTotales";
import TxShareOfSegment from "../Tables/Hidrogruas/TxShareOfSegment";

export default {
  name: "Home",
  components: {
    HomeTitle,
    TxTotales,
    TxShareOfSegment
  }
};
</script>
<style lang="stylus" scoped></style>
