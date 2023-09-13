import * as Cesium from 'cesium'
import type { Ref } from 'vue'

import CesiumSourceLoader from '@/helper/cesium-source-loader'

export function useCesiumSourceLoader(mapViewer: Ref<Cesium.Viewer>) {
  // 加载Cesium不同类型的地图资源
  const loadCesiumSource = (dataSource: any) => {
    const cesiumSourceLoader = new CesiumSourceLoader(mapViewer!.value)
    dataSource.forEach((data: any) => {
      Object.values(data.value).forEach((val) => {
        cesiumSourceLoader.addSource(data.type, val)
      })
    })
  }

  return {
    loadCesiumSource
  }
}
