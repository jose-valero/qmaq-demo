<template>
  <div class="cat">
    <label class="text-dark mb-0 mr-2">CATEGORIA DE MAQUINARIA</label>
    <Dropdown
      :filter="true"
      v-model="maquinaria"
      :options="maquinarias"
      optionLabel="name"
      v-on:change="maquinariaChange"
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
      maquinaria: null,
      maquinarias: []
    };
  },
  created() {
    fetch("http://localhost:8080/file_uploader/tipomaquinaria").then(
      response => {
        response.json().then(maquinarias => {
          this.maquinarias = [];
          maquinarias.forEach(maquinaria =>
            this.maquinarias.push({ name: maquinaria, code: "a1" })
          );
        });
      }
    );
  },
  methods: {
    maquinariaChange(evt) {
      this.$emit("maquinaSeleccionada", evt.value.name);
    }
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
