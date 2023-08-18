import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor'

import styles from './index.module.scss'
import { useContextMenu } from './use-context-menu'

interface ContextOptions {
  label: string
  handler: () => void
  disabled?: boolean
}

export default defineComponent({
  name: 'ContextMenu',
  setup(props, { expose }) {
    const { menuState, operations } = useContextMenu()
    const editorStore = useEditorStore()
    const areaSelectStore = useAreaSelectStore()

    const { areaSelectVisible } = storeToRefs(areaSelectStore)

    const variables = reactive({
      visible: ref(false),
      contextType: ref(''),
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
      menuState.top = top
      menuState.left = left
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

    const defaultOptions = [
      {
        label: '复制',
        handler: operations.handleCopy
      },
      {
        label: '粘贴',
        handler: operations.handlePaste
      },
      {
        label: '删除',
        handler: operations.handelDelete
      },
      {
        label: '置顶',
        handler: operations.handleUp
      },
      {
        label: '置底',
        handler: operations.handleDown
      },
      {
        label: '上移',
        handler: operations.handleTop
      },
      {
        label: '下移',
        handler: operations.handleBottom
      }
    ]

    const groupOptions = [
      {
        label: '组合',
        handler: operations.handleCreateGroup
      },
      {
        label: '删除',
        handler: operations.handleDeleteGroup
      }
    ]

    const editorOptions = [
      {
        label: '粘贴',
        handler: operations.handlePaste
      },
      {
        label: '清空画布',
        handler: operations.handleClearCanvas
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
            handler: operations.handleDeleteGroup
          })
        }
      }
    }

    expose({ show, close })

    return () => (
      <div
        v-show={variables.visible}
        class={styles.contextmenu}
        style={{ top: `${menuState.top}px`, left: `${menuState.left}px` }}
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
