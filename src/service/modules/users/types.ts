interface UserNameReq {
  userName?: string
}

interface UserListRes {
  id: number
  userName: string
  userPassword: string
  email: string
  phone: string
  userType: string
  tenantId: number
  state: number
  tenantCode?: any
  queueName?: any
  alertGroup?: any
  queue: string
  createTime: string
  updateTime: string
}

export { UserListRes, UserNameReq }
