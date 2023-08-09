import * as Cesium from 'cesium'

import CesiumSceneHelper from '@/helper/cesium-scene-helper'

import styles from './index.module.scss'
import ResourceTree from './resource-tree'
import { viewerKey } from './types'

export default defineComponent({
  name: 'CesiumMap',
  emits: ['toChartEdirtor'],
  setup(props, ctx) {
    const loaded = ref(false)
    const mapViewer = ref<Cesium.Viewer | null>(null)
    provide(viewerKey, mapViewer)

    onMounted(() => {
      mapViewer.value = CesiumSceneHelper.initViewer('mapContainer')
      loaded.value = true
    })

    /**
     * 去到图表编辑界面
     */
    const handelToChartEditor = () => {
      ctx.emit('toChartEdirtor')
    }

    return () => (
      <div class={styles.map}>
        {loaded.value ? (
          <ResourceTree onToChartEdirtor={handelToChartEditor} />
        ) : null}
        <div id='mapContainer' class={styles.container}></div>
      </div>
    )
  }
})
