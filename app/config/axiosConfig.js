import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(function (response) {
  return response
})

class AxiosFetch {
  get(uri, params = {}) {
    return axiosClient.get(uri, params)
  }
  post(uri, body = {}) {
    return axiosClient.post(uri, body)
  }
  put(uri, body = {}, config = {}) {
    return axiosClient.put(uri, body, config)
  }
  delete(uri, body = {}) {
    return axiosClient.delete(uri, body)
  }
  patch(uri, body = {}) {
    return axiosClient.patch(uri, body)
  }
}

const appAxios = new AxiosFetch()

export default appAxios
