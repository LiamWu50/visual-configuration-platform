import { Add, ChevronDownOutline, Remove } from '@vicons/ionicons5'

import { useEditorStore } from '@/store/editor/index'

import styles from './index.module.scss'

export default defineComponent({
  name: 'ResizeBox',
  setup() {
    const popoverRef = ref<typeof NPopover | null>(null)
    const editorStore = useEditorStore()
    const { editorScale } = storeToRefs(editorStore)

    const handleSelectScale = (key: string) => {
      let scaleValue = editorScale.value
      switch (key) {
        case 'amplify':
          scaleValue += 20
          break
        case 'reduce':
          scaleValue -= 20
          break
        case 'reduceByHalf':
          scaleValue = 50
          break
        case 'reduceByNormal':
          scaleValue = 100
          break
        case 'reduceByDouble':
          scaleValue = 200
          break
      }
      if (scaleValue > 200 || scaleValue < 10) {
        window.$message.warning('超出缩放限制范围！')
        return
      }
      editorStore.setEditorScale(scaleValue)
      popoverRef.value?.setShow(false)
    }

    return {
      popoverRef,
      editorScale,
      handleSelectScale,
      options: [
        {
          label: '放大',
          key: 'amplify',
          icon: Add
        },
        {
          label: '缩小',
          key: 'reduce',
          icon: Remove
        },
        {
          label: '缩放至50%',
          key: 'reduceByHalf',
          icon: undefined
        },
        {
          label: '缩放至100%',
          key: 'reduceByNormal',
          icon: undefined
        },
        {
          label: '缩放至200%',
          key: 'reduceByDouble',
          icon: undefined
        }
      ]
    }
  },
  render() {
    return (
      <NPopover
        trigger='hover'
        raw
        ref='popoverRef'
        show-arrow={false}
        v-slots={{
          trigger: () => (
            <div class={styles['resize-box']}>
              <span>{this.editorScale}%</span>
              <NIcon>
                <ChevronDownOutline />
              </NIcon>
            </div>
          )
        }}
      >
        <div class={styles['resize-dropmenu']}>
          {this.options.map((ele) => (
            <div class={styles['dropmenu-item']}>
              <div
                class={styles['dropmenu-item-content']}
                onClick={() => this.handleSelectScale(ele.key)}
              >
                <span>{ele.label}</span>
                {ele.icon ? (
                  <div class={styles.icon}>
                    <NIcon component={ele.icon} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </NPopover>
    )
  }
})
