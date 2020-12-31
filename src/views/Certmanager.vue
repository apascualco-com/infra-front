<template>
  <div class="certmanager">
    <KubernetesCertmanager />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KubernetesCertmanager from "@/components/certmanager/KubernetesCertmanager.vue";

export default defineComponent({
  name: "Certmanager",
  components: {
    KubernetesCertmanager
  }
});
</script>
