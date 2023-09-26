import { CanvasScene } from '@/primitives/types'

import type { ChartForPreview, MapForPreview } from './type'

export const usePreviewStore = defineStore(
  'preview',
  () => {
    const chartForPreview = ref<ChartForPreview>()
    const mapForPreview = ref<MapForPreview>()
    const canvasScene = ref<CanvasScene>()

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

    /**
     * 保存画布的场景
     * @param scene CanvasScene
     */
    const saveCanvasScene = (scene: CanvasScene) => {
      canvasScene.value = scene
    }

    return {
      canvasScene,
      chartForPreview,
      mapForPreview,
      saveChartForPreview,
      saveMapForPreview,
      saveCanvasScene
    }
  },
  {
    persist: true
  }
)
