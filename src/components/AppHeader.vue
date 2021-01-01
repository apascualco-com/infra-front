<template>
  <div class="AppHeader">
    <div class="HeaderText">
      <p>- PROJECT INFRASTRUCTURE -</p>
      <p>APASCUALCO.COM</p>
    </div>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/nodes">Nodes</router-link> |
    <router-link to="/pods">Pods</router-link> |
    <router-link to="/metallb">Metallb</router-link> |
    <router-link to="/monitoring">Monitoring</router-link> |
    <router-link to="/certmanager">Cert-manager</router-link> |
    <router-link to="/wordpress">Wordpress</router-link> |
    <router-link to="/infra">Infra</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader"
});
</script>

<style scoped lang="scss">
.AppHeader {
  background-image: url("../assets/header.png");
  width: 100%;
  height: 256px;
  border-bottom: 2px solid black;
}
.HeaderText {
  padding-top: 20px;
  color: #c5c7c8;
  font-size: 40px;
  font-weight: bold;
}
#nav {
  font-size: 20px;
  padding: 10px;
  border-bottom: 2px solid black;
  background-color: #c5c7c8;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #2f855e;
    }
  }
}
</style>
