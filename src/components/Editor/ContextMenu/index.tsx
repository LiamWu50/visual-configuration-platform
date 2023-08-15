import { cloneDeep } from 'lodash'

import { Primitive } from '@/primitives/primitive'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor'
import utils from '@/utils'

import { useCompose } from '../hooks/use-compose'
import styles from './index.module.scss'

interface ContextOptions {
  label: string
  handler: () => void
  disabled?: boolean
}

export default defineComponent({
  name: 'ContextMenu',
  setup(props, { expose }) {
    const message = useMessage()
    const editorStore = useEditorStore()
    const areaSelectStore = useAreaSelectStore()
    const { handleCompose } = useCompose()

    const { curPrimitive } = storeToRefs(editorStore)
    const { areaSelectVisible } = storeToRefs(areaSelectStore)

    const variables = reactive({
      visible: ref(false),
      top: ref(0),
      left: ref(0),
      contextType: ref(''),
      copyData: ref<Primitive | null>(null),
      contextOptions: ref<ContextOptions[]>([])
    })

    /**
     * 显示右键菜单
     */
    const show = ({
      top,
      left,
      contextType
    }: {
      top: number
      left: number
      contextType: string
    }) => {
      variables.top = top
      variables.left = left
      variables.contextType = contextType
      getContextOptions()
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
      message.success('删除成功！')
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
      handleCompose()
    }

    const defaultOptions = [
      {
        label: '复制',
        handler: handleCopy
      },
      {
        label: '粘贴',
        handler: handlePaste
      },
      {
        label: '删除',
        handler: handelDelete
      },
      {
        label: '置顶',
        handler: handleUp
      },
      {
        label: '置底',
        handler: handleDown
      },
      {
        label: '上移',
        handler: handleTop
      },
      {
        label: '下移',
        handler: handleBottom
      }
    ]

    const groupOptions = [
      {
        label: '组合',
        handler: handleCreateGroup
      },
      {
        label: '删除',
        handler: handleDeleteGroup
      }
    ]

    const editorOptions = [
      {
        label: '粘贴',
        handler: handlePaste
      },
      {
        label: '清空画布',
        handler: handleClearCanvas
      }
    ]

    const getContextOptions = () => {
      if (areaSelectVisible.value) {
        variables.contextOptions = [...groupOptions]
      } else if (variables.contextType === 'Editor') {
        variables.contextOptions = [...editorOptions]
      } else {
        variables.contextOptions = [...defaultOptions]
        if (variables.contextType === 'Group') {
          variables.contextOptions.unshift({
            label: '解除分组',
            handler: handleDeleteGroup
          })
        }
      }
    }

    expose({ show, close })

    return () => (
      <div
        v-show={variables.visible}
        class={styles.contextmenu}
        style={{ top: `${variables.top}px`, left: `${variables.left}px` }}
      >
        <ul onMouseup={handleMouseUp} onMousedown={(e) => e.stopPropagation()}>
          {variables.contextOptions.map((item) => (
            <li onClick={item.handler}>
              {item.label} {item.disabled}
            </li>
          ))}
        </ul>
      </div>
    )
  }
})
