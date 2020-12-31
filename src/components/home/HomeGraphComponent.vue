<template>
  <div class="HomeGraphComponent">
    <div>
      <h1 class="HomeGraphComponentTitle">Graph</h1>
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
  margin: 5px;
  font-size: 10px;
}
.HomeGraphComponentTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
