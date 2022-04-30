<template>
  <div class="page">
    <Sidebar />
<!--    <div class="page-content">-->
<!--      <AppStickyHeader>-->
<!--        <Header>-->
<!--          <template v-slot:title> Тарифы </template>-->
<!--        </Header>-->
<!--        <div class="filter-panel">-->
<!--          <FilterTabs :tabs="tabs" :activeTab="1" @input="onTabChange" />-->
<!--        </div>-->

<!--        <div class="search-panel">-->
<!--          <Search />-->

<!--          <div class="search-panel__btns">-->
<!--            <button type="button" class="btn btn-dark me-3" @click="activate">-->
<!--              Действующий-->
<!--            </button>-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-dark me-3"-->
<!--              @click="toggleModal(true)"-->
<!--            >-->
<!--              Создать-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </AppStickyHeader>-->

<!--      <div class="app-container">-->
<!--        <div class="table-responsive">-->
<!--          <table class="table table-borderless main-table table-fit">-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th></th>-->
<!--                <th>ID</th>-->
<!--                <th>Название</th>-->
<!--                <th>Статус</th>-->
<!--                <th>%</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td>-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="radio"-->
<!--                    value="1"-->
<!--                    name="tariff"-->
<!--                  />-->
<!--                </td>-->
<!--                <td>0000001</td>-->
<!--                <td>Поток 1</td>-->
<!--                <td><span class="text-success">Активен</span></td>-->
<!--                <td>35</td>-->
<!--              </tr>-->

<!--              <tr>-->
<!--                <td>-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="radio"-->
<!--                    value="2"-->
<!--                    name="tariff"-->
<!--                  />-->
<!--                </td>-->
<!--                <td>0000002</td>-->
<!--                <td>Поток 1</td>-->
<!--                <td><span class="text-success">Активен</span></td>-->
<!--                <td>35</td>-->
<!--              </tr>-->

<!--              <tr>-->
<!--                <td>-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="radio"-->
<!--                    value="3"-->
<!--                    name="tariff"-->
<!--                  />-->
<!--                </td>-->
<!--                <td>0000003</td>-->
<!--                <td>Поток 1</td>-->
<!--                <td><span class="text-primary">Действующий</span></td>-->
<!--                <td>35</td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--      </div>-->

<!--      <Modal v-if="isModalShown" @close="toggleModal(false)">-->
<!--        <div class="mb-3">-->
<!--          <label for="title" class="form-label"> Наименование тарифа </label>-->
<!--          <input type="text" class="form-control" id="title" />-->
<!--        </div>-->
<!--        <div class="mb-3">-->
<!--          <label for="price" class="form-label"> Цена тарифа </label>-->
<!--          <input type="text" class="form-control" id="price" />-->
<!--        </div>-->

<!--        <div class="text-center">-->
<!--          <button type="button" class="btn btn-dark me-3" @click="onCreate">-->
<!--            Создать-->
<!--          </button>-->
<!--          <button-->
<!--            type="button"-->
<!--            class="btn btn-dark me-3"-->
<!--            @click="toggleModal(false)"-->
<!--          >-->
<!--            Отмена-->
<!--          </button>-->
<!--        </div>-->
<!--      </Modal>-->

<!--      <Alert-->
<!--        v-if="isAlertShown"-->
<!--        :type="alertType"-->
<!--        @close="isAlertShown = false"-->
<!--      >-->
<!--        {{ alertTitle }}-->
<!--      </Alert>-->
<!--    </div>-->
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
// import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
// import Header from "@/components/base/Header.vue";
// import FilterTabs from "@/components/partials/FilterTabs.vue";
// import Search from "@/components/partials/Search.vue";
// import Modal from "@/components/base/Modal.vue";
// import Alert from "@/components/base/Alert.vue";

export default {
  name: "Tariffs",
  components: {
    Sidebar,
    // AppStickyHeader,
    // Header,
    // FilterTabs,
    // Search,
    // Modal,
    // Alert,
  },
  data() {
    return {
      tabs: [
        {
          value: 1,
          title: "Роялти автора",
          routeName: "Tariffs",
        },
        {
          value: 2,
          title: "Аккаунт автора",
          routeName: "TariffsAuthorAccount",
        },
        {
          value: 3,
          title: "Подписки для пользователей",
          routeName: "TariffsSubscriptions",
        },
        {
          value: 4,
          title: "Роялти за Продвижение",
          routeName: "TariffsPromotion",
        },
      ],
      isModalShown: false,
      isAlertShown: false,
      alertType: "",
      alertTitle: "",
    };
  },
  methods: {
    toggleModal(val) {
      this.isModalShown = val;
    },
    onCreate() {
      this.toggleModal(false);
      this.alertType = "success";
      this.alertTitle = "Тариф создан";
      this.isAlertShown = true;
    },
    activate() {
      this.alertType = "success";
      this.alertTitle = "Действующий тариф определен";
      this.isAlertShown = true;
    },
    onTabChange(val) {
      let routeName = this.tabs.find((tab) => tab.value === val).routeName;
      this.$router.push({ name: routeName });
    },
  },
};
</script>
