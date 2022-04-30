<template>
  <div class="page">
    <Sidebar />
<!--    <div class="page-content">-->
<!--      <AppStickyHeader>-->
<!--        <Header>-->
<!--          <template v-slot:title> НАСТРОЙКИ </template>-->
<!--        </Header>-->
<!--      </AppStickyHeader>-->

<!--      <div class="app-container">-->
<!--        <div class="table-responsive">-->
<!--          <table class="table table-borderless main-table table-fit">-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th>ID</th>-->
<!--                <th>Версия</th>-->
<!--                <th></th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr>-->
<!--                <td>0000001</td>-->
<!--                <td>0.1</td>-->
<!--                <td class="full-width-cell text-end">-->
<!--                  <a-->
<!--                    href="javascript:void(0)"-->
<!--                    class="text-primary"-->
<!--                    @click.prevent="toggleModal(true)"-->
<!--                  >-->
<!--                    Редактировать-->
<!--                  </a>-->
<!--                </td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--      </div>-->

<!--      <Modal v-if="isModalShown" @close="toggleModal(false)">-->
<!--        <div class="mb-3">-->
<!--          <label for="version" class="form-label"> Версия </label>-->
<!--          <input type="text" class="form-control" id="version" />-->
<!--        </div>-->

<!--        <div class="text-center">-->
<!--          <button type="button" class="btn btn-dark me-3" @click="onCreate">-->
<!--            Сохранить-->
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
// import Modal from "@/components/base/Modal.vue";
// import Alert from "@/components/base/Alert.vue";

export default {
  name: "Settings",
  components: {
    Sidebar,
    // AppStickyHeader,
    // Header,
    // Modal,
    // Alert,
  },
  data() {
    return {
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
      this.alertTitle = "Версия сохранена";
      this.isAlertShown = true;
    },
  },
};
</script>
