<template>
  <div class="filter-period">
    <button type="button" class="btn btn-link">Весь период</button>
    <div class="filter-period__custom">
      <span class="filter-period__label">от:</span>
      <date-picker
        v-model="dtFrom"
        type="day"
        value-type="YYYY-MM-DD"
        format="YYYY-MM-DD"
        placeholder="Выберите дату"
      ></date-picker>
      <span class="filter-period__label">до:</span>
      <date-picker
        v-model="dtTo"
        type="day"
        value-type="YYYY-MM-DD"
        format="YYYY-MM-DD"
        placeholder="Выберите дату"
      ></date-picker>
      <button @click="() => $emit('filteredByDates', { dtFrom: this.dtFrom, dtTo: this.dtTo })" type="button" class="btn btn-dark ms-3">Применить</button>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "FilterPeriod",
  components: { DatePicker },
  data() {
    return {
      dtFrom: "2022-01-01",
      dtTo: "2022-02-01",
    };
  },
};
</script>
