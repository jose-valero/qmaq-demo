<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name: 'Home' }">
          <img
            src="@/assets/img/qmaq2.svg"
            alt="qmaq logo"
            width="100"
            class="m-3"
          />
          <span class="m-3 pt-2 ">{{ title }}</span>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      title: "Tittle Test"
    };
  }
};
</script>
