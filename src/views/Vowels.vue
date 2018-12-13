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
import { createNamespacedHelpers } from 'vuex';

import { Actions } from '@/stores/vowels';

import Streak from '@/components/streak/Streak';
import Conjunction from '@/components/Conjunction';
import BigConjunction from '@/components/BigConjunction';

const { mapState, mapActions } = createNamespacedHelpers('vowels');

export default {
  components: { BigConjunction, Conjunction, Streak },
  created: function () {
    this.startOver();
  },
  computed: mapState(['round']),
  methods: {
    keyFor: (c) => `${c.consonant.name}-${c.vowel.name}`,
    ...mapActions({
      startOver: Actions.StartOver,
      onConjunctionChosen: Actions.ChooseConjunction
    })
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
