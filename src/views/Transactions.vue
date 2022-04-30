<template>
  <div class="page">
    <Sidebar />
<!--    <div class="page-content">-->
<!--      <AppStickyHeader>-->
<!--        <Header>-->
<!--          <template v-slot:title> Транзакции </template>-->
<!--        </Header>-->
<!--        <div class="filter-panel">-->
<!--          <FilterTabs :tabs="tabs" @input="onTabClick" />-->

<!--          <FilterPeriod />-->
<!--        </div>-->

<!--        <div class="search-panel">-->
<!--          <Search />-->

<!--          <div class="search-panel__btns"></div>-->
<!--        </div>-->
<!--      </AppStickyHeader>-->

<!--      <div class="app-container">-->
<!--        <div class="table-responsive">-->
<!--          <table class="table table-borderless main-table">-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th>ID</th>-->
<!--                <th>Дата</th>-->
<!--                <th>Тип</th>-->
<!--                <th>Статус</th>-->
<!--                <th>email</th>-->
<!--                <th>ФИО</th>-->
<!--                <th>Название</th>-->
<!--                <th>Цена</th>-->
<!--                <th>Тариф</th>-->
<!--                <th>Чек</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td>00000001</td>-->
<!--                <td>22.02.2022</td>-->
<!--                <td>Курс</td>-->
<!--                <td><span class="text-success">Одобрено</span></td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)">-->
<!--                    kirill@gma-->
<!--                  </a>-->
<!--                </td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>Говори вдохно</td>-->
<!--                <td>7 500</td>-->
<!--                <td>&#45;&#45;</td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)"> Чек </a>-->
<!--                </td>-->
<!--              </tr>-->

<!--              <tr>-->
<!--                <td>00000002</td>-->
<!--                <td>22.02.2022</td>-->
<!--                <td>Подписка</td>-->
<!--                <td><span class="text-success">Одобрено</span></td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)">-->
<!--                    kirill@gma-->
<!--                  </a>-->
<!--                </td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>Подписка</td>-->
<!--                <td>7 500</td>-->
<!--                <td>Подписка 1</td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)"> Чек </a>-->
<!--                </td>-->
<!--              </tr>-->

<!--              <tr>-->
<!--                <td>00000003</td>-->
<!--                <td>22.02.2022</td>-->
<!--                <td>Автор</td>-->
<!--                <td><span class="text-success">Одобрено</span></td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)">-->
<!--                    kirill@gma-->
<!--                  </a>-->
<!--                </td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>Автор</td>-->
<!--                <td>7 500</td>-->
<!--                <td>Автор 1 -20Gb</td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)"> Чек </a>-->
<!--                </td>-->
<!--              </tr>-->

<!--              <tr>-->
<!--                <td>00000004</td>-->
<!--                <td>22.02.2022</td>-->
<!--                <td>Автор</td>-->
<!--                <td><span class="text-danger">Отклонен</span></td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)">-->
<!--                    kirill@gma-->
<!--                  </a>-->
<!--                </td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>Автор</td>-->
<!--                <td>27 500</td>-->
<!--                <td>Место 1 - 100Gb</td>-->
<!--                <td>-->
<!--                  <a class="text-primary" href="javascript:void(0)"> Чек </a>-->
<!--                </td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
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
// import Search from "@/components/partials/Search.vue";

export default {
  name: "Transactions",
  components: {
    Sidebar,
    // AppStickyHeader,
    // Header,
    // FilterTabs,
    // FilterPeriod,
    // Search,
  },
  data() {
    return {
      tabs: [
        {
          value: 1,
          title: "Все",
        },
        {
          value: 2,
          title: "Курсы",
        },
        {
          value: 3,
          title: "Подписки",
        },
        {
          value: 3,
          title: "Автор",
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
