<template>
  <header class="header">
    <div class="header__left">
      <h1 class="header__title">
        <slot name="title"></slot>
      </h1>
      <slot name="tabs"></slot>
    </div>
    <div class="header__account">
      <div v-if="isProfileShow" class="profile">
        <div class="profile__name">Host</div>
        <div class="profile__avatar"></div>
      </div>
      <button v-on:click="exit" type="button" class="btn btn-dark">Выйти</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isProfileShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    async exit() {
      await this.$store.commit("getToken", "");

      await this.$router.push("/login-host");
    },
  },
};
</script>
