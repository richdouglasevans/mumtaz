<template>
  <section>
    <div class="streak">
      <span class="label">{{$t('alphabet.streak')}}</span>
      <span class="value">{{streak}}</span>
    </div>
    <div class="longestStreak">
      <span class="value">{{longestStreak}}</span>
      <span class="label">{{$t('alphabet.longestStreak')}}</span>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('letterforms', ['streak', 'longestStreak'])
  }
};
</script>

<style lang="scss" scoped>
$c-banana: aliceblue;

section {
  flex: 1;
  margin: 5px 20px 5px;
  color: $c-banana;
}
.streak {
  border-bottom: 1px dashed $c-banana;
}
.value {
  display: block;
  font-size: 3em;
}
.label {
  text-transform: uppercase;
  font-size: 0.85em;
  color: black;
}
</style>
