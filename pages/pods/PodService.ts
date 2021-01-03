import { ApascualcoApiAxios } from "@/axios/ApascualcoApiAxios";

export class PodService {
  static namespaces() {
    return ApascualcoApiAxios.getInstance().get("/pod/namespace/lists");
  }
  static list(namespace: string) {
    if (namespace === "") {
      return ApascualcoApiAxios.getInstance().get("/pod/lists");
    } else {
      return ApascualcoApiAxios.getInstance().get("/pod/lists/" + namespace);
    }
  }
}
