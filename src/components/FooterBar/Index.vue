<template>
  <footer class="footer-bar mt-3 bg-dark">
    <hr class="my-2" />

    <div class="row mx-2">
      <div class="col-sm-6 mb-sm-0">
        <FootLinks />
      </div>
      <div class="col-sm-6">
        <MadeByFoot />
      </div>
    </div>
  </footer>
</template>

<script>
import MadeByFoot from "./MadeByFoot";

import FootLinks from "./FootLinks";

export default {
  name: "FooterBar",
  components: { FootLinks, MadeByFoot }
};
</script>
