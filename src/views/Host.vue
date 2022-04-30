<template>
  <div>
    <AppStickyHeader>
      <Header :isProfileShow="false">
        <template v-slot:title> Администраторы </template>
      </Header>
    </AppStickyHeader>

    <section class="app-container">
      <div class="content-table">
        <div class="content-table__row content-table__row--head">
          <div class="content-table__cell content-table__cell--head">
            <span>Имя</span>

            <div class="content-table__cell-input pt-3">
              <input
                type="text"
                class="form-control"
                :class="{
                  'is-invalid':
                    ($v.user.name.$dirty && $v.user.name.$invalid) ||
                    backendErrors.name,
                }"
                v-model.trim="user.name"
              />
              <div class="invalid-feedback">
                <template v-if="$v.user.name.$dirty && $v.user.name.$invalid"
                  >Введите имя</template
                >
                <template v-if="backendErrors.name">
                  {{ backendErrors.name[0] }}
                </template>
              </div>
            </div>
          </div>
          <div class="content-table__cell content-table__cell--head">
            <span>Почта</span>

            <div class="content-table__cell-input pt-3">
              <input
                type="email"
                class="form-control"
                :class="{
                  'is-invalid':
                    ($v.user.email.$dirty && $v.user.email.$invalid) ||
                    backendErrors.email,
                }"
                v-model.trim="user.email"
              />
              <div class="invalid-feedback">
                <template v-if="$v.user.email.$dirty && $v.user.email.$invalid"
                  >Введите почту</template
                >
                <template v-if="backendErrors.email">
                  {{ backendErrors.email[0] }}
                </template>
              </div>
            </div>
          </div>
          <div class="content-table__cell content-table__cell--head">
            <span>Тип</span>

            <div class="content-table__cell-input pt-3">
              <select
                v-model="user.type"
                class="form-select"
                :class="{
                  'is-invalid':
                    ($v.user.type.$dirty && $v.user.type.$invalid) ||
                    backendErrors.type,
                }"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div class="invalid-feedback">
                <template v-if="$v.user.type.$dirty && $v.user.type.$invalid"
                  >Выберите тип</template
                >
                <template v-if="backendErrors.type">
                  {{ backendErrors.type[0] }}
                </template>
              </div>
            </div>
          </div>
          <div
            class="content-table__cell content-table__cell--head content-table__cell--action"
          >
            <span>Действие</span>

            <div class="pt-3">
              <button
                type="button"
                class="btn btn-dark w-100"
                :disabled="loading"
                @click.prevent="onCreate"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>

        <div class="content-table__row">
          <div class="content-table__cell">Иван</div>
          <div class="content-table__cell">usermail@mail.ru</div>
          <div class="content-table__cell">Админ</div>
          <div class="content-table__cell content-table__cell--action">
            <button
              type="button"
              class="btn btn-dark w-100"
              :disabled="loading"
            >
              Удалить
            </button>
          </div>
        </div>

        <div class="content-table__row">
          <div class="content-table__cell">Иван</div>
          <div class="content-table__cell">usermail@mail.ru</div>
          <div class="content-table__cell">Хост</div>
          <div class="content-table__cell content-table__cell--action">
            <button
              type="button"
              class="btn btn-dark w-100"
              :disabled="loading"
            >
              Удалить
            </button>
          </div>
        </div>

        <div class="content-table__row">
          <div class="content-table__cell">Иван</div>
          <div class="content-table__cell">usermail@mail.ru</div>
          <div class="content-table__cell">Админ</div>
          <div class="content-table__cell content-table__cell--action">
            <button
              type="button"
              class="btn btn-dark w-100"
              :disabled="loading"
            >
              Удалить
            </button>
          </div>
        </div>

        <div class="content-table__row">
          <div class="content-table__cell">Иван</div>
          <div class="content-table__cell">usermail@mail.ru</div>
          <div class="content-table__cell">Админ</div>
          <div class="content-table__cell content-table__cell--action">
            <button
              type="button"
              class="btn btn-dark w-100"
              :disabled="loading"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppStickyHeader from "@/components/partials/AppStickyHeader.vue";
import Header from "@/components/base/Header.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Host",
  components: { AppStickyHeader, Header },
  data() {
    return {
      user: {
        name: "",
        email: "",
        type: "",
      },
      loading: false,
      isAlertShown: false,
      backendErrors: {},
    };
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      type: { required },
    },
  },
  methods: {
    onCreate() {
      if (this.loading) return;

      this.$v.$touch();
      if (this.$v.$invalid) {
        // this.isAlertShown = true;
      } else {
        this.loading = true;
        // this.isAlertShown = false;

        //send request

        this.loading = false;
      }
    },
  },
};
</script>
