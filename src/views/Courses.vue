<template>
  <div class="page">
    <Sidebar />

    <div class="page-content">
      <AppStickyHeader>
        <Header>
          <template v-slot:title> КУРСЫ </template>
        </Header>
        <div class="filter-panel">
          <FilterTabs :tabs="tabs" @input="onTabClick" />

          <FilterPeriod />
        </div>

        <div class="search-panel">
          <Search />

          <div class="search-panel__btns"></div>
        </div>
      </AppStickyHeader>

      <div class="app-container">
        <div class="table-responsive">
          <table class="table table-borderless main-table table-nowrap">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Название</th>
                <th>Тип</th>
                <th>Статус</th>
                <th>Сфера</th>
                <th>Теги</th>
                <th>Автор</th>
                <th>Цена</th>
                <th>%</th>
                <th>Просмотры</th>
                <th>Покупки</th>
                <th>Рейтинг</th>
                <th>Выручка</th>
                <th>Опубликован</th>
                <th>Модератор</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    class="form-check-input main-table__checkbox"
                    type="checkbox"
                    value=""
                  />
                </td>
                <td>00001</td>
                <td class="white-space-normal-cell">Говори вдох</td>
                <td>Бесплатный</td>
                <td><span class="text-success">Активный</span></td>
                <td>Сфера</td>
                <td>Психол</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">Иван И</a>
                </td>
                <td>--</td>
                <td>--</td>
                <td>123</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>12.02.2022</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary"
                    >ivan@gmail.com</a
                  >
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    class="form-check-input main-table__checkbox"
                    type="checkbox"
                    value=""
                  />
                </td>
                <td>00002</td>
                <td class="white-space-normal-cell">Маркетинг в</td>
                <td>Подписка</td>
                <td><span class="text-orange">На модерации</span></td>
                <td>Сфера</td>
                <td>Теги</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">Кирилл Н</a>
                </td>
                <td>--</td>
                <td>35</td>
                <td>234</td>
                <td>--</td>
                <td>12</td>
                <td>2500 Р</td>
                <td>12.02.2022</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary"
                    >ivan@gmail.com</a
                  >
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    class="form-check-input main-table__checkbox"
                    type="checkbox"
                    value=""
                  />
                </td>
                <td>00002</td>
                <td class="white-space-normal-cell">Маркетинг в</td>
                <td>Подписка</td>
                <td><span class="text-danger">Не активный</span></td>
                <td>Сфера</td>
                <td>Теги</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary">Кирилл Н</a>
                </td>
                <td>50000</td>
                <td>35</td>
                <td>234</td>
                <td>23</td>
                <td>12</td>
                <td>1 150 000 Р</td>
                <td>12.02.2022</td>
                <td>
                  <a href="javascript:void(0)" class="text-primary"
                    >ivan@gmail.com</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal v-if="isModalShown" @close="toggleModal(false)">
        <div class="mb-3">
          <label for="cn" class="form-label"> Наименование компании </label>
          <input type="text" class="form-control" id="cn" disabled />
        </div>
        <div class="mb-3">
          <label for="bn" class="form-label"> Наименование банка </label>
          <input type="text" class="form-control" id="bn" disabled />
        </div>
        <div class="mb-3">
          <label for="num" class="form-label"> Расчетный счет </label>
          <input type="text" class="form-control" id="num" disabled />
        </div>
        <div class="mb-3">
          <label for="bik" class="form-label"> БИК </label>
          <input type="text" class="form-control" id="bik" disabled />
        </div>
        <div class="mb-3">
          <label for="inn" class="form-label"> ИНН </label>
          <input type="text" class="form-control" id="inn" disabled />
        </div>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-dark me-3"
            @click="toggleModal(false)"
          >
            OK
          </button>
        </div>
      </Modal>

      <Modal v-if="isModalInfoShown" @close="toggleModalInfo(false)">
        <div class="row">
          <div class="col-4">
            <img src="@/assets/img/dummy.svg" class="img-fluid" alt="..." />
          </div>
          <div class="col-8">
            <div class="mb-3">
              <label for="name" class="form-label"> ФИО </label>
              <input type="text" class="form-control" id="name" disabled />
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="social" class="form-label">
                    Ссылка на соцсеть
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="social"
                    disabled
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="subscr" class="form-label">
                    Кол-во подписчиков
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="subscr"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="descr" class="form-label">Пару слов о себе</label>
              <textarea
                class="form-control"
                id="descr"
                rows="3"
                disabled
              ></textarea>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button
            type="button"
            class="btn btn-dark me-3"
            @click="toggleModalInfo(false)"
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/partials/Sidebar.vue";
import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
import Header from "@/components/base/Header.vue";
import FilterTabs from "@/components/partials/FilterTabs.vue";
import FilterPeriod from "@/components/partials/FilterPeriod.vue";
import Search from "@/components/partials/Search.vue";
import Modal from "@/components/base/Modal.vue";

export default {
  name: "Courses",
  components: {
    Sidebar,
    AppStickyHeader,
    Header,
    FilterTabs,
    FilterPeriod,
    Search,
    Modal,
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
          title: "Бесплатные",
        },
        {
          value: 3,
          title: "По подписке",
        },
        {
          value: 3,
          title: "Платные",
        },
      ],
      isModalShown: false,
      isModalInfoShown: false,
    };
  },
  methods: {
    onTabClick(val) {
      console.log(val);
    },
    toggleModal(val) {
      this.isModalShown = val;
    },
    toggleModalInfo(val) {
      this.isModalInfoShown = val;
    },
  },
};
</script>
