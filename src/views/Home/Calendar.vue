<template>
  <div class="home-view">
    <div class="p-col-12 p-md-4">
      <label for="periodo">periodo</label>
      <Calendar
        id="periodo"
        :inline="true"
        selectionMode="single || multiple || range"
        v-model="date10"
        view="month"
        numberOfMonths
        dateFormat="yy"
        :yearNavigator="true"
        yearRange="1990:2030"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar"
};
</script>
