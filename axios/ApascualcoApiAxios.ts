import axios, { AxiosInstance } from "axios";

class ApascualcoApiAxios {
  private static instance: AxiosInstance;
  private constructor() {
    console.log("private");
  }

  public static getInstance(): AxiosInstance {
    if (!ApascualcoApiAxios.instance) {
      ApascualcoApiAxios.instance = axios.create({
        baseURL: "https://api.apascualco.com",
        headers: {
          "Content-type": "application/json"
        }
      });
    }
    return ApascualcoApiAxios.instance;
  }
}

export { ApascualcoApiAxios };
