import BaseAttrs from '@/primitives/attrs/base'
import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'BasicImageAttrs',
  setup() {
    const formValue = ref({
      url: ''
    })

    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    watch(
      () => formValue.value.url,
      (val) => {
        const primitive = curPrimitive.value as Primitive
        primitive.url = val
      },
      { deep: true }
    )

    const renderCustomAttrs = () => (
      <NCollapseItem
        title='属性'
        name='backgroundAttrs'
        v-slots={{
          default: () => (
            <NForm size='small' labelPlacement='left' labelAlign='left'>
              <NFormItem label='路径'>
                <NInput
                  v-model:value={formValue.value.url}
                  placeholder='请输入'
                  clearable={true}
                />
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
