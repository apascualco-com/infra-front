<template>
  <div class="HomeRaspberryComponent">
    <div>
      <h1 class="HomeRaspberryComponentTitle">Raspberry</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeRaspberryComponent"
});
</script>

<style scoped>
.HomeRaspberryComponent {
  margin: 5px;
  font-size: 10px;
}
.HomeRaspberryComponentTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
</style>
