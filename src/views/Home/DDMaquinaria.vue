<template>
  <div class="maq">
    <label class="text-dark mb-0 mr-2">TABLA RESULTADO</label>
    <MultiSelect
      v-model="selectedCities"
      :options="cities"
      optionLabel="name"
      placeholder=""
      class="bg-light rounded-0 "
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
  .p-multiselect-trigger-icon {
    color :black;
  }
.p-multiselect-label-container {
    height : 18px
    /*vertical-align : top;*/
    padding: none;
}
.maq label {
    vertical-align: middle;
}
    .p-multiselect-label {
        color: black!important;
        font-size: .9rem;
        line-height: 0;
    }

</style>
