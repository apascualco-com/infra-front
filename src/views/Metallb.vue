<template>
  <div class="metallb">
    <KubernetesMetallb />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesMetallb from "@/components/metallb/KubernetesMetallb.vue";

export default defineComponent({
  name: "Metallb",
  components: {
    KubernetesMetallb
  }
});
</script>
