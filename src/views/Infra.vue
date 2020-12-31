<template>
  <div class="infra">
    <KubernetesInfra />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesInfra from "@/components/infra/KubernetesInfra.vue";

export default defineComponent({
  name: "Infra",
  components: {
    KubernetesInfra
  }
});
</script>
