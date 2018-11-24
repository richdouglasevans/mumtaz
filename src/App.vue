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

$c-batman: MediumSeaGreen;
$c-apricot: #ff9933;
$c-metallo: aliceblue;
$c-tetsuo: #333300;

#app {
  text-align: center;
}

body {
  font-family: "EB Garamond", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  background-color: $c-apricot;
}

a {
  color: $c-tetsuo;

  &:visited {
    color: $c-tetsuo;
  }
}

.footer {
  margin-top: 20px;
  font-style: italic;
}

@media (min-width: 400px) {
  #app {
    margin: auto;
    width: 400px;
  }
}
</style>
