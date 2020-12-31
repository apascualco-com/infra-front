<template>
  <div class="KubernetesMetallb">
    <div>
      <h1 class="KubernetesMetallbTitle">Metallb</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "KubernetesMetallb"
});
</script>

<style scoped>
.KubernetesMetallb {
  margin: 5px;
  font-size: 10px;
}
.KubernetesMetallbTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
