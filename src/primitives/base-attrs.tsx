import { CaretForwardOutline } from '@vicons/ionicons5'
import { debounce } from 'lodash'
import {
  NCollapse,
  NCollapseItem,
  NForm,
  NFormItem,
  NGi,
  NGrid,
  NIcon,
  NInputNumber
} from 'naive-ui'

import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'BaseAttrs',
  setup(props, { slots }) {
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)
    const curStyleAttrs = computed(() => curPrimitive.value?.style)

    const baseAttrsSource = [
      {
        label: '左边距',
        type: 'left'
      },
      {
        label: '上边距',
        type: 'top'
      },
      {
        label: '宽度',
        type: 'width'
      },
      {
        label: '高度',
        type: 'height'
      }
    ]

    // 动态修改primitive样式
    const handleChangStyle = debounce((key: string, val: any) => {
      const locationKeys = ['top', 'left', 'width', 'height']
      if (locationKeys.includes(key)) {
        curPrimitive.value?.updateStyleByKey(key, val)
      }
    }, 300)

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
          title='基础样式'
          name='baseAttrs'
          v-slots={{
            default: () => (
              <NForm
                size='small'
                labelPlacement='left'
                labelAlign='left'
                showLabel={false}
              >
                <NGrid xGap={12} cols={2}>
                  {baseAttrsSource.map((item) => (
                    <NGi>
                      <NFormItem>
                        <NInputNumber
                          v-model:value={curStyleAttrs.value![item.type]}
                          onUpdateValue={(e) => handleChangStyle(item.type, e)}
                          max={9999}
                          min={-9999}
                          showButton={false}
                          precision={0}
                          clearable={true}
                          placeholder={`请输入${item.label}`}
                          v-slots={{
                            prefix: item.label
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
        {slots.default?.()}
      </NCollapse>
    )
  }
})
