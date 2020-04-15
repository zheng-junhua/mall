<template>
  <div class="check-button" :class="{ckeck: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .ckeck {
    background-color:var(--color-high-text);
    border-color: var(--color-high-text);
  }
</style>