import axios from 'axios'

export function request(config) {
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 1000000,
    params: config
  })
  instance1.interceptors.request.use(value => {
    return value
  }, error => {

  })
  instance1.interceptors.response.use(value => {
    return value.data
  }, error => {

  })
  return instance1(config)
}

export function request2(config) {
  const instance1 = axios.create({
    // baseURL: "http://157.122.54.189:9088",
    timeout: 1000000,
    params: config
  })
  instance1.interceptors.request.use(value => {
    return value
  }, error => {

  })
  instance1.interceptors.response.use(value => {
    return value.data
  }, error => {

  })
  return instance1(config)
}
