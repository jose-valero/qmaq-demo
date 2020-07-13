<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="py-3">
        <b-navbar-brand >
          <img src="@/assets/img/qmaq2.svg" alt="qmaq logo" width="80 " class="mx-2" />
          <!-- <span class="text-info">{{ title }}</span> -->
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Resultados"
    };
  }
};
</script>
