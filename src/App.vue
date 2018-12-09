<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <span v-html="$t('alphabet.footer')"></span>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=EB+Garamond");

#app {
  text-align: center;
}

@media (min-width: 400px) {
  #app {
    margin: auto;
    width: 400px;
  }
}
</style>
