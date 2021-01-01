<template>
  <div class="KubernetesPods">
    <div>
      <h1 class="KubernetesPodsTitle TwoColumnsGrid">
        <div>Pods by namespace</div>
        <div>
          <label>
            <select v-model="currentNamespace.name" class="NamespaceSelect">
              <option
                v-for="namespace in namespaces"
                v-bind:value="namespace.name"
                :key="namespace"
              >
                {{ namespace.name }}
              </option>
            </select>
          </label>
        </div>
      </h1>
    </div>
    <div>
      <h1 class="KubernetesPodsTitle">Lista de pods (Real time) {{ currentNamespace }}</h1>
      <div class="PodConsoleHeader">user@host:/opt/kubernetes</div>
      <div class="PodConsolePrompt">user@host # kubectl get pods {{ kubectlCommend }}</div>
      <div class="PodConsole PodConsoleGrid PodFontWeightBold">
        <div>NAMESPACE</div>
        <div>NAME</div>
        <div>READY</div>
        <div>STATUS</div>
        <div>RESTARTS</div>
        <div>AGE</div>
        <div>IP</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PodService } from "@/components/pods/PodService";

export default defineComponent({
  name: "KubernetesPods",
  data() {
    return {
      namespaces: [],
      currentNamespace: "",
      kubectlCommend: "--all-namespaces"
    };
  },
  async mounted() {
    this.namespaces = await this.methodTest();
  },
  methods: {
    async methodTest() {
      const clusterNamespaces = await PodService.namespaces().then(
        clusterResponse => {
          return clusterResponse.data;
        }
      );
      return clusterNamespaces;
    }
  }
});
</script>

<style scoped>
.KubernetesPods {
  font-size: 10px;
  margin: auto;
  width: 990px;
}
.KubernetesPodsTitle {
  text-align: left;
  color: white;
  padding-left: 5px;
}
.NamespaceSelect {
  font-size: 19px;
}
.TwoColumnsGrid {
  display: grid;
  grid-template-columns: 800px 100px;
}
.PodConsoleHeader {
  border-radius: 30px 5px 0 0;
  font-size: 18px;
  font-weight: bold;
  background-color: #c5c7c8;
  padding: 3px;
  color: #2c3e50;
}
.PodConsolePrompt {
  font-size: 16px;
  font-weight: bold;
  background-color: #2c3e50;
  color: #c5c7c8;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  border-left: 3px solid #c5c7c8;
  border-right: 3px solid #c5c7c8;
  text-align: left;
}
.PodConsole {
  font-size: 14px;
  padding-left: 10px;
  text-align: left;
  background-color: #2c3e50;
  color: #c5c7c8;
  padding-bottom: 5px;
  border-left: 3px solid #c5c7c8;
  border-right: 3px solid #c5c7c8;
}
.PodConsoleGrid {
  display: grid;
  grid-template-columns: 120px 120px 120px 120px 120px 120px 120px;
}
.PodFontWeightBold {
  font-weight: bold;
}
</style>
