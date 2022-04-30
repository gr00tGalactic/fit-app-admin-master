<template>
  <div class="filter-tabs">
    <label class="filter-tab" v-for="(tab, i) in tabs" :key="i">
      <input
        type="radio"
        :name="'radio-' + name"
        :value="tab.value"
        v-model="activeTabVal"
      />
      <span class="checkmark">{{ tab.title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FilterTabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    activeTabVal: {
      get() {
        return this.activeTab;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
