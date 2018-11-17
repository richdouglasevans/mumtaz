<template>
  <div>
    <img :src="$t(`attaboy.${attaboy}.image`)"
         :alt="$t(`attaboy.${attaboy}`)"
         v-if="attaboy">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
        ...mapState('letterforms', ['streak', 'hasChosenAtLeastOnce'])
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
