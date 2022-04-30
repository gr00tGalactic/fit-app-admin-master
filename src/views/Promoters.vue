<template>
  <div class="page">
    <Sidebar />

    <div class="page-content">
      <AppStickyHeader>
        <Header>
          <template v-slot:title> ПРОДВИЖЕНИЕ </template>
          <template v-slot:tabs>
            <FilterTabs
              :tabs="headerTabs"
              :activeTab="2"
              @input="onTabClick"
              name="header"
            />
          </template>
        </Header>
        <div class="filter-panel">
          <FilterTabs :tabs="tabs" @input="onTabClick" />

          <FilterPeriod />
        </div>
      </AppStickyHeader>

      <div class="app-container">
        <div class="table-responsive">
          <table class="table table-borderless main-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Пользователь</th>
                <th>Курс</th>
                <th>Ссылка</th>
                <th>Кол-во переходов</th>
                <th>Кол-во покупок курсов</th>
                <th>Кол-во покупок подписки</th>
                <th>Дата генерации</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12323</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">
                    Кирилл И.
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">
                    Мотивация
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" class="text-primary"> Ссылка </a>
                </td>
                <td>12312</td>
                <td>12323</td>
                <td>12312</td>
                <td>17.02.2022</td>
              </tr>

              <tr>
                <td>12323</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">
                    Кирилл И.
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">
                    Мотивация
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" class="text-primary"> Ссылка </a>
                </td>
                <td>12312</td>
                <td>12323</td>
                <td>12312</td>
                <td>17.02.2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
import Header from "@/components/base/Header.vue";
import FilterTabs from "@/components/partials/FilterTabs.vue";
import FilterPeriod from "@/components/partials/FilterPeriod.vue";

export default {
  name: "Promoters",
  components: {
    Sidebar,
    AppStickyHeader,
    Header,
    FilterTabs,
    FilterPeriod,
  },
  data() {
    return {
      headerTabs: [
        {
          value: 1,
          title: "Статистика",
        },
        {
          value: 2,
          title: "Промоутеры",
        },
      ],
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
    };
  },

  methods: {
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>
