<template>
  <div class="modal-custom" @click.self="$emit('close')">
    <div class="modal-custom__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {},
};
</script>
