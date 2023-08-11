import { Primitive } from '@/primitives/primitive'

export const useEditorStore = defineStore('editor', () => {
  const primitives = ref<Primitive[]>([])
  const curPrimitive = ref<Primitive | null>(null)
  const isClickPrimitive = ref<boolean>(false)

  /**
   * 添加primitive到画布编辑器
   * @param val Primitive
   */
  const addPrimitive = (val: Primitive) => {
    primitives.value.push(val)
  }

  /**
   * 设置当前选中的primitive
   * @param val Primitive
   */
  const setCurPrimitive = (val: Primitive | null) => {
    curPrimitive.value = val
  }

  /**
   * 删除当前选中的primitive
   */
  const deleteCurPrimitive = () => {
    const index = curPrimitiveIndex.value

    if (index > -1) primitives.value.splice(index, 1)
    curPrimitive.value = null
  }

  /**
   * 设置当前是否点击primitive的状态
   * @param status Boolean
   */
  const setClickPrimitiveStatus = (status: boolean) => {
    isClickPrimitive.value = status
  }

  /**
   * 当前选中primitive在数组中的下标
   */
  const curPrimitiveIndex = computed(() =>
    primitives.value.findIndex(({ id }) => id === curPrimitive.value?.id)
  )

  /**
   * 移动当前选中Primitive位置
   * @param toIndex Number
   */
  const moveCurPrimitiveByIndex = (toIndex: number) => {
    const indexToMove = curPrimitiveIndex.value

    const [valueToMove] = primitives.value.splice(indexToMove, 1)
    primitives.value.splice(indexToMove + toIndex, 0, valueToMove)
  }

  /**
   * 置顶当前选中组件
   */
  const upCurComponent = () => {
    const indexToMove = curPrimitiveIndex.value
    const [valueToMove] = primitives.value.splice(indexToMove, 1)
    primitives.value.push(valueToMove)
  }

  /**
   * 置底当前选中组件
   */
  const downCurComponent = () => {
    const indexToMove = curPrimitiveIndex.value
    const [valueToMove] = primitives.value.splice(indexToMove, 1)
    primitives.value.unshift(valueToMove)
  }

  return {
    primitives,
    curPrimitive,
    isClickPrimitive,
    addPrimitive,
    deleteCurPrimitive,
    setCurPrimitive,
    setClickPrimitiveStatus,
    moveCurPrimitiveByIndex,
    upCurComponent,
    downCurComponent
  }
})
