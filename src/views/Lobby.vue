<template>
  <section class="lobby">
    <h1 class="banner">{{ $t('lobby.heading') }}</h1>
    <router-link v-for="game in games"
                 :key="game.name"
                 :to="game.route">
      <button :title="$t(`${game.name}.routeTo.label.altText`)">
        {{ $t(`${game.name}.routeTo.label`) }}
      </button>
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
        },
        {
          name: 'vowels',
          route: '/vowels'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.lobby {
  margin: 0;
  min-width: 320px;
}

button {
  padding: 10px;
  border: 0;
  color: $c-tetsuo;
  font-size: 2.1em;
  background-color: $c-batman;
  font-family: inherit;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
}
</style>
