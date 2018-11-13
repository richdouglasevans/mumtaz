<template>
  <img :src="pathToImage"
        :alt="altText"
        @click="chooseThisLetter">
</template>

<script>
export default {
  props: {
    letter: {
      type: Object,
      required: true
    }
  },
  computed: {
    pathToImage: function () {
      return `img/devanagari/${this.letter.image}`;
    },
    altText: function () {
      return this.letter.name;
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
img {
  padding-top: 10px;
  width: 60%;
  height: 60%;
}

@media (min-width: 320px) {
  img {
    width: 40%;
    height: 40%;
    align-self: center;
  }
}
</style>
