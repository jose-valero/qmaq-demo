<template>
    <div class=" d-flex table-responsive">

        <table class="table" v-for="data in this.dataTotal" :key="data.key">
            <thead v-for="year in Object.keys(data)" :key="year">
            <caption>{{year}}</caption>
            <tr>
                <th scope="col">Mercado Hidrogruas</th>
                <span v-for="datosMeses in Object.values(data)" :key="datosMeses">
                <th v-for="datosMeses2 in Object.keys(datosMeses)" :key="datosMeses2" scope="col">{{datosMeses2}}</th>
                    </span>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th scope="row">Volúmen (uds)</th>
                <th></th>
                <th></th>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import TableService from "../../service/TableService";

    export default {
        name: "Total",
        data() {
            return {
                dataTotal: null,
                meses: [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Noviembre",
                    "Diciembre"
                ],
                tipoFacturas: [
                    "FOB",
                    "CIF",
                    "CIP",
                    "CFR",
                    "DAT",
                    "EXW",
                    "CPT",
                    "MUL",
                    "FCA",
                ]
            }
        },
        tablaTotalService: null,
        created() {
            this.tablaTotalService = new TableService;
        },
        mounted() {

            this.dataTotal = this.tablaTotalService.getDataMock().data
        },
        methods: {
        }
    }


</script>

<style scoped>
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .product-image {
        width: 100px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
</style>
