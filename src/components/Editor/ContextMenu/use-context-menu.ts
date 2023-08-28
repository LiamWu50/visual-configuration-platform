import { cloneDeep } from 'lodash'

import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'
import utils from '@/utils'

import { useCompose } from '../hooks/use-compose'

export const useContextMenu = () => {
  const menuState = reactive({
    top: ref(0),
    left: ref(0),
    copyData: ref<Primitive | null>(null)
  })

  const editorStore = useEditorStore()
  const { curPrimitive } = storeToRefs(editorStore)
  const { handleCompose, handleDecompose } = useCompose()

  /**
   * 复制
   */
  const handleCopy = () => {
    const primitive = cloneDeep(curPrimitive.value)
    primitive!.id = utils.createId()
    menuState.copyData = primitive
    window.$message.success('复制成功！')
  }

  /**
   * 粘贴
   */
  const handlePaste = () => {
    if (!menuState.copyData) {
      window.$message.warning('请选择组件！')
      return
    }

    const primitive = menuState.copyData
    primitive.style.top = menuState.top
    primitive.style.left = menuState.left

    editorStore.addPrimitive(primitive as Primitive)
  }

  /**
   * 清空粘贴板
   */
  const handleClearCanvas = () => {
    editorStore.clear()
  }

  /**
   * 删除
   */
  const handelDelete = () => {
    editorStore.deleteCurPrimitive()
    window.$message.success('删除成功！')
  }

  /**
   * 置顶
   */
  const handleUp = () => {
    editorStore.upCurComponent()
  }

  /**
   * 置底
   */
  const handleDown = () => {
    editorStore.downCurComponent()
  }

  /**
   * 上移
   */
  const handleTop = () => {
    editorStore.moveCurPrimitiveByIndex(1)
  }

  /**
   * 下移
   */
  const handleBottom = () => {
    editorStore.moveCurPrimitiveByIndex(-1)
  }

  /**
   * 创建分组
   */
  const handleCreateGroup = () => {
    handleCompose()
  }

  /**
   * 删除分组
   */
  const handleDeleteGroup = () => {
    handleDecompose()
  }

  return {
    menuState,
    operations: {
      handleCopy,
      handlePaste,
      handleClearCanvas,
      handelDelete,
      handleUp,
      handleDown,
      handleTop,
      handleBottom,
      handleCreateGroup,
      handleDeleteGroup
    }
  }
}
