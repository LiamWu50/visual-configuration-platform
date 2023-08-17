import { Primitive } from '@/primitives/primitive'
import { PrimitiveStyle } from '@/primitives/types'

export const useAreaSelectStore = defineStore('areaSelect', () => {
  const groupStyle = ref<PrimitiveStyle | null>(null)
  const selectedPrimitives = ref<Primitive[]>([])
  const areaSelectVisible = ref(false)

  /**
   * 保存框选中的 primitive 以及包围框的样式
   * @param style  包围和样式
   * @param primitives 选中的 primitive
   */
  const setAreaSelectOptions = (
    style: PrimitiveStyle | null,
    primitives: Primitive[]
  ) => {
    groupStyle.value = style
    selectedPrimitives.value = primitives
  }

  /**
   * 清除selectedPrimitives
   */
  const clearPrimitives = () => {
    selectedPrimitives.value = []
  }

  /**
   * 设置包围盒可见性
   * @param visible Boolean
   */
  const setAreaSelectVisible = (visible: boolean) => {
    areaSelectVisible.value = visible
  }

  return {
    groupStyle,
    selectedPrimitives,
    areaSelectVisible,
    clearPrimitives,
    setAreaSelectOptions,
    setAreaSelectVisible
  }
})
