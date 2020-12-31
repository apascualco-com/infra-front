<template>
  <div class="KubernetesPods">
    <div>
      <h1 class="KubernetesPodsTitle">Pods</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesPods"
});
</script>

<style scoped>
.KubernetesPods {
  margin: 5px;
  font-size: 10px;
}
.KubernetesPodsTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
