<template>
    <div class="p-grid p-pt-2 p-align-center">
        <div class="p-col p-shadow-2 p-m-2">
            <div class="p-mx-6 p-my-4">
                <h6 class="p-text-bold">
                    DESDE ESTA APLICACION PODRA SUBIR ARCHIVOS CORRESPONDIENTES A LA ADUANA
                </h6>
                <FileUpload
                        name="total"
                        url="http://localhost:8080/maquinaria/excel/aduana"
                        v-on:error="error"
                        v-on:upload="exito"
                        v-on:progress="reset"
                        :multiple="true"
                        accept="text/csv"
                        :maxFileSize="3000000000"
                        chooseLabel="Archivo Aduana"
                        uploadLabel="Guardar"
                        cancelLabel="Cancel"
                        type="file"
                >
                    <template #empty v-if="cargaExitosa">Archivo cargado Exitosamente.</template>
                    <template #empty v-else-if="errorCarga">
                        Archivo no pudo ser cargado, no corresponde al tipo de archivo esperado <br>
                        Recuerde debe ser proveniente de la aduana y de extension .csv
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
                cargaExitosa: false,
                errorCarga: false
            };
        },

        components: {},

        watch: {},

        methods: {
            error() {
                this.errorCarga = true
            },
            exito() {
                this.cargaExitosa = true;
            },
            reset() {
                this.errorCarga = false
                this.cargaExitosa = false;
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
