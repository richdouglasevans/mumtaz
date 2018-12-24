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
    <input :value="chosenNumber"
           type="number" required="true"
           min="0" max="9"
           @input="onNumberChosen"/>
    <streak namespace="nextNumber"/>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Actions } from '@/stores/nextNumber';
import Number from '@/components/Number';
import Streak from '@/components/streak/Streak';

const { mapState, mapActions } = createNamespacedHelpers('nextNumber');

export default {
  components: { Number, Streak },
  created: function () {
    this.startOver();
  },
  computed: mapState(['round', 'chosenNumber']),
  methods: {
    onNumberChosen(e) {
      if (e.data && e.data.trim()) {
        const chosenNumber = parseInt(e.data);
        this.$store.dispatch(`nextNumber/${Actions.ChooseNumber}`, chosenNumber);
      }
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
input {
  width: 33%;
  border: 2px solid $c-tetsuo;
  text-align: center;
  font-size: 3.1em;
  align-self: center;
  margin-bottom: 30px;
  font-family: $c-lefont;
}
</style>
