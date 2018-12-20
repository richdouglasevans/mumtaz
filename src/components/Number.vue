<template>
  <div @click="chooseThisNumber">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Object,
      required: true
    }
  },
  methods: {
    chooseThisNumber: function (e) {
      this.$emit('number-chosen', this.number);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
