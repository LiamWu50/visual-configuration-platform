import { useMessage } from 'naive-ui'

import styles from './index.module.scss'

const login = defineComponent({
  name: 'login',
  setup() {
    window.$message = useMessage()

    return {}
  },
  render() {
    return <div>登录页面</div>
  }
})

export default login
