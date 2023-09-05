import CesiumSourceLoader from '@/helper/cesium-source-loader'

export const useMapStore = defineStore('map', () => {
  const cesiumSourceLoader = ref<CesiumSourceLoader>()

  /**
   *  保存cesium 数据管理工具
   * @param val CesiumSourceLoader
   */
  const saveCesiumSourceLoader = (val: CesiumSourceLoader) => {
    cesiumSourceLoader.value = val
  }

  return {
    cesiumSourceLoader,
    saveCesiumSourceLoader
  }
})
