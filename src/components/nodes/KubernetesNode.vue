<template>
  <div class="KubernetesNode">
    <div>
      <h1 class="NodesTitle">Lista de nodos (Real time)</h1>
      <div class="NodesConsoleHeader">user@host:/opt/kubernetes</div>
      <div class="NodesConsolePrompt">user@host # kubectl get nodes</div>
      <div class="NodesConsole NodesConsoleGrid NodeFontWeightBold">
        <div>NAME</div>
        <div>STATUS</div>
        <div>ROLES</div>
        <div>UPTIME</div>
        <div>VERSION</div>
        <div>OS</div>
        <div>KERNEL-VERSION</div>
        <div>CONTAINER-RUNTIME</div>
        <div>ARCHITECTURE</div>
      </div>
      <div
        class="NodesConsole NodesConsoleGrid"
        v-for="item in clusterNodes"
        :key="item"
      >
        <div>
          {{ item.name !== "" ? item.name : "-" }}
        </div>
        <div>
          {{ item.status !== "" ? item.status : "-" }}
        </div>
        <div>
          {{ item.roles !== "" ? item.roles : "-" }}
        </div>
        <div>
          {{ item.date !== "" ? item.date : "-" }}
        </div>
        <div>
          {{ item.version !== "" ? item.version : "-" }}
        </div>
        <div>
          {{ item.os !== "" ? item.os : "-" }}
        </div>
        <div>
          {{ item["kernel-version"] !== "" ? item["kernel-version"] : "-" }}
        </div>
        <div>
          {{
            item["container-runtime"] !== "" ? item["container-runtime"] : "-"
          }}
        </div>
        <div>
          {{ item.architecture !== "" ? item.architecture : "-" }}
        </div>
      </div>
      <div class="NodesConsolePrompt">user@host # |</div>
      <div class="NodesConsoleBottom"></div>
    </div>
    <div>
      <h1 class="NodesTitle">¿ Como he montado mis nodos ? (Repositorio)</h1>
      <div class="NodeText">
        url:
        <a
          href="https://github.com/apascualco-com/kubernetes-on-arm"
          target="_blank"
          >https://github.com/apascualco-com/kubernetes-on-arm</a
        >
      </div>
      <div class="NodeText">
        clone: [ git clone
        https://github.com/apascualco-com/kubernetes-on-arm.git ]
      </div>
      <div></div>
      <div class="GithubHeader">
        Github repository: {{ githubConfig.repository.toUpperCase() }}
        {{ githubTree.key }}
      </div>
      <div
        class="GithubContent GithubContentGrid"
        v-on:click="githubUpdateByPath()"
        v-if="githubTree.key.length > 2"
      >
        <div>
          <img
            src="@/assets/icons/folder.png"
            class="GithubFolder"
            alt="folder-icon"
          />
        </div>
        <div>
          ...
        </div>
      </div>
      <div
        class="GithubContent"
        v-for="node in githubTree[githubTree.key]"
        :key="node"
      >
        <div
          class="GithubContentGrid"
          v-on:click="updateGithubTree(node, githubTree.key)"
        >
          <div>
            <img
              v-if="node.type === 'tree'"
              src="@/assets/icons/folder.png"
              :key="node.type"
              class="GithubFolder"
              alt="folder-icon"
            />
            <img
              v-else
              src="@/assets/icons/file.png"
              :key="node.type"
              class="GithubFile"
              alt="file-icon"
            />
          </div>
          <div>
            {{ node.name }}
          </div>
        </div>
      </div>
      <div class="GithubContentBottom"></div>
    </div>
    <div>
      <div class="GithubHeader">{{ githubFileView.name.toUpperCase() }}</div>
      <div class="CurrentFileContent">
        <pre> {{ githubFileView.file }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { NodeListService } from "./NodeListService";
import { GitHubService } from "@/components/nodes/GitHubService";

export default {
  name: "KubernetesNode",
  data() {
    return {
      clusterNodes: [],
      githubConfig: {
        user: "apascualco-com",
        repository: "kubernetes-on-arm",
        branch: "master"
      },
      githubFileView: {
        name: "README.md",
        file: {}
      },
      githubTree: {
        key: "."
      },
      breadcrumbs: [],
      tree: []
    };
  },
  async mounted() {
    this.clusterNodes = await this.getClusterNodes();
    this.githubTree["."] = await this.initGithubTree(
      this.githubConfig.user,
      this.githubConfig.repository,
      this.githubConfig.branch
    );
  },
  methods: {
    getClusterNodes() {
      return NodeListService.list().then(clusterResponse => {
        return clusterResponse.data;
      });
    },
    async initGithubTree(user, repository, branch) {
      const githubResponse = await GitHubService.repoInfoTree(
        user,
        repository,
        branch
      ).then(githubResponse => {
        return githubResponse;
      });
      const nodes = [];
      for (const githubFile of githubResponse.tree) {
        if (
          githubFile.type !== "tree" &&
          "readme.md".toLowerCase() === githubFile.path?.toLowerCase()
        ) {
          this.githubFileView.file = await GitHubService.repoFile(
            githubFile.url
          ).then(response => {
            return response.data;
          });
        }
        nodes.push({
          name: githubFile.path,
          type: githubFile.type,
          url: githubFile.url
        });
      }
      return nodes;
    },
    updateGithubTree(node, path) {
      if (node.type === "tree") {
        this.updateFolder(node, path);
      } else {
        this.updateFile(node);
      }
    },
    async updateFile(file) {
      this.githubFileView.name = file.name;
      this.githubFileView.file = await GitHubService.repoFile(file.url).then(
        response => {
          return response.data;
        }
      );
    },
    async updateFolder(folder, path) {
      const key = path + "/" + folder.name;
      if (this.githubTree[key] === undefined) {
        const tree = await GitHubService.repoFile(folder.url).then(response => {
          return response.data?.tree;
        });
        const nodes = [];
        for (const entry of tree) {
          nodes.push({
            name: entry.path,
            type: entry.type,
            url: entry.url,
            parent: folder
          });
        }
        this.githubTree[key] = nodes;
      }
      this.githubTree.key = key;
    },
    getGithubTree: async function(tree) {
      for (const file of tree) {
        if (file.type === "tree") {
          let childTree;
          await GitHubService.repoFolder(file.url).then(response => {
            childTree = response.data;
            file["child"] = childTree.tree;
            for (const child of childTree.tree) {
              child["parent"] = file;
            }
            this.getGithubTree(childTree.tree);
          });
        }
      }
    },
    githubUpdateByPath() {
      const lastIndexOf = this.githubTree.key.lastIndexOf("/");
      this.githubTree.key = this.githubTree.key.substr(0, lastIndexOf);
    }
  }
};
</script>

<style scoped lang="scss">
a {
  color: inherit;
}
a:hover {
  font-weight: bold;
}
.KubernetesNode {
  font-size: 10px;
  margin: auto;
  width: 990px;
}
.NodesTitle {
  text-align: left;
  color: #c5c7c8;
  padding-left: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.NodeSubtitle {
  text-align: left;
  color: #c5c7c8;
}
.NodeText {
  font-size: 16px;
  text-align: left;
  color: #c5c7c8;
  padding-bottom: 5px;
}
.NodesConsoleHeader {
  border-radius: 30px 5px 0 0;
  font-size: 18px;
  font-weight: bold;
  background-color: #c5c7c8;
  padding: 3px;
  color: #2c3e50;
}
.NodesConsolePrompt {
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
.NodeFontWeightBold {
  font-weight: bold;
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
  grid-template-columns: 75px 75px 75px 75px 85px 145px 145px 175px 100px;
}

.NodesConsoleBottom {
  border-bottom: 3px solid #c5c7c8;
}
.GithubHeader {
  margin-top: 20px;
  border-radius: 0 30px 0 0;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  background-color: #c5c7c8;
  padding: 3px 3px 3px 10px;
  color: #2c3e50;
  border: 3px solid #000;
}
.GithubContent {
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
  text-align: left;
  background-color: #c5c7c8;
  color: #2c3e50;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #000;
  border-left: 3px solid #000;
  border-right: 3px solid #000;
}
.GithubContent:hover {
  background-color: #2c3e50;
  color: #c5c7c8;
}
.GithubContentGrid {
  display: grid;
  grid-template-columns: 50px 700px;
}
.GithubContentBottom {
  border-bottom: 3px solid #000;
}
.GithubFile {
  height: 24px;
}

.CurrentFileHeader {
  border-radius: 0 30px 0 0;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  background-color: #c5c7c8;
  padding: 3px 3px 3px 10px;
  color: #2c3e50;
  border: 3px solid #000;
}
.CurrentFileContent {
  font-size: 14px;
  padding-left: 10px;
  font-weight: bold;
  text-align: left;
  background-color: #c5c7c8;
  color: #2c3e50;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #000;
  border-left: 3px solid #000;
  border-right: 3px solid #000;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
