<template>
  <div class="maq">
    <MultiSelect
      v-model="selectedCities"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
    />
  </div>
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
<style lang="stylus">
.maq {
  text-align: center;
}

.p-multiselect .p-multiselect-label.p-placeholder {
  font-size: 1rem;
  line-height: 0.5rem;
  margin-bottom 0
}

.p-multiselect .p-multiselect-label {
  padding-right: 1rem;
}

.p-multiselect.p-component {
  margin-bottom: 10px;
}
</style>