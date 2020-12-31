<template>
  <div class="KubernetesCertmanager">
    <div>
      <h1 class="KubernetesCertmanagerTitle">Cert-manager</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesCertmanager"
});
</script>

<style scoped>
.KubernetesCertmanager {
  margin: 5px;
  font-size: 10px;
}
.KubernetesCertmanagerTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
