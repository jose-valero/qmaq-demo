<template>
  <div class="p-grid p-pt-2 p-align-center">
    <div class="p-col p-shadow-2 p-m-2">
      <div class="p-mx-6 p-my-4">
        <h5 class="p-text-bold">ARCHIVOS DE ADUANA</h5>
        <h6 class="p-text-bold">DESDE ESTA APLICACION PODRA SUBIR ARCHIVOS CORRESPONDIENTES AL AFIP</h6>
        <FileUpload
          name="total"
          url="http://localhost:8080/maquinaria/excel/mainfile"
          v-on:before-upload="onUpload"
          :multiple="true"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          :maxFileSize="3000000000"
          chooseLabel="Adjuntar Archivo"
          uploadLabel="Guardar"
          cancelLabel="Cancel"
          type="file"
        >
          <template #empty>
            <p v-if="val">Archivo cargado Exitosamente</p>
          </template>
        </FileUpload>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {
      val: false
    };
  },

  components: {},

  watch: {},

  methods: {
    onUpload() {
      this.val = true;
    }
  }
};
</script>

<style lang="stylus">
h5 {
  color: #f56827;
}

h6 {
  color: black;
}

.p-button {
  background: #f56827 !important;
}

.p-fileupload .p-fileupload-buttonbar {
  background: none !important;
  border: 0 !important;
}

.p-fileupload .p-fileupload-content {
  background: none !important;
  border: 0 !important;
  color: #1f2d40 !important;
}
</style>
