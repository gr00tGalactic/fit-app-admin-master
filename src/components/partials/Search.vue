<template>
  <div class="search-panel__search input-group">
    <input
      v-model="val"
      type="text"
      class="form-control"
      placeholder="Поиск по id, email, телефону"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button @click="() => $emit('findByIdOrEmailOrPhone',  this.val )" class="btn btn-dark" type="button" id="button-addon2">Найти</button>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      val: "",
    };
  },
};
</script>
