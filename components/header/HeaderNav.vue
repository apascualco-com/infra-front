<template>
  <div id="nav">
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/nodes">Nodes</NuxtLink> |
    <NuxtLink to="/pods">Pods</NuxtLink> |
    <NuxtLink to="/metallb">Metallb</NuxtLink> |
    <NuxtLink to="/monitoring">Monitoring</NuxtLink> |
    <NuxtLink to="/certmanager">Cert-manager</NuxtLink> |
    <NuxtLink to="/wordpress">Wordpress</NuxtLink> |
    <NuxtLink to="/infra">Infra</NuxtLink> |
  </div>
</template>

<style scoped lang="scss">
#nav {
  display: block;
  font-size: 20px;
  padding: 10px;
  border-bottom: 2px solid black;
  background-color: #c5c7c8;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.NuxtLink-exact-active {
       color: #2F855E;
     }
  }
}
</style>
