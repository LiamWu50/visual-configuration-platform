import type { ChartForPreview } from './type'

export const usePreviewStore = defineStore(
  'preview',
  () => {
    const chartForPreview = ref<ChartForPreview>()

    /**
     *  保存用于预览的图表数据
     * @param val ChartForPreview
     */
    const saveChartForPreview = (val: ChartForPreview) => {
      chartForPreview.value = val
    }

    return {
      chartForPreview,
      saveChartForPreview
    }
  },
  {
    persist: true
  }
)
