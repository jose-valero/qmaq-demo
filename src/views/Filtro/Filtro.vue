<template>
  <div class="container bg-light filtro">
    <div class="row">
      <h5 class="text-dark p-mx-5 p-p-0 p-my-4">BUSQUEDA DE DATOS ANUALES</h5>
    </div>

    <div class="mx-0 p-py-2 p-shadow-1">
      <ul
        class="d-flex p-justify-around p-align-center p-text-bold p-p-0 p-m-0"
      >
        <li class="p-ml-0">
          <label class="text-dark mb-0 mr-2">DESDE</label>
          <Dropdown
            v-model="desde"
            :options="fechaDesde"
            optionLabel="name"
            class="bg-light p-rounded-1"
            v-on:change="isButtonDisabled"
          />
        </li>
        <li class="p-ml-0">
          <label class="text-dark mb-0 mr-2">HASTA</label>
          <Dropdown
            v-model="hasta"
            :options="fechaHasta"
            optionLabel="name"
            class="bg-light p-rounded-1"
            v-on:change="isButtonDisabled"
          />
        </li>
        <li class="p-ml-0">
          <label class="text-dark mb-0 mr-2">CATEGORIA DE MAQUINARIA</label>
          <Dropdown
            v-model="maquinaria"
            :options="maquinarias"
            optionLabel="name"
            class="bg-light p-rounded-1"
            v-on:change="isButtonDisabled"
          />
        </li>
        <li class="p-ml-0">
          <Button
            v-if="!isClear"
            :disabled="botonDisabled"
            v-on:click="dataFinal"
            label="Buscar"
            class="p-button-sm p-button-raised p-button-warning"
          ></Button>
          <Button
            v-if="isClear"
            v-on:click="limpiar"
            label="Limpiar"
            class="p-button-sm p-button-raised p-button-warning"
          ></Button>
        </li>
      </ul>
    </div>

    <ResultTables class="mt-4" />
  </div>
</template>

<script>
import ResultTables from "../Tables/ResultTables";
import TableService from "../../service/TableService";
import { eventBus } from "../../eventBus/EventBus";

export default {
  name: "filtro",
  components: {
    ResultTables
  },
  data() {
    return {
      desde: null,
      hasta: null,
      maquinaria: null,
      tablaTotalService: null,
      dataTotal: null,
      botonDisabled: false,
      isClear: false,
      maquinarias: [],
      fechaDesde: [
        { name: 2010, code: "2010" },
        { name: 2011, code: "2011" },
        { name: 2012, code: "a3" },
        { name: 2013, code: "a4" },
        { name: 2014, code: "a5" },
        { name: 2015, code: "2010" },
        { name: 2016, code: "2011" },
        { name: 2017, code: "a3" },
        { name: 2018, code: "a4" },
        { name: 2019, code: "a5" },
        { name: 2020, code: "a3" },
        { name: 2021, code: "a4" },
        { name: 2022, code: "a5" }
      ],
      fechaHasta: [
        { name: 2010, code: "2010" },
        { name: 2011, code: "2011" },
        { name: 2012, code: "a3" },
        { name: 2013, code: "a4" },
        { name: 2014, code: "a5" },
        { name: 2015, code: "2010" },
        { name: 2016, code: "2011" },
        { name: 2017, code: "a3" },
        { name: 2018, code: "a4" },
        { name: 2019, code: "a5" },
        { name: 2020, code: "a3" },
        { name: 2021, code: "a4" },
        { name: 2022, code: "a5" }
      ]
    };
  },
  created() {
    this.tablaTotalService = new TableService();
    this.isButtonDisabled();
  },
  mounted() {
    this.tablaTotalService.getTipoMaquinarias().then(maquinarias => {
      this.maquinarias = [];
      maquinarias.forEach(maquinaria =>
        this.maquinarias.push({ name: maquinaria, code: "a1" })
      );
    });
  },
  methods: {
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
            if (mon === "Sem II" || mon === "Sem I") {
              total.cif += ObjectMonths[mon].cif;
              total.cantidad_declarada += ObjectMonths[mon].cantidad_declarada;
              total.fob += ObjectMonths[mon].fob;
            }
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
        .getTablaTotal(this.desde.name, this.hasta.name, this.maquinaria.name)
        .then(data => {
          this.dataTotal = this.mergeMonths(data);
          eventBus.$emit("eventDatatotal", this.dataTotal);
          eventBus.$emit("eventCategoria", this.maquinaria.name);
        });
    },
    isButtonDisabled() {
      if (
        this.maquinaria === null ||
        this.desde === null ||
        this.hasta === null
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
      this.maquinaria = null;
      this.desde = null;
      this.hasta = null;
      this.isClear = false;
      this.isButtonDisabled();
    }
  }
};
</script>

<style lang="stylus" scope>
.filtro {
    font-size: .8rem;
}

/*categoria*/
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
    margin-bottom: 0 !important;
    justify-items: center;
    height: 20px;
    padding: 0;
}

.p-dropdown-trigger-icon {
    color: black;
}

.cat label {
    vertical-align: middle;
    margin-bottom: 1px;
}

.p-dropdown-label {
    color: black !important;
    font-size: 0.9rem !important;
    line-height: 0;
}
</style>
