import type { Router } from 'vue-router'
import { useRouter } from 'vue-router'

import { useEditorStore } from '@/store/editor'
import { useMapStore } from '@/store/map'
import { usePreviewStore } from '@/store/preview'
import { ChartForPreview } from '@/store/preview/type'

export function usePreview(stage: string) {
  const router: Router = useRouter()
  const editorStore = useEditorStore()
  const { canvasStyle, primitives } = storeToRefs(editorStore)
  const previewStore = usePreviewStore()
  const mapStore = useMapStore()

  const typePreview = {
    chart: saveCurChartPreview,
    map: saveCurMappreview,
    three: saveCurThreePreview
  }

  function saveCurChartPreview() {
    const params = {
      primitives: primitives.value,
      canvasStyle: canvasStyle.value
    } as ChartForPreview
    previewStore.saveChartForPreview(params)
  }

  function saveCurMappreview() {
    const dataSource = mapStore.cesiumSourceLoader?.getTypeDataSource()
    previewStore.saveMapForPreview(dataSource as any)
  }

  function saveCurThreePreview() {}

  // 预览页面
  const handlePreview = () => {
    const typeHandler = typePreview[stage as keyof typeof typePreview]
    typeHandler()

    const { href } = router.resolve({
      name: 'preview',
      query: { stage }
    })
    window.open(href, '_blank')
  }

  return {
    handlePreview
  }
}
