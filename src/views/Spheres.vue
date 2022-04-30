<template>
  <div class="page">
    <Sidebar />
    <div class="page-content">
      <AppStickyHeader>
        <Header>
          <template v-slot:title> СФЕРЫ </template>
        </Header>

        <div class="search-panel">
          <Search />

          <div class="search-panel__btns">
            <button
              type="button"
              class="btn btn-dark me-3"
              @click="toggleModal(true)"
            >
              Создать
            </button>
            <button type="button" class="btn btn-dark" @click="onStatusChange">
              {{ statusBtnTitle }}
            </button>
          </div>
        </div>
      </AppStickyHeader>

      <div class="app-container">
        <div class="table-responsive">
          <table class="table table-borderless main-table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Название сферы</th>
                <th scope="col">Теги</th>
                <th scope="col">Статус</th>
                <th scope="col">Модератор</th>
                <th scope="col">Действие</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sphere, i) in spheres" :key="i">
                <td>
                  <input
                    class="form-check-input main-table__checkbox"
                    type="radio"
                    :value="sphere.id"
                    name="sphere"
                    v-model="sphereId"
                  />
                </td>
                <td>{{ sphere.title }}</td>
                <td>{{ sphere.tags }}</td>
                <td>
                  <span
                    :class="{
                      'text-success': sphere.status === 'Активна',
                      'text-danger': sphere.status === 'Отключена',
                    }"
                    >{{ sphere.status }}</span
                  >
                </td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">{{
                    sphere.moderator
                  }}</a>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    class="text-primary"
                    @click="toggleModal(true)"
                  >
                    Редактировать
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal v-if="isModalShown" @close="onCancel">
        <div class="row">
          <div class="col-3">
            <div class="sphere-img">
              <div
                class="sphere-img__bg"
                :style="{
                  'background-image': `url(${previewImage})`,
                  'background-color': previewImage
                    ? 'transparent'
                    : '$gray-400',
                }"
              ></div>
              <a
                v-if="!previewImage"
                href="javascript:void(0)"
                class="sphere-img__text text-primary"
              >
                Загрузите картинку сферы
              </a>
              <input
                type="file"
                name="icon"
                :disabled="loading"
                @change="onFilesChange"
                accept="image/*"
                class="sphere-img__input"
              />
            </div>
          </div>
          <div class="col-9">
            <div class="mb-3">
              <label for="name" class="form-label"> Название сферы </label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="mb-4">
              <label for="tags" class="form-label">
                Теги сферы (введите несколько)
              </label>
              <textarea class="form-control" id="tags" rows="2"></textarea>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button type="button" class="btn btn-dark me-3" @click="onCreate">
            Сохранить
          </button>
          <button type="button" class="btn btn-dark me-3" @click="onCancel">
            Отмена
          </button>
        </div>
      </Modal>

      <Alert v-if="isAlertShown" :type="alertType" @close="onAlertAutoClose">
        <template v-if="alertType === 'error'">
          <div class="d-flex align-items-center">
            <span class="pe-2">{{ alertTitle }}</span>
            <button
              type="button"
              class="btn btn-dark ms-auto"
              @click="onConfirm"
            >
              Продолжить
            </button>
          </div>
        </template>
        <template v-else>{{ alertTitle }}</template>
      </Alert>

      <Alert v-if="isAlertShown" :type="alertType" @close="onAlertAutoClose">
        <template v-if="alertType === 'error'">
          <div class="d-flex align-items-center">
            <span class="pe-2">{{ alertTitle }}</span>
            <button
              type="button"
              class="btn btn-dark ms-auto"
              @click="onConfirm"
            >
              Продолжить
            </button>
          </div>
        </template>
        <template v-else>{{ alertTitle }}</template>
      </Alert>

      <Alert
        v-if="isStatusAlertShown"
        :type="statusAlertType"
        @close="onStatusAlertAutoClose"
      >
        <template v-if="statusAlertType === 'error'">
          <div class="d-flex align-items-center">
            <span class="pe-2">{{ statusAlertTitle }}</span>
            <button
              type="button"
              class="btn btn-dark ms-auto"
              @click="isStatusAlertShown = false"
            >
              Отмена
            </button>
            <button
              type="button"
              class="btn btn-dark ms-auto"
              @click="onStatusConfirm"
            >
              Отключить
            </button>
          </div>
        </template>
        <template v-else>{{ statusAlertTitle }}</template>
      </Alert>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
import Header from "@/components/base/Header.vue";
import Search from "@/components/partials/Search.vue";
import Modal from "@/components/base/Modal.vue";
import Alert from "@/components/base/Alert.vue";

export default {
  name: "Spheres",
  components: { Sidebar, AppStickyHeader, Header, Search, Modal, Alert },
  data() {
    return {
      isModalShown: false,
      isAlertShown: false,
      alertType: "",
      alertTitle: "",
      isStatusAlertShown: false,
      statusAlertType: "",
      statusAlertTitle: "",
      loading: false,
      previewImage: null,
      spheres: [
        {
          id: 0,
          title: "Мотивация",
          tags: "Лидерство, Мотивация, ...",
          status: "Активна",
          moderator: "kirill@gmail.com",
        },
        {
          id: 1,
          title: "Мотивация",
          tags: "Лидерство, Мотивация, ...",
          status: "Активна",
          moderator: "kirill@gmail.com",
        },
        {
          id: 2,
          title: "Мотивация",
          tags: "Лидерство, Мотивация, ...",
          status: "Отключена",
          moderator: "kirill@gmail.com",
        },
      ],
      sphereId: "",
    };
  },
  computed: {
    selectedSphere() {
      return this.spheres.find((item) => item.id === this.sphereId) || {};
    },
    statusBtnTitle() {
      let title = "Отключить";
      switch (this.selectedSphere.status) {
        case "Активна":
          title = "Отключить";
          break;
        case "Отключена":
          title = "Активировать";
          break;
        default:
      }
      return title;
    },
  },
  methods: {
    toggleModal(val) {
      this.isModalShown = val;
    },
    onCreate() {
      this.toggleModal(false);
      this.alertType = "success";
      this.alertTitle = "Изменения сохранены";
      this.isAlertShown = true;
    },
    onStatusChange() {
      switch (this.selectedSphere.status) {
        case "Активна":
          this.statusAlertType = "error";
          this.statusAlertTitle = "Внимание! Курсы не будут отображаться";
          this.isStatusAlertShown = true;
          break;
        case "Отключена":
          this.statusAlertType = "success";
          this.statusAlertTitle = "Сфера активирована";
          this.isStatusAlertShown = true;
          break;
        default:
      }
    },
    onFilesChange(e) {
      let file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onCancel() {
      this.alertType = "error";
      this.alertTitle = "Изменения не сохранены. Покинуть странцицу?";
      this.isAlertShown = true;
    },
    onAlertAutoClose() {
      switch (this.alertType) {
        case "success":
          this.isAlertShown = false;
          break;
        case "error":
          break;
        default:
      }
    },
    onConfirm() {
      this.isAlertShown = false;
      this.toggleModal(false);
    },
    onStatusAlertAutoClose() {
      switch (this.statusAlertType) {
        case "success":
          this.isStatusAlertShown = false;
          break;
        case "error":
          break;
        default:
      }
    },
    onStatusConfirm() {
      this.isStatusAlertShown = false;
      this.isStatusAlertShown = true;
      this.statusAlertType = "success";
      this.statusAlertTitle = "Сфера отключена ";
    },
  },
};
</script>
