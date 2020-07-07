<template>
  <div class="maq">
    <label class="text-dark mb-0 mr-2">TABLA RESULTADO</label>
    <MultiSelect
      v-model="subcategoria"
      :options="cities"
      optionLabel="name"
      v-on:change="subcategoriaChange"
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
      subcategoria : null,
      selectedSubcategoria: [],
      cities: []
    };
  },
  created() {
    fetch("http://localhost:8080/file_uploader/getsubcategorias").then(
            response => {
              response.json().then(maquinarias => {
                this.cities = []
                maquinarias.forEach(maquinaria =>
                        this.cities.push({name: maquinaria, code: "a1"}))
              });
            }
    );
  },
  methods: {
    subcategoriaChange(evt) {
      evt.value.forEach(subCat => {
        if (
          !this.selectedSubcategoria.includes(subCat.name) &&
          this.selectedSubcategoria !== undefined
        ) {
          this.selectedSubcategoria.push(subCat.name);
        }
      });
      console.log(this.selectedSubcategoria)
    }
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
