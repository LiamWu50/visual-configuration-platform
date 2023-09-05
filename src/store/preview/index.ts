import type { ChartForPreview, MapForPreview } from './type'

export const usePreviewStore = defineStore(
  'preview',
  () => {
    const chartForPreview = ref<ChartForPreview>()
    const mapForPreview = ref<MapForPreview>()

    /**
     *  保存用于预览的图表数据
     * @param val ChartForPreview
     */
    const saveChartForPreview = (val: ChartForPreview) => {
      chartForPreview.value = val
    }

    /**
     *  保存用于预览的地图数据
     * @param val MapForPreview
     */
    const saveMapForPreview = (val: MapForPreview) => {
      mapForPreview.value = val
    }

    return {
      chartForPreview,
      mapForPreview,
      saveChartForPreview,
      saveMapForPreview
    }
  },
  {
    persist: true
  }
)
