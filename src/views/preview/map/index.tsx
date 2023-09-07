import CesiumSceneHelper from '@/helper/cesium-scene-helper'
import { usePreviewStore } from '@/store/preview'

import styles from './index.module.scss'
import { useSourceLoader } from './use-source-loader'

const Map = defineComponent({
  name: 'the-map',
  setup() {
    const mapViewer = ref()
    const previewStore = usePreviewStore()
    const { mapForPreview } = storeToRefs(previewStore)
    console.log('mapForPreview', mapForPreview.value)
    const { loadTypeSource } = useSourceLoader(mapViewer)

    onMounted(() => {
      mapViewer.value = CesiumSceneHelper.initViewer('mapContainer')
      loadTypeSource(mapForPreview)
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
