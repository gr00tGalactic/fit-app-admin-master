<template>
  <div>
    <Alert v-if="isAlertShown" :type="alertType">
      {{ alertType === "success" ? "Пароль принят" : "Неверный пароль" }}</Alert
    >

    <div class="login">
      <img src="@/assets/img/logo.svg" alt="Logo" class="login__logo" />
      <form action="" class="login-form">
        <div class="form-group">
          <label for="code" class="login-form__label">
            Введите код, который мы вам отправили на почту kirill@gmail.com
          </label>

          <div
            class="verification-code"
            :class="{
              'is-invalid':
                ($v.code.$dirty && $v.code.$invalid) || backendErrors.code,
            }"
          >
            <input
              id="code"
              type="text"
              class="verification-code__input"
              :value="code"
              @keypress="isNumber"
              @input="onCodeInput"
              maxlength="4"
              :disabled="loading"
            />
            <div class="verification-code__border"></div>
          </div>

          <div class="invalid-feedback text-center pt-2">
            <template v-if="$v.code.$dirty && $v.code.$invalid">
              Введите код
            </template>
            <template v-if="backendErrors.code">
              {{ backendErrors.code[0] }}
            </template>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-dark btn-lg w-100"
          :disabled="loading"
          @click.prevent="onSubmit"
        >
          Подтвердить код
        </button>
        <div class="text-center pt-5">
          <a href="javascript:void(0)" class="link-primary"
            >Отправить код повторно через 95 сек</a
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
  name: "LoginStep2",
  components: { Alert },
  data() {
    return {
      code: "",
      loading: false,
      isAlertShown: false,
      alertType: "",
      backendErrors: {},
    };
  },
  validations: {
    code: { required },
  },
  methods: {
    onCodeInput(e) {
      let val = e.target.value;
      val.substring(0, 4);
      this.code = val;

      if (this.code.length === 4) {
        this.onSubmit();
        // for removing focus from input
        let nextEl = document.querySelector("button");
        nextEl.focus();
        nextEl.blur();
      }
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onSubmit() {
      if (this.loading) return;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.alertType = "error";
        this.isAlertShown = true;
      } else {
        this.loading = true;
        this.isAlertShown = false;

        //send request

        // this.loading = false;
        this.alertType = "success";
        this.isAlertShown = true;
      }
    },
  },
};
</script>
