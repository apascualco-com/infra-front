<template>
  <div class="nodes">
    <KubernetesNode />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesNode from "@/components/nodes/KubernetesNode.vue";

export default defineComponent({
  name: "Nodes",
  components: {
    KubernetesNode
  }
});
</script>
