import { ApascualcoApiAxios } from "@/axios/ApascualcoApiAxios";

export class NodeListService {
  static list() {
    return ApascualcoApiAxios.getInstance().get("/node/lists");
  }
}
