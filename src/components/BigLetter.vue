<template>
  <devanagari :name="letter.name"
              height="7em"
              @click="chooseThisLetter"/>
</template>

<script>
import '@/components/devanagari';

export default {
  props: {
    letter: {
      type: Object,
      required: true
    }
  },
  methods: {
    chooseThisLetter: function () {
      this.$emit('letter-chosen', this.letter);
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  margin-top: 10px;
}

.deva-icon {
  color: $c-tetsuo;
  fill: currentColor;
  stroke: currentColor;
}
</style>
