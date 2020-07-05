<template>
  <div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive="sm"
      :items="items"
      :fields="fields"
      :years="years"
      small
      striped
      hover
      caption-top
      class="text-center"
      head-row-variant="dark"
    >
      <template v-slot:thead-top>
        <div></div>
        <b-th variant="dark text-center" colspan="15">2015</b-th>
      </template>

      <template v-slot:head(subtitulo)>
        <div class="text-nowrap subcategoriaMaquinaria">Mercado Hidrogruas</div>
      </template>

      <template v-slot:head()="scope">
        <div class="text-nowrap">{{ scope.label }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TxTotales",
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      years: [2015, 2016, 2017, 2018, 2019],
      fields: [
        {
          key: "subtitulo",
          stickyColumn: true,
          isRowHeader: true
        },
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        {
          key: "Acc Sem",
          stickyColumn: false,
          isRowHeader: false,
          variant: "primary"
        },
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
        { key: "Acc Sem II", stickyColumn: false, variant: "primary" },
        { key: "TOTAL", stickyColumn: false, variant: "success" }
      ],
      items: [
        {
          subtitulo: "Volúmen (uds)",
          Enero: 28,
          Febrero: 20,
          Marzo: 56,
          Abril: 30,
          Mayo: 21,
          Junio: 58,
          "Acc Sem": 213,
          Julio: 40,
          Agosto: 78,
          Septiembre: 82,
          Octubre: 48,
          Noviembre: 66,
          Diciembre: 102,
          "Acc Sem II": 416,
          TOTAL: 629
        },
        {
          subtitulo: "Factura FOB (u$s 000)",
          Enero: 634,
          Febrero: 894,
          Marzo: 1201,
          Abril: 754,
          Mayo: 575,
          Junio: 1601,
          "Acc Sem": 5659,
          Julio: 1051,
          Agosto: 2086,
          Septiembre: 2210,
          Octubre: 1205,
          Noviembre: 1595,
          Diciembre: 2389,
          "Acc Sem II": 10537,
          TOTAL: 16196
        },
        {
          subtitulo: "Factura CIF (u$s 000)",
          Enero: 659,
          Febrero: 920,
          Marzo: 1230,
          Abril: 782,
          Mayo: 592,
          Junio: 1642,
          "Acc Sem": 5826,
          Julio: 1080,
          Agosto: 2130,
          Septiembre: 2255,
          Octubre: 1232,
          Noviembre: 1632,
          Diciembre: 2443,
          "Acc Sem II": 10773,
          TOTAL: 16599
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.b-table-sticky-header, .table-responsive {
  font-size: 0.75rem;
  margin-right: -15px;
  margin-left: -15px;
}

th {
  width: 80% !important;
}
.subcategoriaMaquinaria {
  background-color: orangered;
  color : white
}
.table-dark th{
    background-color: #B3B3B3 !important;
    color : black !important
    border-top : none !important
  }

</style>
