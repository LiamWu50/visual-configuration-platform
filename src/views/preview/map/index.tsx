import CesiumSceneHelper from '@/helper/cesium-scene-helper'
import { useCesiumSourceLoader } from '@/hooks/use-cesium-source-loader'
import { usePreviewStore } from '@/store/preview'

import styles from './index.module.scss'

const Map = defineComponent({
  name: 'the-map',
  setup() {
    const mapViewer = ref()
    const previewStore = usePreviewStore()
    const { mapForPreview } = storeToRefs(previewStore)
    const { loadCesiumSource } = useCesiumSourceLoader(mapViewer)

    onMounted(() => {
      mapViewer.value = CesiumSceneHelper.initViewer('mapContainer')
      loadCesiumSource(mapForPreview)
    })
  },
  render() {
    return (
      <div class={styles.container}>
        <div id='mapContainer' class={styles.map}></div>
      </div>
    )
  }
})
export default Map
