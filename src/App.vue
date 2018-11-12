<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=EB+Garamond");

#app {
  font-family: "EB Garamond", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: whitesmoke;
  text-decoration: none;

  &:visited {
    color: whitesmoke;
  }
}
</style>
