<template>
  <div id="app">
    <LayoutPage />
  </div>
</template>
<script>
import LayoutPage from "./views/layout.vue";
export default {
  name: "App",
  components: {
    LayoutPage,
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
}
</style>
