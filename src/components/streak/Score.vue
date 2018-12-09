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
export default {
  props: {
    namespace: {
      type: String,
      required: true
    }
  },
  computed: {
    streak: function () {
      return this.$store.state[this.namespace].streak;
    },
    longestStreak: function () {
      return this.$store.state[this.namespace].longestStreak;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  flex: 1;
  margin: 5px 20px 5px;
  color: $c-metallo;
}
.streak {
  border-bottom: 1px dashed $c-metallo;
}
.value {
  display: block;
  font-size: 3em;
}
.label {
  text-transform: uppercase;
  font-size: 0.85em;
  color: $c-tetsuo;
  font-weight: bold;
}
</style>
