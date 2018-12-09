<template>
  <div>
    <img v-if="attaboy"
         :src="$t(`attaboy.${attaboy}.image`)"
         :alt="$t(`attaboy.${attaboy}`)">
  </div>
</template>

<script>
export default {
  props: {
    namespace: {
      type: String,
      required: true
    }
  },
  methods: {
    isOnSweetStreak() {
      return this.streak !== 0
        && this.streak % 5 === 0;
    },
    isStreaking() {
      return this.streak > 0;
    },
    choseWrongly() {
      return this.streak === 0
        && this.hasChosenAtLeastOnce;
    },
  },
  computed: {
    attaboy: function () {
      return this.isOnSweetStreak() ? 'excellent'
        : this.isStreaking() ? 'nice'
          : this.choseWrongly() ? 'nope'
            : null;
    },
    streak: function () {
      return this.$store.state[this.namespace].streak;
    },
    hasChosenAtLeastOnce: function () {
      return this.$store.state[this.namespace].hasChosenAtLeastOnce;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  flex: 2;
  margin: 10px;
  align-self: center;
}
img {
  $image-width: 110px;
  width: $image-width;
  height: $image-width;
}
</style>
