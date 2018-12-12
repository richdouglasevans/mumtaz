<template>
  <div class="status">
    <score :namespace="namespace"/>
    <attaboy :namespace="namespace"/>
  </div>
</template>

<script>
import Score from './Score';
import Attaboy from './Attaboy';

export default {
  components: { Score, Attaboy },
  props: {
    namespace: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  background-color: $c-batman;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
