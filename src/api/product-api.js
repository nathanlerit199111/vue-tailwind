import http from "@/utils/http/axios.js"
const API_PREFIX = "/products"

export default {
  async getProduct() {
    const url = API_PREFIX

    const RESPONSE = await http.get(url)
    return RESPONSE ?? null
  }
}
