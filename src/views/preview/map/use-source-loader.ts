import * as Cesium from 'cesium'
import type { Ref } from 'vue'

import CesiumSourceLoader from '@/helper/cesium-source-loader'

export function useSourceLoader(mapViewer: Ref<Cesium.Viewer>) {
  // 加载不同类型的地图资源
  const loadTypeSource = (dataSource: any) => {
    const cesiumSourceLoader = new CesiumSourceLoader(mapViewer!.value)
    dataSource.forEach((data: any) => {
      if (data.type === 'terrain') {
        // cesiumSourceLoader.addSource()
      }
    })
  }

  return {
    loadTypeSource
  }
}
