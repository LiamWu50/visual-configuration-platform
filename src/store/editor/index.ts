import { Primitive } from '@/primitives/primitive'
import { CanvasScene } from '@/primitives/types'
import { CanvasStyle } from '@/primitives/types'

export const useEditorStore = defineStore(
  'editor',
  () => {
    const canvasStyle = ref<CanvasStyle>({ width: 1920, height: 1080 })
    const primitives = ref<Primitive[]>([])
    const curPrimitive = ref<Primitive | null>(null)
    const isClickPrimitive = ref<boolean>(false)
    const editorScale = ref<number>(40)
    const canvasScene = ref<CanvasScene>()

    /**
     * 设置画布样式
     * @param style CanvasStyle
     */
    const setCanvasStyle = (style: CanvasStyle) => {
      canvasStyle.value = style
    }

    /**
     * 添加primitive到画布编辑器
     * @param val Primitive
     */
    const addPrimitive = (val: Primitive) => {
      primitives.value.push(val)
    }

    /**
     * 清空画布
     */
    const clear = () => {
      primitives.value.length = 0
      curPrimitive.value = null
      isClickPrimitive.value = false
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
     * 批量删除 primitive
     * @param primitives Primitive[]
     */
    const batchDeletePrimitive = (data: Primitive[]) => {
      data.forEach(({ id }) => {
        const index = primitives.value.findIndex((p) => p.id === id)
        primitives.value.splice(index, 1)
      })
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

    /**
     * 设置编辑器的缩放比
     * @param scale Number
     */
    const setEditorScale = (scale: number) => {
      editorScale.value = scale
    }

    /**
     * 保存画布的场景
     * @param scene CanvasScene
     */
    const saveCanvasScene = (scene: CanvasScene) => {
      console.log('canvasScene', scene)

      canvasScene.value = scene
    }

    return {
      canvasStyle,
      canvasScene,
      primitives,
      setCanvasStyle,
      curPrimitive,
      isClickPrimitive,
      editorScale,
      addPrimitive,
      clear,
      deleteCurPrimitive,
      batchDeletePrimitive,
      setCurPrimitive,
      setClickPrimitiveStatus,
      moveCurPrimitiveByIndex,
      upCurComponent,
      downCurComponent,
      setEditorScale,
      saveCanvasScene
    }
  },
  {
    persist: true
  }
)
