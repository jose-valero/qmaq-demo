<template>
  <div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive="sm"
      :items="items"
      :fields="fields"
      small
      striped
      hover
      class="text-center"
    >
      <template v-slot:head(subtitulo)>
        <div class="text-nowrap">Share Of Segment SOS</div>
      </template>

      <template v-slot:head()="scope">
        <div class="text-nowrap">{{ scope.label }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  // name: TxShareOfSegment,
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [
        {
          key: "subtitulo",
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
          subtitulo: "01. Chicas (<10 Tm)",
          Enero: "32%",
          Febrero: "45%",
          Marzo: "55%",
          Abril: "26%",
          Mayo: "65%",
          Junio: "45%",
          "Acc Sem": "23%",
          Julio: "75%",
          Agosto: "44%",
          Septiembre: "52%",
          Octubre: "48%",
          Noviembre: "66%",
          Diciembre: "12%",
          "Acc Sem II": "86%",
          TOTAL: "62%"
        },
        {
          subtitulo: "02. Mediana Chica (>10 <20 Tm)",
          Enero: "63%",
          Febrero: "54%",
          Marzo: "12%",
          Abril: "44%",
          Mayo: "55%",
          Junio: "11%",
          "Acc Sem": "59%",
          Julio: "11%",
          Agosto: "20%",
          Septiembre: "10%",
          Octubre: "12%",
          Noviembre: "15%",
          Diciembre: "29%",
          "Acc Sem II": "37%",
          TOTAL: "23%"
        },
        {
          subtitulo: "02. Mediana Grande (>20 <33 Tm)",
          Enero: "63%",
          Febrero: "54%",
          Marzo: "12%",
          Abril: "44%",
          Mayo: "55%",
          Junio: "11%",
          "Acc Sem": "59%",
          Julio: "11%",
          Agosto: "20%",
          Septiembre: "10%",
          Octubre: "12%",
          Noviembre: "15%",
          Diciembre: "29%",
          "Acc Sem II": "37%",
          TOTAL: "23%"
        },
        {
          subtitulo: "03. Grande (>33 Tm)",
          Enero: "63%",
          Febrero: "54%",
          Marzo: "12%",
          Abril: "44%",
          Mayo: "55%",
          Junio: "11%",
          "Acc Sem": "59%",
          Julio: "11%",
          Agosto: "20%",
          Septiembre: "10%",
          Octubre: "12%",
          Noviembre: "15%",
          Diciembre: "29%",
          "Acc Sem II": "37%",
          TOTAL: "23%"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.b-table-sticky-header, .table-responsive {
  font-size: 0.75rem;
}

th, .table-dark, .b-table-sticky-column {
  width: 80%;
}
</style>
