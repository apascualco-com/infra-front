import axios, { AxiosInstance } from "axios";

class GitHubAxios {
  private static instance: AxiosInstance;
  private constructor() {
    console.log("private");
  }

  public static getInstance(): AxiosInstance {
    if (!GitHubAxios.instance) {
      GitHubAxios.instance = axios.create({
        baseURL: "https://api.github.com/repos",
        headers: {
          "Content-type": "application/json"
        }
      });
    }
    return GitHubAxios.instance;
  }
}

export { GitHubAxios };
