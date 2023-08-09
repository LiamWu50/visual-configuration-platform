import { cloneDeep } from 'lodash'

import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'
import utils from '@/utils'

import styles from './index.module.scss'

export default defineComponent({
  name: 'ContextMenu',
  setup(props, { expose }) {
    const message = useMessage()
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    const variables = reactive({
      visible: ref(false),
      top: ref(0),
      left: ref(0),
      copyData: ref<Primitive | null>(null)
    })

    /**
     * 显示右键菜单
     */
    const show = ({ top, left }: { top: number; left: number }) => {
      variables.top = top
      variables.left = left
      variables.visible = true
    }

    /**
     * 关闭右键菜单
     */
    const close = () => {
      variables.visible = false
    }

    // 点击菜单时不取消当前组件的选中状态
    const handleMouseUp = () => {
      editorStore.setClickPrimitiveStatus(true)
    }

    /**
     * 复制
     */
    const handleCopy = () => {
      const primitive = cloneDeep(curPrimitive.value)
      primitive!.id = utils.createId()
      variables.copyData = primitive
      message.success('复制成功！')
    }

    /**
     * 粘贴
     */
    const handlePaste = () => {
      if (!variables.copyData) {
        message.warning('请选择组件！')
        return
      }

      const primitive = variables.copyData
      primitive.style.top = variables.top
      primitive.style.left = variables.left

      editorStore.addPrimitive(primitive)
    }

    /**
     * 删除
     */
    const handelDelete = () => {
      editorStore.deleteCurPrimitive()
      message.success('删除成功！')
    }

    /**
     * 置顶
     */
    const handleUp = () => {
      // layerStore.upComponent()
    }

    /**
     * 置底
     */
    const handleDown = () => {
      // layerStore.downComponent()
    }

    /**
     * 上移
     */
    const handleTop = () => {
      editorStore.moveCurPrimitiveByIndex(1)
      // arr.splice(j, 1, ...arr.splice(i, 1, arr[j]))
    }

    /**
     * 下移
     */
    const handleBottom = () => {
      editorStore.moveCurPrimitiveByIndex(-1)
    }

    const typeHandler = {
      复制: handleCopy,
      粘贴: handlePaste,
      删除: handelDelete,
      置顶: handleTop,
      置底: handleBottom,
      上移: handleUp,
      下移: handleDown
    }

    const typeOperations = computed(() =>
      curPrimitive.value ? typeHandler : { 粘贴: handlePaste }
    )

    expose({ show, close })

    return () => (
      <div
        v-show={variables.visible}
        class={styles.contextmenu}
        style={{ top: `${variables.top}px`, left: `${variables.left}px` }}
      >
        <ul onMouseup={handleMouseUp}>
          {Object.entries(typeOperations.value).map(([key, handler]) => (
            <li onClick={handler}>{key}</li>
          ))}
        </ul>
      </div>
    )
  }
})
