import axios from "axios";

const githubApiAxios = axios.create({
  baseURL: "https://api.github.com/repos",
  headers: {
    "Content-type": "application/json"
  }
});

const apascualcoApiAxios = axios.create({
  baseURL: "https://api.apascualco.com",
  headers: {
    "Content-type": "application/json"
  }
});

export { githubApiAxios, apascualcoApiAxios };
