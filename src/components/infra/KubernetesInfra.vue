<template>
  <div class="KubernetesInfra">
    <div>
      <h1 class="KubernetesInfraTitle">Infra</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesInfra"
});
</script>

<style scoped>
.KubernetesInfra {
  margin: 5px;
  font-size: 10px;
}
.KubernetesInfraTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
