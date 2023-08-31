import { usePreviewStore } from '@/store/preview'

import styles from './index.module.scss'

const Preview = defineComponent({
  name: 'chart',
  setup() {
    const previewStore = usePreviewStore()
    const { chartForPreview } = storeToRefs(previewStore)

    const canvasStyle = chartForPreview.value?.canvasStyle
    const containerStyle = {
      width: `${canvasStyle?.width}px`,
      height: `${canvasStyle?.height}px`
    }

    return {
      containerStyle
    }
  },
  render() {
    return (
      <div class={styles.container} style={this.containerStyle}>
        three
      </div>
    )
  }
})
export default Preview
