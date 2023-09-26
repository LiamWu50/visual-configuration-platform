import Scene from '@/components/Editor/Scene'
import { PrimitiveStyle } from '@/primitives/types'
import { usePreviewStore } from '@/store/preview'
import { getBoundBoxStyle, getStyle } from '@/utils/primitive'

import styles from './index.module.scss'

const Chart = defineComponent({
  name: 'chart',
  setup() {
    const sceneRef = ref()
    const previewStore = usePreviewStore()
    const { chartForPreview, canvasScene } = storeToRefs(previewStore)

    const styleFilterAttrs = ['width', 'height', 'top', 'left']

    const canvasStyle = chartForPreview.value?.canvasStyle
    const containerStyle = {
      width: `${canvasStyle?.width}px`,
      height: `${canvasStyle?.height}px`
    }

    // 获取每个组件的样式
    const getPrimitiveStyle = (style: PrimitiveStyle) =>
      getStyle(style, styleFilterAttrs)

    onMounted(() => {
      sceneRef.value.setEditorScene(canvasScene.value)
    })

    return {
      sceneRef,
      getBoundBoxStyle,
      containerStyle,
      primitives: chartForPreview.value?.primitives,
      getPrimitiveStyle
    }
  },
  render() {
    return (
      <div class={styles.container} style={this.containerStyle}>
        <Scene ref='sceneRef' />
        {this.primitives?.map((p) => (
          <div class={styles.content} style={this.getBoundBoxStyle(p.style)}>
            {h(resolveComponent(p.cName), {
              id: `primitive${p.id}`,
              class: styles.primitive,
              style: this.getPrimitiveStyle(p.style),
              dataSource: p
            })}
          </div>
        ))}
      </div>
    )
  }
})
export default Chart
