<template>
  <div class="Archivo">
    <!-- <label class="text-dark mb-0 mr-2">Tipo De Archivo</label> -->
    <Dropdown
      v-model="Archivo"
      :options="tipoArchivo"
      optionLabel="name"
      placeholder="Select type of file"
    />
  </div>
</template>

<script>
export default {
  name: "DDArchivo",
  data() {
    return {
      Archivo: null,
      tipoArchivo: [
        { name: "AFIP", code: "AFIP" },
        { name: "DOC INTERNO", code: "INT" }
      ]
    };
  }
};
</script>

<style lang="stylus">
.p-dropdown {
  height: 2rem;
  margin-bottom: 2rem !important;
  margin-top: 2rem !important;
}

.p-dropdown-label, .p-inputtext, .p-placeholder {
  color: white !important;
}
</style>
