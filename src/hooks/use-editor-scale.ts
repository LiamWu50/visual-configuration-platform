import { useEditorStore } from '@/store/editor/index'

export function useEditorScale() {
  const editorStore = useEditorStore()
  const { editorScale } = storeToRefs(editorStore)

  /**
   * 通过当前缩放比例转换数值
   * @param val Number
   * @returns Number
   */
  const transByCurScale = (val: number) => {
    return (val * 100) / editorScale.value
  }

  /**
   * 通过当前缩放比例转换数值
   * @param val Number
   * @returns Number
   */
  const transAbsByCurScale = (val: number) => {
    return (Math.abs(val) * 100) / editorScale.value
  }

  return {
    transByCurScale,
    transAbsByCurScale
  }
}
