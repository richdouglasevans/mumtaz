<template>
  <div>
    <h2>{{streak}}</h2>
    <span>{{$t('alphabet.streak')}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('alphabet', ['streak'])
  }
};
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  margin: 5px;
  color: aliceblue;
  font-size: 25px;
}
h2 {
  margin-top: 10px;
}
</style>
