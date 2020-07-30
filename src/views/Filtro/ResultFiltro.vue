<template>
    <div class="container bg-light">
        <div class="row"><h5 class="text-dark m-0 p-0 mt-3">BUSQUEDA DE DATOS ANUALES</h5></div>
        <nav class="row navbarFiltro navbar-expand mt-3">
            <ul class="navbar-nav">
                <li class="nav-item ml-0">
                    <calendar v-on:selectedFecha="getFechaDesde" rango="DESDE"/>
                </li>
                <li class="nav-item mr-1">
                    <calendar v-on:selectedFecha="getFechaHasta" rango="HASTA"/>
                </li>
                <li class="nav-item ml-5">
                    <DDCategoria v-on:maquinaSeleccionada="getCategoria"/>
                </li>
                <!--                <li class="nav-item ml-5">-->
                <!--                    <DDMaquinaria v-on:subcategoriaSeleccionada="getSubcategoria"/>-->
                <!--                </li>-->
            </ul>
            <form class="form-inline my-lg-0">
                <button v-on:click="dataFinal" type="button" class="btn btnBuscar ml-5">
                    BUSCAR
                </button>
            </form>
        </nav>

        <ResultTables class="mt-4"/>
    </div>
</template>

<script>
    import Calendar from "./Calendar";
    // import DDMaquinaria from "./DDMaquinaria";
    import DDCategoria from "./DDCategoria";
    import ResultTables from "../Tables/ResultTables";
    import TableService from "../../service/TableService";
    import {eventBus} from "../../eventBus/EventBus"

    export default {
        name: "ResultFiltro",
        components: {
            Calendar,
            // DDMaquinaria,
            DDCategoria,
            ResultTables
        },
        data() {
            return {
                sharedItems: null,
                categoriaSeleccionada: "",
                subcategoriaSeleccionada: [],
                fechaDesde: null,
                fechaHasta: null,
                tablaTotalService: null,
                dataTotal: null
            };
        },
        created() {
            this.tablaTotalService = new TableService;
        },
        methods: {
            getCategoria(categoria) {
                this.categoriaSeleccionada = categoria;
            },
            getSubcategoria(subCat) {
                this.subcategoriaSeleccionada = subCat
            },
            getFechaDesde(fechaDesde) {
                this.fechaDesde = fechaDesde;
            },
            getFechaHasta(fechaHasta) {
                this.fechaHasta = fechaHasta;
            },
            mergeMonths(data) {
                const dataReturn = []
                data.forEach(year => {
                    const yearKeys = Object.keys(year)
                    const meses = Object.keys(Object.values(year)[0])
                    const ObjectMonths = {}
                    this.monthArray().forEach(mon => {
                        ObjectMonths[mon] = this.emptyMonth()
                        if (meses.includes(mon)) {
                            ObjectMonths[mon] = year[yearKeys][mon]
                        }
                    })
                    dataReturn.push({[`${yearKeys[0]}`]: ObjectMonths})
                })
                return dataReturn
            },
            emptyMonth() {
                return {
                    "cif": "-",
                    "fob": "-",
                    "cantidad_declarada": "-"
                }
            },
            monthArray() {
                return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"]
            },

            dataFinal() {
                this.tablaTotalService.getTablaTotal(this.fechaDesde, this.fechaHasta, this.categoriaSeleccionada).then(data => {
                    this.dataTotal = this.mergeMonths(data);
                    eventBus.$emit('eventDatatotal', this.dataTotal)
                    eventBus.$emit('eventCategoria', this.categoriaSeleccionada)
                })
            }
        }
    };
</script>

<style lang="stylus">
    .btnBuscar {
        background-image: linear-gradient(to left bottom, #b5a605, #c59200, #d47a00, #e25b00, #ee2d04);
        font-size: 0.9rem;
        padding: 10px
        line-height: 3px;
        border: none
        font-weight: bold;
        vertical-align: center
        height: 18px
        margin-bottom: 1px;
    }

    .navbarFiltro {
        font-weight: bold;
        margin-top: 3%;
        font-size 0.75rem;
        box-sizing: border-box;
        padding: 0
    }

    ul li {
        margin-left: 80px;

        vertical-align: top;
    }

</style>

