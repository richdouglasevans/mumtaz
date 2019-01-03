<template>
  <main class="game">
    <h1 class="banner"
        :title="$t('nextNumber.title.altText')"
        v-html="$t('nextNumber.title')">
    </h1>
    <number :number="round.number"
            class="number number-big"
            @number-chosen="skipNumber">
      <span v-html="round.number.encodings.htmlEntityHex"/>
    </number>
    <number-pad @number-chosen="onNumberChosen"
                class="number-pad"/>
    <streak namespace="nextNumber"/>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Actions } from '@/stores/nextNumber';
import Number from '@/components/Number';
import Streak from '@/components/streak/Streak';
import NumberPad from '@/components/NumberPad';

const { mapState, mapActions } = createNamespacedHelpers('nextNumber');

export default {
  components: { Number, Streak, NumberPad },
  created: function () {
    this.startOver();
  },
  computed: mapState(['round', 'chosenNumber']),
  methods: {
    onNumberChosen(chosenNumber) {
      this.$store.dispatch(`nextNumber/${Actions.ChooseNumber}`, chosenNumber);
    },
    ...mapActions({
      startOver: Actions.StartOver,
      skipNumber: Actions.NewRound
    })
  }
};
</script>

<style lang="scss" scoped>
.number {
  margin: 5px;
  color: $c-tetsuo;
}
.number-big {
  min-height: 75px;
  font-size: 3.1em;
}
.number-pad {
  margin-bottom: 10px;
}
</style>
