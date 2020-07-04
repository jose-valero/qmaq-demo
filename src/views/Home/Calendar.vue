<template>
  <div class="rangoAños">
    <label class="text-dark" for="periodo">{{ rango }}</label>
    <Calendar
      id="periodo"
      class="p-4"
      :inline="true"
      v-model="value"
      view="year"
      dateFormat="yy"
      :yearNavigator="true"
      yearRange="2000:2030"
    />
  </div>
</template>

<script>
export default {
  name: "calendar",
  props: ["rango"]
};
</script>

<style lang="stylus">
.p-datepicker-month {
  color: red;
  display: none;
}

.p-datepicker-header button {
  display: none;
}
</style>
