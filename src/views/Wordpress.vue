<template>
  <div class="monitoring">
    <KubernetesWordpress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesWordpress from "@/components/wordpress/KubernetesWordpress.vue";

export default defineComponent({
  name: "Wordpress",
  components: {
    KubernetesWordpress
  }
});
</script>
