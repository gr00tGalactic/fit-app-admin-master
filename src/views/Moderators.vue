<template>
  <div class="page">
    <Sidebar />
<!--    <div class="page-content">-->
<!--      <AppStickyHeader>-->
<!--        <Header>-->
<!--          <template v-slot:title> МОДЕРАТОРЫ </template>-->
<!--        </Header>-->
<!--        <div class="filter-panel">-->
<!--          <FilterTabs :tabs="tabs" />-->
<!--        </div>-->

<!--        <div class="search-panel">-->
<!--          <Search />-->

<!--          <div class="search-panel__btns">-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-dark me-3"-->
<!--              @click="toggleModal(true)"-->
<!--            >-->
<!--              Добавить модератора-->
<!--            </button>-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-dark me-3"-->
<!--              @click="blockUser(false)"-->
<!--            >-->
<!--              Активировать-->
<!--            </button>-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-dark me-3"-->
<!--              @click="blockUser(true)"-->
<!--            >-->
<!--              Заблокировать-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </AppStickyHeader>-->

<!--      <div class="app-container">-->
<!--        <div class="table-responsive">-->
<!--          <table class="table table-borderless main-table table-fit">-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th scope="col">-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="checkbox"-->
<!--                    value=""-->
<!--                  />-->
<!--                </th>-->
<!--                <th scope="col">ID</th>-->
<!--                <th scope="col">ФИО</th>-->
<!--                <th scope="col">email</th>-->
<!--                <th scope="col">Статус</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td>-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="checkbox"-->
<!--                    value=""-->
<!--                  />-->
<!--                </td>-->
<!--                <td>00001</td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>kirill@gmail.com</td>-->
<!--                <td><span class="text-success">Активен</span></td>-->
<!--              </tr>-->
<!--              <tr>-->
<!--                <td>-->
<!--                  <input-->
<!--                    class="form-check-input main-table__checkbox"-->
<!--                    type="checkbox"-->
<!--                    value=""-->
<!--                  />-->
<!--                </td>-->
<!--                <td>00001</td>-->
<!--                <td>Кирилл И</td>-->
<!--                <td>kirill@gmail.com</td>-->
<!--                <td><span class="text-danger">Заблокирован</span></td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--      </div>-->

<!--      <Modal v-if="isModalShown" @close="toggleModal(false)">-->
<!--        <div class="mb-3">-->
<!--          <label for="email" class="form-label"> Почта пользователя </label>-->
<!--          <input-->
<!--            type="email"-->
<!--            class="form-control"-->
<!--            id="email"-->
<!--            placeholder="name@example.com"-->
<!--          />-->
<!--        </div>-->
<!--        <div class="text-center">-->
<!--          <button type="button" class="btn btn-dark me-3" @click="onCreate">-->
<!--            Добавить-->
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
<!--        {{ alertTitle }}</Alert-->
<!--      >-->
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
  name: "Moderators",
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
          title: "Все",
        },
        {
          value: 2,
          title: "Активные",
        },
        {
          value: 3,
          title: "Заблокированные",
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
      this.alertTitle = "Модератор добавлен";
      this.isAlertShown = true;
    },
    blockUser(val) {
      this.alertType = "success";
      this.alertTitle = val
        ? "Модератор заблокирован"
        : "Модератор активирован";
      this.isAlertShown = true;
    },
  },
};
</script>
