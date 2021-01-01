import { ApascualcoApiAxios } from "@/axios/ApascualcoApiAxios";

export class PodService {
  static namespaces() {
    return ApascualcoApiAxios.getInstance().get("/pod/namespace/lists");
  }
}
