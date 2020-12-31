<template>
  <div class="KubernetesWordpress">
    <div>
      <h1 class="KubernetesWordpressTitle">Wordpress</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesWordpress"
});
</script>

<style scoped>
.KubernetesWordpress {
  margin: 5px;
  font-size: 10px;
}
.KubernetesWordpressTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
