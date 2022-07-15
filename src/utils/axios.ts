/**
 * author: zyj
 * date: 2022-07-15
 * description: axios package
 */

import axios from 'axios'
import { useUserInfo } from '@/store/userinfo'

const store = useUserInfo()
const config = {
  baseURL: 'http://localhost:8099/v1',
  timeout: 60 * 1000
}

// create a new axios instance
const instance = axios.create(config);

// request interceptor
instance.interceptors.request.use((config: any) => {
  // define a custom header
  config.headers['Content-Type'] = 'application/json';
  // if exist token, add to header
  store.token = config.headers['Authorization'] = store.token
  store.uid = config.headers['userId'] = store.uid

  return config;
})

// response interceptor
instance.interceptors.response.use((response: any) => {
  if (response.data.code == 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
})

export { }
export default instance