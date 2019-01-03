<template>
  <table>
    <tbody>
      <tr>
        <td @click="chooseThisNumber(1)">1</td>
        <td @click="chooseThisNumber(2)">2</td>
        <td @click="chooseThisNumber(3)">3</td>
      </tr>
      <tr>
        <td @click="chooseThisNumber(4)">4</td>
        <td @click="chooseThisNumber(5)">5</td>
        <td @click="chooseThisNumber(6)">6</td>
      </tr>
      <tr>
        <td @click="chooseThisNumber(7)">7</td>
        <td @click="chooseThisNumber(8)">8</td>
        <td @click="chooseThisNumber(9)">9</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    chooseThisNumber: function (number) {
      this.$emit('number-chosen', number);
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  width: 33%;
  text-align: center;
  font-size: 2.7em;
  align-self: center;
  font-family: $c-lefont;
}
</style>
