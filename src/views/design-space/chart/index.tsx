import Configuration from './configuration'
import Container from './container'
import styles from './index.module.scss'
import Layers from './layers'
import Primitives from './primitives'
import Scene from './scene'
import { Scene as IScene } from './scene/use-state'

export default defineComponent({
  name: 'Chart',
  setup() {
    const containerRef = ref<typeof Container>()
    const handleSetEditorScene = (val: IScene) => {
      containerRef.value?.setEditorScene(val)
    }

    return {
      containerRef,
      handleSetEditorScene
    }
  },
  render() {
    return (
      <div class={styles.chart}>
        <div class={styles.sider}>
          <NTabs type='line' animated barWidth={0} defaultValue='primitives'>
            <NTabPane name='primitives' tab='组件'>
              <Primitives />
            </NTabPane>
            <NTabPane name='layers' tab='图层'>
              <Layers />
            </NTabPane>
            <NTabPane name='scene' tab='场景'>
              <Scene onSetEditorScene={this.handleSetEditorScene} />
            </NTabPane>
          </NTabs>
        </div>
        <div class={styles.container}>
          <Container ref='containerRef' />
        </div>
        <div class={styles.config}>
          <Configuration />
        </div>
      </div>
    )
  }
})
