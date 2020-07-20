<template>
    <div class=" d-flex table-responsive">
        <table class="table" v-for="(data, key) in dataTotal" :index="key" :key = "key">
<!--            <caption>List of users</caption>-->
            <thead>
            <tr>
                <th scope="col">Mercado Hidrogruas</th>
<!--                <th v-for="mes in meses" :key = "mes" scope="col">{{mes}}</th>-->
<!--                <th>{{ data.mes }}</th>-->

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Volúmen (uds)</th>
                <td>{{ key }}</td>
                <td>{{ data }}</td>

            </tr>
<!--            <tr v-for="tipoFactura in tipoFacturas" :key="tipoFactura">-->
<!--                <th scope="row" >Factura {{ tipoFactura }} (u$s 000)</th>-->
<!--                <td>Jacob</td>-->
<!--                <td>Thornton</td>-->
<!--                <td>@fat</td>-->
<!--            </tr>-->
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
                years: [
                    "2015",
                    "2014",
                    "2013"
                ],
                meses : [
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
            this.dataTotal = this.tablaTotalService.getDataMock();
            console.log(this.dataTotal)
            // this.productService.getData.then(data => this.products = data);
        },
        methods: {
            formatCurrency(value) {
                return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            },
            // getMes() {
            //     this.totales.forEach(data2 => Object.values(data2).forEach(data3 => this.mes = data3.mesAno));
            //     return this.mes;
            // }
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
