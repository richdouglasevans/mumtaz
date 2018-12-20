<template>
  <main class="game">
    <h1 class="banner"
        :title="$t('numberforms.title.altText')">
      {{ $t('numberforms.title') }}
    </h1>
    <number :number="round.number"
            class="number number-big">
      <span v-html="round.number.encodings.htmlEntityHex"/>
    </number>
    <div class="transliterations">
      <number v-for="number in round.transliterations"
              :key="number.value"
              :number="number"
              class="number number-arabic"
              @number-chosen="onNumberChosen">
        {{ number.value }}
      </number>
    </div>
    <streak namespace="numberforms"/>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Actions } from '@/stores/numberforms';
import Number from '@/components/Number';
import Streak from '@/components/streak/Streak';

const { mapState, mapActions } = createNamespacedHelpers('numberforms');

export default {
  components: { Number, Streak },
  created: function () {
    this.startOver();
  },
  computed: mapState(['round']),
  methods: mapActions({
    startOver: Actions.StartOver,
    skipNumber: Actions.NewRound,
    onNumberChosen: Actions.ChooseNumber
  })
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
.number-arabic {
  width: 80px;
  font-size: 2.6em;
}
.transliterations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
}
</style>
