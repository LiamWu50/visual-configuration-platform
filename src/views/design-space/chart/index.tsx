import { NTabPane, NTabs } from 'naive-ui'

import Configuration from './configuration'
import Container from './container'
import styles from './index.module.scss'
import Layers from './layers'
import Primitives from './primitives'

export default defineComponent({
  name: 'Chart',
  components: { Container, Layers, Primitives, Configuration },
  render() {
    return (
      <div class={styles.chart}>
        <div class={styles.sider}>
          <NTabs type='line' animated bar-width={0}>
            <NTabPane name='primitives' tab='组件'>
              <Primitives />
            </NTabPane>
            <NTabPane name='layers' tab='图层'>
              <Layers />
            </NTabPane>
          </NTabs>
        </div>
        <div id='editorContainer' class={styles.container}>
          <Container />
        </div>
        <div class={styles.config}>
          <Configuration />
        </div>
      </div>
    )
  }
})
