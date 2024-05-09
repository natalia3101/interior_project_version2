<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- <script>
// import MainPage from './pages/MainPage.vue'

// import BlogPage from './pages/BlogPage.vue'

// import BlogDetailsPage from './pages/BlogDetailsPage.vue'

export default {
  name: 'App',
  components: {
    // MainPage,
    // BlogPage,
    // BlogDetailsPage
  }
}
</script> -->

<style lang="scss">
@import "../scss/vars";
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

a:visited {
    color: inherit;
}

body {
    background-color: rgb(255, 255, 255);
    font-family: 'Jost Font', sans-serif;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    /* 600 это половина контентной части */
}
</style>