<template>
  <div class="cat">
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Categoria"
      class
    />
  </div>
</template>

<script>
export default {
  name: "DDCategoria",
  data() {
    return {
      selectedCity: null,
      cities: [
        { name: "asd1", code: "a1" },
        { name: "asd2", code: "a2" },
        { name: "asd3", code: "a3" },
        { name: "asd4", code: "a4" },
        { name: "asd5", code: "a5" }
      ]
    };
  }
};
</script>
<style lang="stylus">
.cat {
  text-align: center;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  font-size: 1rem;
  line-height: 0.5rem;
  margin-bottom 0
  
}

.p-dropdown .p-dropdown-label {
  padding-right: 1rem;
}

.p-dropdown.p-component {
  margin-bottom: 10px;
}
</style>
