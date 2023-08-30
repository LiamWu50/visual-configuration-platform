import { FilterAltOutlined } from '@vicons/material'
import { NIcon } from 'naive-ui'

import styles from './filters.module.scss'

const Filters = defineComponent({
  name: 'filters',
  setup() {
    return {}
  },
  render() {
    return (
      <div class={styles.filters}>
        <div class={styles['filters-trigger']}>
          <NIcon size={18} style='margin-right: 4px;'>
            <FilterAltOutlined />
          </NIcon>
          <span>更新时间</span>
        </div>
      </div>
    )
  }
})
export default Filters
