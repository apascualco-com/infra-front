<template>
  <div class="monitoring">
    <KubernetesMonitoring />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesMonitoring from "@/components/monitoring/KubernetesMonitoring.vue";

export default defineComponent({
  name: "Monitoring",
  components: {
    KubernetesMonitoring
  }
});
</script>
