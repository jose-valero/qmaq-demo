<template>
  <Dropdown
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    placeholder="Categoria"
  />
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
<style lang="stylus" scoped></style>
