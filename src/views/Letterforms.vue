<template>
  <main>
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
    <div class="status">
      <streak namespace="letterforms"/>
      <attaboy namespace="letterforms"/>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Streak from '@/components/Streak';
import Letter from '@/components/Letter';
import Attaboy from '@/components/Attaboy';
import BigLetter from '@/components/BigLetter';

export default {
  components: { Letter, BigLetter, Streak, Attaboy },
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
main {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.transliterations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
}
</style>
