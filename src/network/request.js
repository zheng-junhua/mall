import axios from 'axios'

export function request(config){
  const instance = axios.create({
    // 该接口为假接口,真实接口请找coderwhy老师购买(微信号: coderwhy001)
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })

  return instance(config)
}