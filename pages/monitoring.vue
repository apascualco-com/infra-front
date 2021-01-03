<template>
  <div class="Monitoring">
    <div>
      <h1 class="MonitoringTitle">Monitoring</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "KubernetesMonitoring"
});
</script>

<style scoped>
.Monitoring {
  margin: 5px;
  font-size: 10px;
}
.MonitoringTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
