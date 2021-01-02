<template>
  <div class="HomeGraphComponent">
    <div>
      <h1 class="HomeGraphComponentTitle">Graph</h1>
      <div class="NormalText">
        Esta sección contendrá algunas metricas de rendimeinto del cluster
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeGraphComponent"
});
</script>

<style scoped>
.HomeGraphComponent {
  font-size: 10px;
  margin: auto;
  width: 990px;
}
.HomeGraphComponentTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
.NormalText {
  font-size: 16px;
  text-align: left;
  color: #c5c7c8;
  padding-bottom: 5px;
}
</style>
