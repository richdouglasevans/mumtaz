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
import { mapState } from 'vuex';
import Letter from '@/components/Letter';
import BigLetter from '@/components/BigLetter';
import Streak from '@/components/streak/Streak';

export default {
  components: { Letter, BigLetter, Streak },
  created: function () {
    this.startOver();
  },
  computed: {
    ...mapState('letterforms', ['round'])
  },
  methods: {
    startOver: function () {
      this.$store.dispatch('letterforms/START_OVER');
    },
    skipLetter: function () {
      this.$store.dispatch('letterforms/NEW_ROUND');
    },
    onLetterChosen: function (chosenLetter) {
      this.$store.dispatch('letterforms/CHOOSE_LETTER', chosenLetter);
    }
  }
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
