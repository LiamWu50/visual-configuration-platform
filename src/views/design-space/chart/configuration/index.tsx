import { NTabPane, NTabs } from 'naive-ui'

import styles from './index.module.scss'
import StyleSettings from './style-settings'

export default defineComponent({
  name: 'Configuration',
  setup() {
    return () => (
      <div class={styles.chart}>
        <NTabs type='line' animated bar-width={0} default-value='style'>
          <NTabPane name='style' tab='样式'>
            <StyleSettings />
          </NTabPane>
          <NTabPane name='data' tab='数据'>
            这是数据配置
          </NTabPane>
          <NTabPane name='event' tab='事件'>
            这是事件配置
          </NTabPane>
        </NTabs>
      </div>
    )
  }
})
