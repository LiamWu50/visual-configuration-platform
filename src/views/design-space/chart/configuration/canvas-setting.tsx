import { CaretForwardOutline } from '@vicons/ionicons5'
import { debounce } from 'lodash'

import { CanvasStyle } from '@/primitives/types'
import { useEditorStore } from '@/store/editor/index'

export default defineComponent({
  name: 'canvasSettings',
  setup() {
    const editorStore = useEditorStore()
    const { canvasStyle } = storeToRefs(editorStore)
    const curStyleAttrs = computed(() => canvasStyle.value as CanvasStyle)

    const canvasAttrsSource = [
      {
        label: 'W',
        type: 'width'
      },
      {
        label: 'H',
        type: 'height'
      }
    ]

    watch(curStyleAttrs, (v) =>
      debounce(() => editorStore.setCanvasStyle(v), 300)
    )

    return () => (
      <NCollapse
        defaultExpandedNames='baseAttrs'
        v-slots={{
          arrow: () => (
            <NIcon size={12}>
              <CaretForwardOutline />
            </NIcon>
          )
        }}
      >
        <NCollapseItem
          title='画布样式'
          name='baseAttrs'
          v-slots={{
            default: () => (
              <NForm size='small' showLabel={false}>
                <NGrid xGap={12} cols={2}>
                  {canvasAttrsSource.map((item) => (
                    <NGi>
                      <NFormItem>
                        <NInputNumber
                          v-model:value={
                            curStyleAttrs.value![item.type as keyof CanvasStyle]
                          }
                          max={9999}
                          min={-9999}
                          showButton={false}
                          precision={0}
                          clearable={true}
                          placeholder={`请输入${item.label}`}
                          v-slots={{
                            prefix: () => item.label
                          }}
                        />
                      </NFormItem>
                    </NGi>
                  ))}
                </NGrid>
              </NForm>
            )
          }}
        ></NCollapseItem>
      </NCollapse>
    )
  }
})
