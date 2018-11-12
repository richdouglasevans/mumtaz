<template>
  <div>
    <img src="img/cupcake_128x128.png"
         :alt="$t('attaboy.excellent')"
         :title="$t('attaboy.excellent')"
         v-if="isOnSweetStreak">
    <img src="img/smile_128x128.png"
         :alt="$t('attaboy.nice')"
         :title="$t('attaboy.nice')"
         v-else-if="isStreaking">
    <img src="img/nope_128x128.png"
         :alt="$t('attaboy.nope')"
         :title="$t('attaboy.nope')"
         v-else-if="choseWrongly">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        isOnSweetStreak: function () {
            return this.streak !== 0 && this.streak % 5 === 0;
        },
        isStreaking: function () {
            return this.streak > 0;
        },
        choseWrongly: function () {
            return this.streak === 0 && this.hasChosenAtLeastOnce;
        },
        ...mapState('alphabet', ['streak', 'hasChosenAtLeastOnce'])
    }
};
</script>

<style lang="scss" scoped>
div {
  flex: 2;
  margin: 10px;
  align-self: center;
}
</style>
