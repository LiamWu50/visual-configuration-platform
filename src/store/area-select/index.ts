import { Primitive } from '@/primitives/primitive'
import { DOMRectStyle } from '@/primitives/types'

export const useAreaSelectStore = defineStore('areaSelect', () => {
  const groupStyle = ref<DOMRectStyle | null>(null)
  const childPrimitives = ref<Primitive[]>([])
  const areaSelectVisible = ref(false)

  /**
   * 保存框选中的 primitive 以及包围框的样式
   * @param style  包围和样式
   * @param primitives 选中的 primitive
   */
  const setAreaSelectOptions = (
    style: DOMRectStyle | null,
    primitives: Primitive[]
  ) => {
    groupStyle.value = style
    childPrimitives.value = primitives
  }

  /**
   * 清除childPrimitives
   */
  const clearPrimitives = () => {
    childPrimitives.value = []
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
    childPrimitives,
    areaSelectVisible,
    clearPrimitives,
    setAreaSelectOptions,
    setAreaSelectVisible
  }
})
