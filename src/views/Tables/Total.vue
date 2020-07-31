<template>
    <div class=" d-flex table-responsive tablasTotal">
        <table
                v-if="dataTotal != null && dataTotal.length > 0"
                class="table table-bordered p-col-4"
        >
            <tbody class="text-dark">
            <tr class="d-flex flex-column p-pt-4 p-mt-4">
                <th scope="row" class="bg-warning">{{ tipoCategoria }}</th>
                <th scope="row">Volúmen (uds)</th>
                <th scope="row">Factura FOB (u$s 000)</th>
                <th scope="row">Factura CIF (u$s 000)</th>
            </tr>
            </tbody>
        </table>
        <table
                class="table table-bordered pb-"
                v-for="data in this.dataTotal"
                :key="data.key"
        >
            <thead class="thead-light">
            <tr v-for="year in Object.keys(data)" :key="year">
                <th
                        colspan="15"
                        class="bg-dark text-white text-center"
                >
                    {{ year}}
                </th>
            </tr>

            <tr v-for="meses in Object.values(data)"
                :key="meses.key">
                <th v-for="mes in Object.keys(meses)" :key="mes" class="text-center">
                    {{ mes }}
                </th>
            </tr>


            </thead>

                  <tbody class="text-center">
                    <tr v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
                        <td
                          v-for="datosMeses2 in Object.values(datosMeses)"
                          :key="datosMeses2.key"
                        >
                          {{ datosMeses2.cantidad_declarada }}
                        </td>
                    </tr>
                    <tr v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
                        <td
                          v-for="datosMeses2 in Object.values(datosMeses)"
                          :key="datosMeses2.key"
                        >
                          {{
                            Number(datosMeses2.fob)
                              ? datosMeses2.fob.toFixed(2)
                              : datosMeses2.fob
                          }}
                        </td>
                    </tr>
                    <tr v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
                        <td
                          v-for="datosMeses2 in Object.values(datosMeses)"
                          :key="datosMeses2.key"
                        >
                          {{
                            Number(datosMeses2.cif)
                              ? datosMeses2.cif.toFixed(2)
                              : datosMeses2.cif
                          }}
                        </td>
                    </tr>
                  </tbody>
        </table>
    </div>
</template>

<script>
    import TableService from "../../service/TableService";
    import {eventBus} from "../../eventBus/EventBus";

    export default {
        name: "Total",
        data() {
            return {
                dataTotal: null,
                tablaTotalService: null,
                tipoCategoria: ""
            };
        },
        created() {
            this.tablaTotalService = new TableService();
            eventBus.$on("eventDatatotal", this.getDataTotal);
            eventBus.$on("eventCategoria", this.getCategoriaMaquinaria);
        },
        methods: {
            getDataTotal(data) {
                this.dataTotal = data;
            },
            getCategoriaMaquinaria(categoria) {
                this.tipoCategoria = categoria;
            }
        }
    };
</script>

<style scoped>
    .table thead th {
        border-bottom: none;
    }
    .tablasTotal {
        font-size: .8rem;
    }
</style>
