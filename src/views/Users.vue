<template>
  <div class="page">
    <Sidebar />
    <div class="page-content">
      <AppStickyHeader>
        <Header>
          <template v-slot:title> Пользователи </template>
        </Header>
        <div class="filter-panel">
          <FilterTabs :tabs="tabs" @input="onTabClick" />

          <FilterPeriod @filteredByDates="filteredByDates"/>
        </div>

        <div class="search-panel">
          <Search @findByIdOrEmailOrPhone="findByIdOrEmailOrPhone"/>

          <div class="search-panel__btns"></div>
        </div>
      </AppStickyHeader>

      <div class="app-container">
        <div class="table-responsive">
          <table class="table table-borderless main-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">email</th>
                <th scope="col">Телефон</th>
                <th scope="col">Имя</th>
                <th scope="col">Подписка</th>
                <th scope="col">Марафон</th>
                <th scope="col">Тип</th>
                <th scope="col">Дата рег.</th>
                <th scope="col">Дата акт.</th>
                <th scope="col">Транзакции</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.id">
                <th scope="row">{{ item.id }}</th>
                <td>
                  <span class="text-primary">{{ item.email ? item.email : '-' }}</span>
                </td>
                <td>
                  <span class="text-primary">{{ item.phone ? '+' + item.phone : '-' }}</span>
                </td>
                <td>
                  <span class="text-primary">{{ item.name }}</span>
                </td>
                <td>
                  <span
                    v-bind:class="[
                      item.subscription === 'Активна'
                        ? 'text-success'
                        : 'text-danger',
                    ]"
                    >{{ item.subscription }}</span
                  >
                </td>
                <td>
                  <span
                    v-bind:class="[
                      item.marathon === 'Активен'
                        ? 'text-success'
                        : 'text-danger',
                    ]"
                    >{{ item.marathon }}</span
                  >
                </td>
                <td>{{ item.description }}</td>
                <td>{{ item.createdAt }}</td>
                <td>{{ item.activationDate }}</td>
                <td>
                  <a class="text-primary" href="javascript:void(0)"
                    >См. транзакции</a
                  >
                </td>
              </tr>

              <!--              <tr>-->
              <!--                <th scope="row">1</th>-->
              <!--                <td><span class="text-primary">usermail@mail.ru</span></td>-->
              <!--                <td><span class="text-primary">Иван И</span></td>-->
              <!--                <td>23</td>-->
              <!--                <td><span class="text-success">Активна</span></td>-->
              <!--                <td>Пользователь</td>-->
              <!--                <td>-->
              <!--                  <a class="text-primary" href="javascript:void(0)"-->
              <!--                    >См. транзакции</a-->
              <!--                  >-->
              <!--                </td>-->
              <!--                <td>05.02.2022</td>-->
              <!--                <td>04.02.2022 / 22:00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <th scope="row">1</th>-->
              <!--                <td><span class="text-primary">usermail@mail.ru</span></td>-->
              <!--                <td><span class="text-primary">Иван И</span></td>-->
              <!--                <td>23</td>-->
              <!--                <td><span class="text-danger">Не активна</span></td>-->
              <!--                <td>Автор</td>-->
              <!--                <td>-->
              <!--                  <a class="text-primary" href="javascript:void(0)"-->
              <!--                    >См. транзакции-->
              <!--                  </a>-->
              <!--                </td>-->
              <!--                <td>05.02.2022</td>-->
              <!--                <td>04.02.2022 / 22:00</td>-->
              <!--              </tr>-->
              <!--              <tr>-->
              <!--                <th scope="row">1</th>-->
              <!--                <td><span class="text-primary">usermail@mail.ru</span></td>-->
              <!--                <td><span class="text-primary">Иван И</span></td>-->
              <!--                <td>23</td>-->
              <!--                <td><span class="text-success">Активна</span></td>-->
              <!--                <td>Пользователь</td>-->
              <!--                <td>-->
              <!--                  <a class="text-primary" href="javascript:void(0)"-->
              <!--                    >См. транзакции</a-->
              <!--                  >-->
              <!--                </td>-->
              <!--                <td>05.02.2022</td>-->
              <!--                <td>04.02.2022 / 22:00</td>-->
              <!--              </tr>-->
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
import Search from "@/components/partials/Search.vue";

export default {
  name: "Users",
  components: {
    Sidebar,
    AppStickyHeader,
    Header,
    FilterTabs,
    FilterPeriod,
    Search,
  },
  data() {
    return {
      users: [
        {
          id: "",
          email: "",
          phone: "",
          name: "",
          subscription: "",
          marathon: "",
          description: "",
          createdAt: "",
          activationDate: "",
        },
      ],
      allUsers: [
        {
          id: "",
          email: "",
          phone: "",
          name: "",
          subscription: "",
          marathon: "",
          description: "",
          createdAt: "",
          activationDate: "",
        },
      ],
      tabs: [
        {
          value: 1,
          title: "Все",
        },
        {
          value: 2,
          title: "Активная подписка",
        },
        {
          value: 3,
          title: "Не продлили подписку",
        },
      ],
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    },
  },
  async mounted() {
    const result = await this.axios.get("/api/users/getUsersAndModerators", {
      headers: { Authorization: `Bearer ${this.getToken}` },
    });

    console.log("result.data", result.data);

    this.allUsers = result.data;
    this.users = result.data;
  },

  methods: {
    onTabClick(val) {
      console.log(val);

      switch (val) {
        case 1:
          return (this.users = this.allUsers);
        case 2:
          return (this.users = this.allUsers.filter(
            (x) => x.subscription === "Активна"
          ));
        case 3:
          return (this.users = this.allUsers.filter(
            (x) => x.subscription === "Не активна"
          ));
        default:
          return (this.users = this.allUsers);
      }
    },
    filteredByDates(dates) {
      this.users = this.allUsers.filter(x => new Date(x.createdAt) >= new Date(dates.dtFrom) && new Date(x.createdAt) <= new Date(dates.dtTo));
    },
    findByIdOrEmailOrPhone(value) {
      if (value) {
        this.users = this.allUsers.filter(x => value == x.id);

        if (!this.users.length) {
          this.users = this.allUsers.filter(x => value === x.email);

          if (!this.users.length) {
            this.users = this.allUsers.filter(x => (value == x.phone || value == ('+' + x.phone)));

            if (!this.users.length) {
              this.users = [];
            }
          }
        }
      } else {
        this.users = [];
      }
    },
  },
};
</script>
