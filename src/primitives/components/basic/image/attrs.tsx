import { NCollapseItem, NForm, NFormItem, NInput } from 'naive-ui'

import BaseAttrs from '@/primitives/attrs/base'

export default defineComponent({
  name: 'BasicImageAttrs',
  setup() {
    const renderCustomAttrs = () => (
      <NCollapseItem
        title='属性'
        name='backgroundAttrs'
        v-slots={{
          default: () => (
            <NForm size='small' labelPlacement='left' labelAlign='left'>
              <NFormItem label='路径'>
                <NInput placeholder='请输入' clearable={true} />
              </NFormItem>
            </NForm>
          )
        }}
      ></NCollapseItem>
    )
    return () => (
      <BaseAttrs
        v-slots={{
          default: () => renderCustomAttrs()
        }}
      />
    )
  }
})
