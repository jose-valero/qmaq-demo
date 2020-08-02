<template>
  <div class="p-grid p-pt-2 p-align-center">
    <div class="p-col p-shadow-2 p-m-2 bg-light">
      <div class="p-mx-6 p-my-4">
        <h6 class="p-text-bold">
          Desde esta aplicación podrá subir los archivos correspondientes para
          visualizar tabla de resultados totales
        </h6>
        <FileUpload
          name="total"
          url="http://localhost:8080/maquinaria/excel/aduana"
          v-on:error="error"
          v-on:upload="exito"
          v-on:select="reset"
          accept=".csv"
          :maxFileSize="3000000000"
          mode="basic"
          chooseLabel="Archivo Aduana"
          type="file"
          class="mt-3"
        />

        <div v-if="cargaExitosa" class="text-dark mt-3">
          Archivo cargado Exitosamente.
        </div>
        <div v-else-if="errorCarga" class="text-dark mt-3">
          Archivo no pudo ser cargado, no corresponde al tipo de archivo
          esperado
          <br />Recuerde debe ser proveniente de la aduana y de extension .csv
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {
      cargaExitosa: false,
      errorCarga: false
    };
  },

  components: {},

  watch: {},

  methods: {
    error() {
      this.errorCarga = true;
    },
    exito() {
      this.cargaExitosa = true;
    },
    reset() {
      this.errorCarga = false;
      this.cargaExitosa = false;
    }
  }
};
</script>

<style lang="stylus">
h6 {
  color: #1f2d40;
}
</style>
