<template>
  <main class="game">
    <h1 class="banner"
        :title="$t('vowel-conjunctions.title.altText')"
        @click="startOver">
      {{ $t('vowel-conjunctions.title') }}
    </h1>
    <big-conjunction :conjunction="round.conjunction"/>
    <div class="conjunctions">
      <conjunction v-for="choice in round.choices"
                   :key="keyFor(choice)"
                   :conjunction="choice"
                   @conjunction-chosen="onConjunctionChosen"/>
    </div>
    <streak namespace="vowels"/>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Streak from '@/components/streak/Streak';
import Conjunction from '@/components/Conjunction';
import BigConjunction from '@/components/BigConjunction';

export default {
  components: { BigConjunction, Conjunction, Streak },
  created: function () {
    this.startOver();
  },
  computed: {
    ...mapState('vowels', ['round'])
  },
  methods: {
    startOver: function () {
      this.$store.dispatch('vowels/START_OVER');
    },
    onConjunctionChosen: function (chosenConjunction) {
      this.$store.dispatch('vowels/CHOOSE_CONJUNCTION', chosenConjunction);
    },
    keyFor: (conjunction) => `${conjunction.consonant.name}-${conjunction.vowel.name}`
  }
};
</script>

<style lang="scss" scoped>
.conjunctions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
