<template>
  <h2 v-html="devanagariConjunction"
      @click="chooseThisConjunction"/>
</template>

<script>
export default {
  props: {
    conjunction: {
      type: Object,
      required: true
    }
  },
  computed: {
    devanagariConjunction: function() {
      return [
        this.conjunction.consonant.encodings.htmlEntityHex,
        this.conjunction.vowel.sign.encodings.htmlEntityHex
      ].join('');
    }
  },
  methods: {
    chooseThisConjunction: function (e) {
      this.$emit('conjunction-chosen', this.conjunction);
    }
  }
};
</script>

<style lang="scss" scoped>
$c-tetsuo: #333300;

h2 {
  font-size: 3.1em;
  color: $c-tetsuo;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>
