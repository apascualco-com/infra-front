<template>
  <div class="HomeRaspberryComponent">
    <div>
      <h1 class="HomeRaspberryComponentTitle">Raspberry</h1>
      <div class="NormalText">
        Información sobre la instalación y la administración de la Raspberry
      </div>
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
  font-size: 10px;
  margin: auto;
  width: 990px;
}
.HomeRaspberryComponentTitle {
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
