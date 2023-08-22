import { NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui'

import styles from './index.module.scss'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    return {
      options: [
        {
          label: '操作 1',
          key: 1
        },
        {
          label: '操作 2',
          key: 2
        }
      ]
    }
  },
  render() {
    return (
      <NBreadcrumb style='marginLeft: 12px'>
        <NBreadcrumbItem>草稿箱</NBreadcrumbItem>
        <NBreadcrumbItem>
          <NDropdown options={this.options}>
            <div class={styles.trigger}>测试大屏可视化系统</div>
          </NDropdown>
        </NBreadcrumbItem>
      </NBreadcrumb>
    )
  }
})
