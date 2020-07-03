<template>
  <div class="home-view">
    <Calendar
      v-model="value"
      view="month"
      dateFormat="mm/yy"
      :yearNavigator="true"
      yearRange="2000:2030"
    />
  </div>
</template>

<script>
export default {
  name: "PCalendar"
};
</script>
