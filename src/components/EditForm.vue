<template>
  <div>
    <input v-model="message">
    <br class="hidden-md">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message: {
      get() {
        return this.$store.getters['EditForm/message'];
      },
      set(value) {
        this.$store.dispatch('EditForm/doUpdate', value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
div {
  background-color: #fff;
  transition: $tst-default;
  input {
    font-size: 2rem;
    color: $color-primary-red;
  }
}
</style>
