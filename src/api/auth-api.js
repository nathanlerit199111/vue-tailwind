import http from "@/utils/http/axios.js"
const API_PREFIX = "/auth/login"

export default {
  async getToken(params) {
    const url = API_PREFIX

    const POSTDATA = {
      username: params.username,
      password: params.password
    }

    const RESPONSE = await http.post(url, POSTDATA)
    return RESPONSE ?? null
  },


  async destroyToken() {
    const url = API_PREFIX

    const RESPONSE = await http.get(url)
    return RESPONSE ?? null
  }
}
