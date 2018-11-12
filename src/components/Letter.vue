<template>
  <div @click="chooseThisLetter">
    <span v-html="letter.romanization"></span>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: Object,
      required: true
    }
  },
  methods: {
    chooseThisLetter: function (e) {
      this.$emit('letter-chosen', this.letter);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 80px;
  font-size: 55px;
}
</style>
