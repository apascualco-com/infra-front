<template>
  <div class="HomeInfoComponent">
    <div>
      <h1 class="HomeInfoComponentTitle">Info</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeInfoComponent"
});
</script>

<style scoped>
.HomeInfoComponent {
  margin: 5px;
  font-size: 10px;
}
.HomeInfoComponentTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
