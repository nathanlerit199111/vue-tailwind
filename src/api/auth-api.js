import http from "@/utils/http/axios.js"
const API_PREFIX = "/auth/login"

export default {
  async getToken(params) {
    const url = API_PREFIX

    const postData = {
      username: params.username,
      password: params.password
    }

    const response = await http.post(url, postData)
    return response ?? null
  }
}
