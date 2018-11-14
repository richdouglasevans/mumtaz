<template>
  <devanagari :name="letter.name"
              height="9em"
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
  padding-top: 10px;
}
</style>
