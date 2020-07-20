<template>
  <div class="rango">
    <label class="text-dark mx-1" for="periodo">{{ rango }}</label>
    <Calendar
      id="periodo"
      :inline="true"
      v-model="value"
      view="year"
      dateFormat="yy"
      :yearNavigator="true"
      yearRange="2000:2030"
      v-on:year-change="dateSelect"
    />
  </div>
</template>

<script>
export default {
  name: "calendar",
  props: ["rango"],
  data() {
    return {
      value: "",
      context: null
    };
  },
  methods: {
    dateSelect(e) {
      this.$emit("selectedFecha", e.year);
    }
  }
};
</script>

<style lang="stylus">
.p-datepicker.p-component.p-datepicker-inline
  padding 0 0 0 0
  font-size 0.75rem
  border : none !important;


.p-datepicker-month
  display none

.p-datepicker-header button
  display none

.rango {
  height : inherit;
}
  .p-datepicker-header {
    padding: 0 !important;
    border : none !important;
  }
  .p-datepicker-year {
    width : 150% !important;
    height : 20px !important;
    border : 1px solid black

  }
  .p-datepicker-header {

  }
.rango label {
  vertical-align: middles;
  margin-bottom: 0;
}
</style>
