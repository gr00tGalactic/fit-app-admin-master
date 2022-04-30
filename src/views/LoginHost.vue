<template>
  <div>
    <Alert v-if="isAlertShown" :type="alertType">
      {{ alertType === "success" ? "Пароль принят" : "Неверный пароль" }}
    </Alert>

    <div class="login">
      <img src="@/assets/img/logo.svg" alt="Logo" class="login__logo" />
      <form action="" class="login-form">
        <div class="form-group">
          <label for="password" class="login-form__label">
            Введите пароль хоста
          </label>
          <input
            id="password"
            type="password"
            class="form-control form-control-lg"
            :class="{
              'is-invalid':
                ($v.password.$dirty && $v.password.$invalid) ||
                backendErrors.password,
            }"
            v-model.trim="password"
          />
          <div class="invalid-feedback">
            <template v-if="$v.password.$dirty && $v.password.$invalid"
              >Введите пароль</template
            >
            <template v-if="backendErrors.password">
              {{ backendErrors.password[0] }}
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
          <a href="javascript:void(0)" class="link-primary"
            >Вход для пользователя</a
          >
        </div>
      </form>
      <div class="login__version">V.1.12</div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/base/Alert.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LoginHost",
  components: { Alert },
  data() {
    return {
      password: "",
      loading: false,
      isAlertShown: false,
      alertType: "",
      backendErrors: {},
    };
  },
  validations: {
    password: { required },
  },
  methods: {
    async onSubmit() {
      if (this.loading) return;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.alertType = "error";
        this.isAlertShown = true;
      } else {
        this.loading = true;
        this.isAlertShown = false;

        //send request
        const auth = await this.$store.dispatch("fetchToken", { password: this.password });
        console.log('auth:', auth);

        if (auth.success) {
          this.loading = false;
          this.alertType = "success";
          this.isAlertShown = true;

          return await this.$router.push("/users");
        }

        this.alertType = "error";
        this.isAlertShown = true;

        this.loading = false;
      }
    },
  },
};
</script>
