import imageSrc from '@/assets/images/editor/img.jpg'
import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor/index'

import styles from './index.module.scss'
import { useContextMenu } from './use-context-menu'

export default defineComponent({
  name: 'Layers',
  setup() {
    const xRef = ref(0)
    const yRef = ref(0)
    const showDropdownRef = ref(false)
    const selectedPrimitiveRef = ref<Primitive | null>(null)
    const editorStore = useEditorStore()
    const primitives = editorStore.primitives as Primitive[]
    const { menuOptions, typeHandler, handleProcess } = useContextMenu()

    const handleSelect = (key: string) => {
      showDropdownRef.value = false
      handleProcess(
        selectedPrimitiveRef.value as Primitive,
        key as keyof typeof typeHandler
      )
    }

    const onClickoutside = () => {
      showDropdownRef.value = false
    }

    const handleContextMenu = (e: MouseEvent, item: Primitive) => {
      e.preventDefault()
      selectedPrimitiveRef.value = item
      showDropdownRef.value = false
      nextTick().then(() => {
        showDropdownRef.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      })
    }

    return {
      xRef,
      yRef,
      showDropdownRef,
      primitives,
      menuOptions,
      handleSelect,
      onClickoutside,
      handleContextMenu
    }
  },
  render() {
    const renderLayerItems = () =>
      this.primitives.map((item: Primitive) => (
        <div
          class={styles.layerItem}
          onContextmenu={(e) => this.handleContextMenu(e, item)}
        >
          <div class={styles.imgCover}>
            <img src={imageSrc} />
          </div>
          {item.isReName ? (
            <NInput
              v-model:value={item.name}
              autofocus={true}
              onBlur={() => (item.isReName = false)}
              onKeyup={(e) => e.key === 'Enter' && (item.isReName = false)}
              type='text'
              placeholder='请输入组件名称'
            />
          ) : (
            <span>{item.name}</span>
          )}
        </div>
      ))

    return (
      <div class={styles.layers}>
        <div class={styles.container}>{renderLayerItems()}</div>
        <NDropdown
          placement='bottom-start'
          trigger='manual'
          x={this.xRef}
          y={this.yRef}
          options={this.menuOptions}
          show={this.showDropdownRef}
          onSelect={this.handleSelect}
          onClickoutside={this.onClickoutside}
        />
      </div>
    )
  }
})
