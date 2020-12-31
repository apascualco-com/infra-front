import { apascualcoApiAxios } from "@/axios/HttpAxios";

export class NodeListService {
  static list() {
    return apascualcoApiAxios.get("/node/lists");
  }
}
