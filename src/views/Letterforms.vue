<template>
  <main class="game">
    <h1 class="banner"
        :title="$t('alphabet.title.altText')"
        @click="startOver">
      {{ $t('alphabet.title') }}
    </h1>
    <big-letter :letter="round.letter"
                @letter-chosen="skipLetter"/>
    <div class="transliterations">
      <letter v-for="letter in round.transliterations"
              :key="letter.name"
              :letter="letter"
              @letter-chosen="onLetterChosen"/>
    </div>
    <streak namespace="letterforms"/>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { Actions } from '@/stores/letterforms';
import Letter from '@/components/Letter';
import BigLetter from '@/components/BigLetter';
import Streak from '@/components/streak/Streak';

const { mapState, mapActions } = createNamespacedHelpers('letterforms');

export default {
  components: { Letter, BigLetter, Streak },
  created: function () {
    this.startOver();
  },
  computed: mapState(['round']),
  methods: mapActions({
    startOver: Actions.StartOver,
    skipLetter: Actions.NewRound,
    onLetterChosen: Actions.ChooseLetter
  })
};
</script>

<style lang="scss" scoped>
.transliterations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
}
</style>
