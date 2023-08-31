import * as Cesium from 'cesium'

import CesiumSceneHelper from '@/helper/cesium-scene-helper'

import styles from './index.module.scss'
import ResourceTree from './resource-tree'
import { viewerKey } from './types'

export default defineComponent({
  name: 'CesiumMap',
  setup() {
    const loaded = ref(false)
    const mapViewer = ref<Cesium.Viewer | null>(null)
    provide(viewerKey, mapViewer)

    onMounted(() => {
      mapViewer.value = CesiumSceneHelper.initViewer('mapContainer')
      loaded.value = true
    })

    return () => (
      <div class={styles.map}>
        {loaded.value ? <ResourceTree /> : null}
        <div id='mapContainer' class={styles.container}></div>
      </div>
    )
  }
})
