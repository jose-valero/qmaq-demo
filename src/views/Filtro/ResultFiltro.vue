<template>
  <div class="container bg-light">
    <div class="row">
      <h5 class="text-dark p-mx-5 p-p-0 p-my-4">BUSQUEDA DE DATOS ANUALES</h5>
    </div>

    <nav class="p-d-flex p-ai-center navbar-expand mx-0 p-py-2 p-shadow-1">
      <ul class="navbar-nav p-text-bold">
        <li class="nav-item p-ml-1">
          <Calendar v-on:selectedFecha="getFechaDesde" rango="DESDE" />
        </li>
        <li class="nav-item p-mr-1">
          <Calendar v-on:selectedFecha="getFechaHasta" rango="HASTA" />
        </li>
        <li class="nav-item p-ml-7">
          <DDCategoria v-on:maquinaSeleccionada="getCategoria" />
        </li>
        <!--                <li class="nav-item ml-5">-->
        <!--                    <DDMaquinaria v-on:subcategoriaSeleccionada="getSubcategoria"/>-->
        <!--                </li>-->
      </ul>
      <form class="form-inline my-lg-0">
        <Button
          v-if="!isClear"
          :disabled="botonDisabled"
          v-on:click="dataFinal"
          label="Buscar"
          class="p-button-sm p-button-raised p-button-warning mx-5 my-0"
        ></Button>
        <Button
          v-if="isClear"
          v-on:click="limpiar"
          label="Limpiar"
          class="p-button-sm p-button-raised p-button-warning mx-5 my-0"
        ></Button>
      </form>
    </nav>

    <ResultTables class="mt-4" />
  </div>
</template>

<script>
import Calendar from "./Calendar";
// import DDMaquinaria from "./DDMaquinaria";
import DDCategoria from "./DDCategoria";
import ResultTables from "../Tables/ResultTables";
import TableService from "../../service/TableService";
import { eventBus } from "../../eventBus/EventBus";

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
      dataTotal: null,
      botonDisabled: false,
      isClear: false
    };
  },
  created() {
    this.tablaTotalService = new TableService();
    this.isButtonDisabled();
  },
  methods: {
    getCategoria(categoria) {
      this.categoriaSeleccionada = categoria;
      this.isButtonDisabled();
    },
    getSubcategoria(subCat) {
      this.subcategoriaSeleccionada = subCat;
    },
    getFechaDesde(fechaDesde) {
      this.fechaDesde = fechaDesde;
      this.isButtonDisabled();
    },
    getFechaHasta(fechaHasta) {
      this.fechaHasta = fechaHasta;
      this.isButtonDisabled();
    },
    mergeMonths(data) {
      const dataReturn = [];
      data.forEach(year => {
        let total = this.emptyTotales();
        let q1 = this.emptyTotales();
        let q2 = this.emptyTotales();
        const yearKeys = Object.keys(year);
        const meses = Object.keys(Object.values(year)[0]);
        const ObjectMonths = {};
        this.monthArray().forEach((mon, index) => {
          ObjectMonths[mon] = this.emptyMonth();
          if (meses.includes(mon)) {
            ObjectMonths[mon] = year[yearKeys][mon];
          }

          if (index <= 6 && ObjectMonths[mon].cif !== "--") {
            q1.cif += ObjectMonths[mon].cif;
            q1.cantidad_declarada += ObjectMonths[mon].cantidad_declarada;
            q1.fob += ObjectMonths[mon].fob;
          }
          if (index === 6) {
            ObjectMonths["Sem I"] = q1;
          }
          if (index > 6 && ObjectMonths[mon].cif !== "--") {
            q2.cif += ObjectMonths[mon].cif;
            q2.cantidad_declarada += ObjectMonths[mon].cantidad_declarada;
            q2.fob += ObjectMonths[mon].fob;
          }
          if (index === 13) {
            ObjectMonths["Sem II"] = q2;
          }
          if (ObjectMonths[mon].cif !== "--") {
            total.cif += ObjectMonths[mon].cif;
            total.cantidad_declarada += ObjectMonths[mon].cantidad_declarada;
            total.fob += ObjectMonths[mon].fob;
          }
          if (index === 14) {
            ObjectMonths["Total"] = total; //revisar
          }
        });
        dataReturn.push({ [`${yearKeys[0]}`]: ObjectMonths });
      });
      return dataReturn;
    },
    emptyMonth() {
      return {
        cif: "--",
        fob: "--",
        cantidad_declarada: "--"
      };
    },
    emptyTotales() {
      return {
        cif: 0,
        fob: 0,
        cantidad_declarada: 0
      };
    },
    monthArray() {
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Sem I",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
        "Sem II",
        "Total"
      ];
    },
    dataFinal() {
      this.isClear = true;
      this.tablaTotalService
        .getTablaTotal(
          this.fechaDesde,
          this.fechaHasta,
          this.categoriaSeleccionada
        )
        .then(data => {
          this.dataTotal = this.mergeMonths(data);
          eventBus.$emit("eventDatatotal", this.dataTotal);
          eventBus.$emit("eventCategoria", this.categoriaSeleccionada);
        });
    },
    isButtonDisabled() {
      if (
        this.categoriaSeleccionada === "" ||
        this.fechaDesde == null ||
        this.fechaHasta == null
      ) {
        this.botonDisabled = true;
      } else {
        this.botonDisabled = false;
      }
    },
    limpiar() {
      while (this.dataTotal.length > 0) {
        this.dataTotal.pop();
      }
      this.categoriaSeleccionada = "";
      this.fechaDesde = null;
      this.fechaHasta = null;
      this.isClear = false;
      this.isButtonDisabled();
    }
  }
};
</script>

<style lang="stylus" scope>
// .navbarFiltro {
// font-weight: bold;
// margin-top: 3%;
// font-size: 0.75rem;
// box-sizing: border-box;
// padding: 0;
// }
ul li {
    margin-left: 80px;
    vertical-align: top;
}
</style>
