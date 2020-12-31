<template>
  <div class="home">
    <HomeInfoComponent />
    <HomeGraphComponent />
    <HomeRaspberryComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeGraphComponent from "@/components/home/HomeGraphComponent.vue";
import HomeInfoComponent from "@/components/home/HomeInfoComponent.vue";
import HomeRaspberryComponent from "@/components/home/HomeRaspberryComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeInfoComponent,
    HomeGraphComponent,
    HomeRaspberryComponent
  }
});
</script>
