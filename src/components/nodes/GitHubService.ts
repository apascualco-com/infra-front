import { GitHubAxios } from "@/axios/GitHubAxios";

export class GitHubService {
  static async repoInfoTree(user: string, reponame: string, branch: string) {
    const branchInfo = await this.branchInfo(user, reponame, branch);
    const branchCommit = branchInfo.commit;
    const author = branchCommit.commit.author;
    const url = branchCommit?.commit?.tree?.url?.replace(
      "https://api.github.com/repos/",
      ""
    );
    const result = {
      author: author,
      tree: null
    };
    await GitHubAxios.getInstance()
      .get(url)
      .then(response => (result["tree"] = response.data?.tree));
    return result;
  }

  private static branchInfo(user: string, reponame: string, branch: string) {
    return GitHubAxios.getInstance()
      .get("/" + user + "/" + reponame + "/branches/" + branch)
      .then(githubResponse => {
        return githubResponse.data;
      });
  }

  static repoFile(file: string) {
    const header = {
      headers: {
        Accept: "application/vnd.github.v3.raw"
      }
    };
    const url = file?.replace("https://api.github.com/repos/", "");
    return GitHubAxios.getInstance().get(url, header);
  }

  static repoFolder(folder: string) {
    const url = folder?.replace("https://api.github.com/repos/", "");
    return GitHubAxios.getInstance().get(url);
  }
}
