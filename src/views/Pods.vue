<template>
  <div class="pods">
    <KubernetesPods />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesPods from "@/components/pods/KubernetesPods.vue";

export default defineComponent({
  name: "Pods",
  components: {
    KubernetesPods
  }
});
</script>
