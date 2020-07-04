<template>
  <MultiSelect
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select a City"
  />
</template>

<script>
export default {
  name: "DDMaquinaria",
  data() {
    return {
      selectedCities: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped></style>