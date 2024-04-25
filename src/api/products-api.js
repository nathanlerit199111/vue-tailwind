import http from "@/utils/http/axios.js"
const API_PREFIX = "/products"

export default {
  async getProduct() {
    const url = API_PREFIX

    const response = await http.get(url)
    return response ?? null
  }
}
