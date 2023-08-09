import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
// import { useUserStore } from '@/store/user/user'
import _ from 'lodash'

import router from '@/router'
import utils from '@/utils'

// const userStore = useUserStore()

/**
 * @description Log and display errors
 * @param {Error} error Error object
 */
const handleError = (res: AxiosResponse<any, any>) => {
  // Print to console
  if (import.meta.env.MODE === 'development') {
    utils.log.error(res)
  }
  window.$message.error(res.data.msg)
}

const baseRequestConfig: AxiosRequestConfig = {
  baseURL:
    import.meta.env.MODE === 'development'
      ? '/dolphinscheduler'
      : import.meta.env.VITE_APP_PROD_WEB_URL + '/',
  timeout: 20000
}

const service = axios.create(baseRequestConfig)

const err = (err: AxiosError): Promise<AxiosError> => {
  if (err.response?.status === 401 || err.response?.status === 504) {
    // TODO 清空userStore
    // userStore.setSessionId('')
    // userStore.setSecurityConfigType('')
    // userStore.setUserInfo({})
    router.push({ path: '/login' })
  }

  return Promise.reject(err)
}

service.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  // TODO 配置请求头参数
  // config.headers = config.headers || {}
  // config.headers.sessionId = userStore.getSessionId

  return config
}, err)

// The response to intercept
service.interceptors.response.use((res: AxiosResponse) => {
  // No code will be processed
  if (res.data.code === undefined) {
    return res.data
  }

  switch (res.data.code) {
    case 0:
      return res.data.data
    default:
      handleError(res)
      throw new Error()
  }
}, err)

export { service as axios }
