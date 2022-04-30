<template>
  <div>
    <Alert v-if="isAlertShown" type="error">ОШИБКА! Попробуйте еще раз</Alert>

    <div class="login">
      <img src="@/assets/img/logo.svg" alt="Logo" class="login__logo" />
      <form action="" class="login-form">
        <div class="form-group">
          <label for="adminEmail" class="login-form__label">
            Введите свою почту
          </label>
          <input
            id="adminEmail"
            type="email"
            class="form-control form-control-lg"
            :class="{
              'is-invalid':
                ($v.email.$dirty && $v.email.$invalid) || backendErrors.email,
            }"
            v-model.trim="email"
          />
          <div class="invalid-feedback">
            <template v-if="$v.email.$dirty && $v.email.$invalid"
              >Введите email</template
            >
            <template v-if="backendErrors.email">
              {{ backendErrors.email[0] }}
            </template>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-dark btn-lg w-100"
          :disabled="loading"
          @click.prevent="onSubmit"
        >
          Войти
        </button>
        <div class="text-center pt-5">
          <a href="javascript:void(0)" class="link-primary">Вход для хоста</a>
        </div>
      </form>
      <div class="login__version">V.1.12</div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/base/Alert.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  components: { Alert },
  data() {
    return {
      email: "",
      loading: false,
      isAlertShown: false,
      backendErrors: {},
    };
  },
  validations: {
    email: { required, email },
  },
  methods: {
    onSubmit() {
      if (this.loading) return;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isAlertShown = true;
      } else {
        this.loading = true;
        this.isAlertShown = false;

        //send request

        this.loading = false;
      }
    },
  },
};
</script>
