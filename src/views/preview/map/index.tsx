import { usePreviewStore } from '@/store/preview'

import styles from './index.module.scss'

const Map = defineComponent({
  name: 'the-map',
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
        map
      </div>
    )
  }
})
export default Map
