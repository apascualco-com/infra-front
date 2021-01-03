<template>
  <div class="KubernetesPods">
    <div>
      <h1 class="KubernetesPodsTitle TwoColumnsGrid">
        <div>Pods by namespace</div>
        <div>
          <label>
            <select
              v-model="currentNamespace"
              @change="updateNamespace(currentNamespace)"
              class="NamespaceSelect"
            >
              <option value="" selected="selected">all</option>
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
      <h1 class="KubernetesPodsTitle">
        Lista de pods (Real time) en el namespace {{ currentNamespace }}
      </h1>
      <div class="PodConsoleHeader">user@host:/opt/kubernetes</div>
      <div class="PodConsolePrompt">
        user@host # kubectl get pods {{ kubectlCommand }}
      </div>
      <div class="NodesConsole NodesConsoleGrid PodFontWeightBold">
        <div>NAMESPACE</div>
        <div>NAME</div>
        <div>READY</div>
        <div>STATUS</div>
        <div>RESTARTS</div>
        <div>UPTIME</div>
        <div>HOST IP</div>
        <div>POD IP</div>
      </div>
      <div
        class="NodesConsole NodesConsoleGrid"
        v-for="item in clusterPods"
        :key="item"
      >
        <div>
          {{ item.namespace !== "" ? item.namespace : "-" }}
        </div>
        <div>
          {{ item.name !== "" ? item.name : "-" }}
        </div>
        <div>
          {{ item.ready !== "" ? item.ready : "-" }}
        </div>
        <div>
          {{ item.status !== "" ? item.status : "-" }}
        </div>
        <div>
          {{ item.restarts !== "" ? item.restarts : "-" }}
        </div>
        <div>
          {{ item.date !== "" ? item.date : "-" }}
        </div>
        <div>
          {{ item["host-ip"] !== "" ? item["host-ip"] : "-" }}
        </div>
        <div>
          {{ item["pod-ip"] !== "" ? item["pod-ip"] : "-" }}
        </div>
      </div>
      <div class="PodConsolePrompt">user@host # |</div>
      <div class="PodConsoleBottom"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {PodService} from "~/pages/pods/PodService";

export default Vue.extend({
  name: "KubernetesPods",
  data() {
    return {
      namespaces: [],
      currentNamespace: "--all-namespaces",
      kubectlCommand: "",
      clusterPods: []
    };
  },
  async mounted() {
    this.namespaces = await this.getClusterNamespaces();
    this.clusterPods = await this.getClusterPods("");
  },
  methods: {
    async getClusterNamespaces() {
      return await PodService.namespaces().then(clusterResponse => {
        return clusterResponse.data;
      });
    },
    getClusterPods(namespace) {
      return PodService.list(namespace).then(clusterResponse => {
        return clusterResponse.data;
      });
    },
    async updateNamespace(namespace) {
      this.currentNamespace =
        namespace === "" || namespace === undefined ? "all" : namespace;
      this.kubectlCommand =
        namespace === "" || namespace === undefined
          ? "--all-namespaces"
          : "-n " + namespace;
      this.clusterPods = await this.getClusterPods(namespace);
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
.NodesConsole {
  font-size: 14px;
  padding-left: 10px;
  text-align: left;
  background-color: #2c3e50;
  color: #c5c7c8;
  padding-bottom: 5px;
  border-left: 3px solid #c5c7c8;
  border-right: 3px solid #c5c7c8;
}
.NodesConsoleGrid {
  display: grid;
  grid-template-columns: 120px 320px 60px 70px 80px 70px 110px 110px;
}
.PodFontWeightBold {
  font-weight: bold;
}
.PodConsoleBottom {
  border-bottom: 3px solid #c5c7c8;
}
</style>
