import * as Cesium from 'cesium'

import CesiumSceneHelper from '@/helper/cesium-scene-helper'
import { usePreviewStore } from '@/store/preview'

import styles from './index.module.scss'

const Map = defineComponent({
  name: 'the-map',
  setup() {
    const mapViewer = ref<Cesium.Viewer | null>(null)
    const previewStore = usePreviewStore()
    const { mapForPreview } = storeToRefs(previewStore)
    console.log('mapForPreview', mapForPreview)

    onMounted(() => {
      mapViewer.value = CesiumSceneHelper.initViewer('mapContainer')
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
