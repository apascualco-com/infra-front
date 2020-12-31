<template>
  <div class="KubernetesMonitoring">
    <div>
      <h1 class="KubernetesMonitoringTitle">Monitoring</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesMonitoring"
});
</script>

<style scoped>
.KubernetesMonitoring {
  margin: 5px;
  font-size: 10px;
}
.KubernetesMonitoringTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
