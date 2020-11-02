<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>更多知识，尽在CSDN ! 博主：mygoes</h2>
    <Swiper />
  </div>
</template>

<script>
import Swiper from "./components/swiper.vue";

export default {
  name: "App",
  components: {
    Swiper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
