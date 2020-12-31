import { githubApiAxios } from "@/axios/HttpAxios";

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
    await githubApiAxios
      .get(url)
      .then(response => (result["tree"] = response.data?.tree));
    return result;
  }

  private static branchInfo(user: string, reponame: string, branch: string) {
    let response = null;
    return githubApiAxios
      .get("/" + user + "/" + reponame + "/branches/" + branch)
      .then(r => (response = r.data));
    return response;
  }

  static repoFile(file: string) {
    const header = {
      headers: {
        Accept: "application/vnd.github.v3.raw"
      }
    };
    const url = file?.replace("https://api.github.com/repos/", "");
    return githubApiAxios(url, header);
  }

  static repoFolder(folder: string) {
    const url = folder?.replace("https://api.github.com/repos/", "");
    return githubApiAxios(url);
  }
}
