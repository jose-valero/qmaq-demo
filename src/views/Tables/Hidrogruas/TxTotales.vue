<template>
  <div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
      vertical
      small
    >
      <template v-slot:head()="scope">
        <div class="text-nowrap">{{ scope.label }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  // name: TxTotales,
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [
        {
          key: "MERCADO_Hidrogruas",
          stickyColumn: true,
          isRowHeader: true,
          variant: "dark"
        },
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        { key: "Acc Sem", stickyColumn: false, variant: "primary" },
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
          MERCADO_Hidrogruas: "Volúmen (uds)",
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
          MERCADO_Hidrogruas: "Factura FOB (u$s 000)",
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
          MERCADO_Hidrogruas: "Factura CIF (u$s 000)",
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

<style lang="stylus" scoped>
.b-table-sticky-header, .table-responsive
  // margin-bottom 3rem
</style>
