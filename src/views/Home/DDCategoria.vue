<template>
  <div class="cat">
    <label class="text-dark mb-0 mr-2">CATEGORIA DE MAQUINARIA</label>
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder=""
      class="bg-light rounded-0"
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
  
}

.p-dropdown .p-dropdown-label {
  padding-right: 1rem;
}

.p-dropdown.p-component {
  margin-bottom: 10px;
}
  .p-dropdown {
    margin-bottom : 0!important;
    justify-items : center;
    height : 20px;
    padding : 0
  }
.p-dropdown-trigger-icon {
  color : black;
}
  .cat label {
    vertical-align : middle;
    margin-bottom: 1px;
  }
.p-dropdown-label {
  color: black!important;
  font-size: .9rem !important;
  line-height: 0;
}

</style>
