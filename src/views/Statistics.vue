<template>
  <div class="page">
    <Sidebar />

<!--    <div class="page-content">-->
<!--      <AppStickyHeader>-->
<!--        <Header>-->
<!--          <template v-slot:title> Статистика </template>-->
<!--        </Header>-->
<!--        <div class="filter-panel">-->
<!--          <FilterTabs :tabs="tabs" @input="onTabClick" />-->

<!--          <FilterPeriod />-->
<!--        </div>-->
<!--      </AppStickyHeader>-->

<!--      <div class="app-container">-->
<!--        <div class="table-responsive">-->
<!--          <table class="table table-borderless main-table">-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;1">-->
<!--                    <input type="checkbox" :value="1" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    Пользователи-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;2">-->
<!--                    <input type="checkbox" :value="2" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    РЕФ. ссылок-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;3">-->
<!--                    <input type="checkbox" :value="3" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    Просмотры-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;4">-->
<!--                    <input type="checkbox" :value="4" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    Подписки-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;5">-->
<!--                    <input type="checkbox" :value="5" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    Доход-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;6">-->
<!--                    <input type="checkbox" :value="6" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    Покупки-->
<!--                  </label>-->
<!--                </th>-->
<!--                <th>-->
<!--                  <label class="custom-checkbox custom-checkbox&#45;&#45;7">-->
<!--                    <input type="checkbox" :value="7" v-model="lines" />-->
<!--                    <span class="custom-checkbox__checkmark"></span>-->
<!--                    ИТОГО ДОХОД-->
<!--                  </label>-->
<!--                </th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td>12323</td>-->
<!--                <td>12323</td>-->
<!--                <td>12323</td>-->
<!--                <td>12323</td>-->
<!--                <td>12312 руб</td>-->
<!--                <td>12323</td>-->
<!--                <td>12312 руб</td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->

<!--        <div class="chart-container">-->
<!--          <line-chart-->
<!--            v-if="!chartLoading"-->
<!--            :chartData="chartData"-->
<!--            :options="chartOptions"-->
<!--            :height="450"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
// import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
// import Header from "@/components/base/Header.vue";
// import FilterTabs from "@/components/partials/FilterTabs.vue";
// import FilterPeriod from "@/components/partials/FilterPeriod.vue";
// import LineChart from "@/components/base/LineChart.vue";

export default {
  name: "Statistics",
  components: {
    Sidebar,
    // AppStickyHeader,
    // Header,
    // FilterTabs,
    // FilterPeriod,
    // LineChart,
  },
  data() {
    return {
      tabs: [
        {
          value: 1,
          title: "День",
        },
        {
          value: 2,
          title: "Неделя",
        },
        {
          value: 3,
          title: "Месяц",
        },
        {
          value: 4,
          title: "Квартал",
        },
        {
          value: 5,
          title: "6 мес",
        },
        {
          value: 6,
          title: "Год",
        },
        {
          value: 7,
          title: "Все время",
        },
      ],

      chartLoading: true,
      lines: [1, 2, 3, 4, 5, 6, 7],

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      chartData: {
        labels: [
          "05.10.2020",
          "06.10.2020",
          "07.10.2020",
          "08.10.2020",
          "09.10.2020",
          "10.10.2020",
          "11.10.2020",
          "12.10.2020",
          "13.10.2020",
          "14.10.2020",
          "15.10.2020",
        ],
        datasets: [],
      },
      initialDatasets: [
        {
          id: 1,
          label: "Пользователи",
          data: this.generateArr(),
          borderColor: "#135193",
          pointBackgroundColor: "#135193",
          pointBorderColor: "#135193",
          fill: false,
          borderWidth: 2,
        },
        {
          id: 2,
          label: "РЕФ. ссылок",
          data: this.generateArr(),
          borderColor: "#FF8811",
          pointBackgroundColor: "#FF8811",
          pointBorderColor: "#FF8811",
          fill: false,
          borderWidth: 2,
        },
        {
          id: 3,
          label: "Просмотры",
          data: this.generateArr(),
          borderColor: "#FF5A5F",
          pointBackgroundColor: "#FF5A5F",
          pointBorderColor: "#FF5A5F",
          fill: false,
          borderWidth: 2,
          // hidden: true,
        },
        {
          id: 4,
          label: "Подписки",
          data: this.generateArr(),
          borderColor: "#63A088",
          pointBackgroundColor: "#63A088",
          pointBorderColor: "#63A088",
          fill: false,
          borderWidth: 2,
          // hidden: true,
        },
        {
          id: 5,
          label: "Доход",
          data: this.generateArr(),
          borderColor: "#53DD6C",
          pointBackgroundColor: "#53DD6C",
          pointBorderColor: "#53DD6C",
          fill: false,
          borderWidth: 2,
          // hidden: true,
        },
        {
          id: 6,
          label: "Покупки",
          data: this.generateArr(),
          borderColor: "#D9DD92",
          pointBackgroundColor: "#D9DD92",
          pointBorderColor: "#D9DD92",
          fill: false,
          borderWidth: 2,
          // hidden: true,
        },
        {
          id: 7,
          label: "ИТОГО ДОХОД",
          data: this.generateArr(),
          borderColor: "#6CCFF6",
          pointBackgroundColor: "#6CCFF6",
          pointBorderColor: "#6CCFF6",
          fill: false,
          borderWidth: 2,
          // hidden: true,
        },
      ],
    };
  },
  watch: {
    lines(newVal) {
      this.chartLoading = true;
      this.chartData.datasets = [
        ...this.initialDatasets.filter((item) => newVal.includes(item.id)),
      ];
      // console.log(this.chartData.datasets);

      this.$nextTick(() => {
        this.chartLoading = false;
      });
    },
  },
  mounted() {
    this.chartData.datasets = [...this.initialDatasets];
    this.chartLoading = false;
  },
  methods: {
    onTabClick(val) {
      console.log(val);
    },
    generateArr() {
      return Array(11)
        .fill()
        .map(() => Math.round(Math.random() * 80));
    },
  },
};
</script>
