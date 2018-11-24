<template>
  <section class="lobby">
    <h1>{{ $t('lobby.heading') }}</h1>
    <router-link v-for="game in games"
                 :key="game.name"
                 :to="game.route">
      <button>{{ $t(`${game.name}.routeTo.label`) }}</button>
    </router-link>
  </section>
</template>

<script>

export default {
  data() {
    return {
      games: [
        {
          name: 'letterforms',
          route: '/letterforms'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$c-batman: MediumSeaGreen;
$c-apricot: #ff9933;
$c-metallo: aliceblue;
$c-tetsuo: #333300;

.lobby {
  margin: 0;
  min-width: 320px;
}

h1 {
  padding: 7px;
  font-size: 2.1em;
  color: $c-tetsuo;
  margin: 0;
  background-color: $c-batman;
}

button {
  padding: 10px;
  border: 0;
  color: $c-tetsuo;
  font-size: 2.1em;
  background-color: $c-batman;
  font-family: inherit;
  width: 100%;
  margin-top: 20px;
}
</style>
