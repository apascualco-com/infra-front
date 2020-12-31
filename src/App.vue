<template>
  <AppHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "Home",
  components: {
    AppHeader
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
  background-color: #073642;
}
</style>
