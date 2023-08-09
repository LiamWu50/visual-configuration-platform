import { debounce } from 'lodash'
import {
  NCollapse,
  NCollapseItem,
  NForm,
  NFormItem,
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
      <NCollapse default-expanded-names='0' accordion>
        <NCollapseItem
          title='基础样式'
          name='baseAttrs'
          v-slots={{
            default: () => (
              <NForm size='small' labelPlacement='left' labelAlign='left'>
                {baseAttrsSource.map((item) => (
                  <NFormItem label={item.label}>
                    <NInputNumber
                      v-model:value={curStyleAttrs.value![item.type]}
                      onUpdateValue={(e) => handleChangStyle(item.type, e)}
                      max={9999}
                      min={-9999}
                      precision={0}
                      clearable={true}
                      placeholder={`请输入${item.label}`}
                    />
                  </NFormItem>
                ))}
              </NForm>
            )
          }}
        ></NCollapseItem>
        {slots.default?.()}
      </NCollapse>
    )
  }
})
