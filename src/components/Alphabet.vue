<template>
  <main>
    <h1 :title="$t('alphabet.title.altText')"
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
      <streak/>
      <attaboy/>
    </div>
    <div class="footer">
      <span v-html="$t('alphabet.footer')"></span>
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
    ...mapState('alphabet', ['round'])
  },
  methods: {
    startOver: function () {
      this.$store.dispatch('alphabet/START_OVER');
    },
    skipLetter: function () {
      this.$store.dispatch('alphabet/NEW_ROUND');
    },
    onLetterChosen: function (chosenLetter) {
      this.$store.dispatch('alphabet/CHOOSE_LETTER', chosenLetter);
    }
  }
};
</script>

<style lang="scss" scoped>
$c-batman: MediumSeaGreen;

main {
  display: flex;
  flex-direction: column;
  align-content: center;
}
h1 {
  padding: 7px;
  padding-bottom: 0;
  font-size: 2.1em;
  color: aliceblue;
  margin: 0;
  background-color: $c-batman;
}
.transliterations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
}
.status {
  background-color: $c-batman;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 10px;
  padding-bottom: 20px;
}
.footer {
  margin-top: 20px;
  font-style: italic;
}

@media (min-width: 320px) {
  .status {
    padding-bottom: 10px;
  }
}
</style>
