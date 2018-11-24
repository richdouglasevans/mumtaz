<template>
  <div v-html="letter.romanization"
        @click="chooseThisLetter"/>
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
$c-tetsuo: #333300;

div {
  width: 80px;
  font-size: 55px;
  color: $c-tetsuo;
}
</style>
