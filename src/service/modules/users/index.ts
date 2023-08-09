import { axios } from '@/service/service'

import { UserNameReq } from './types'

export function activateUser(data: UserNameReq): any {
  return axios({
    url: '/users/activate',
    method: 'post',
    data
  })
}
