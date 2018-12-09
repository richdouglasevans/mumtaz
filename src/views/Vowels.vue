<template>
  <main>
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
    <div class="status">
      <streak namespace="vowels"/>
      <attaboy namespace="vowels"/>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Streak from '@/components/Streak';
import Attaboy from '@/components/Attaboy';
import Conjunction from '@/components/Conjunction';
import BigConjunction from '@/components/BigConjunction';

export default {
  components: { BigConjunction, Conjunction, Streak, Attaboy },
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
main {
  display: flex;
  flex-direction: column;
  align-content: center;
  color: $c-tetsuo;
}
.conjunctions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
