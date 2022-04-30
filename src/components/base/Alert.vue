<template>
  <div class="notice" :class="classes"><slot /></div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      let classes = [];

      switch (this.type) {
        case "error":
          classes.push("notice--error");
          break;
        case "success":
          classes.push("notice--success");
          break;
        default:
      }

      return classes;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit("close");
    }, 15000);
  },
};
</script>
