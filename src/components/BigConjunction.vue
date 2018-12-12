<template>
  <section>
    <h2 v-html="theConjunction" @click="toggleDisplay"/>
  </section>
</template>

<script>
export default {
  props: {
    conjunction: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      displayDevanagari: false
    };
  },
  computed: {
    romanConjunction() {
      return this.conjoin(
        this.conjunction.consonant.romanization,
        this.conjunction.vowel.romanization
      );
    },
    devanagariConjunction() {
      return this.conjoin(
        this.conjunction.consonant.encodings.htmlEntityHex,
        this.conjunction.vowel.encodings.htmlEntityHex
      );
    },
    theConjunction() {
      return this.displayDevanagari
        ? this.devanagariConjunction
        : this.romanConjunction;
    }
  },
  methods: {
    conjoin: function (a, b) {
      return [a, b].join(this.$t('vowel-conjunctions.conjoin'));
    },
    toggleDisplay: function () {
      this.displayDevanagari = !this.displayDevanagari;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 5px;
  font-size: 3.1em;
  color: $c-tetsuo;
  min-height: 75px;
}
</style>
