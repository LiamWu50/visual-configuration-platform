import BaseAttrs from '@/primitives/attrs/base'
import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'BasicTextAttrs',
  setup() {
    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    const formValue = ref({
      text: '',
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 400,
      textAlign: 'left'
    })

    const alignOptions = [
      {
        label: '左对齐',
        value: 'left'
      },
      {
        label: '居中',
        value: 'center'
      },
      {
        label: '右对齐',
        value: 'right'
      }
    ]

    watch(
      formValue,
      (val) => {
        const primitive = curPrimitive.value as Primitive
        primitive.textOptions = val
      },
      { deep: true }
    )

    return {
      formValue,
      alignOptions
    }
  },
  render() {
    const { formValue, alignOptions } = this

    const renderCustomAttrs = () => (
      <>
        <NCollapseItem
          title='信息'
          name='infoAttrs'
          v-slots={{
            default: () => (
              <NForm size='small' labelPlacement='left' labelAlign='left'>
                <NFormItem label='文字'>
                  <NInput
                    v-model:value={formValue.text}
                    placeholder='请输入'
                    clearable={true}
                  />
                </NFormItem>
              </NForm>
            )
          }}
        ></NCollapseItem>
        <NCollapseItem
          title='样式'
          name='styleAttrs'
          v-slots={{
            default: () => (
              <NForm size='small' labelPlacement='left' labelAlign='left'>
                <NFormItem label=' 样式'>
                  <NGrid xGap={12} yGap={6} cols={2}>
                    <NGi>
                      <NInput
                        v-model:value={formValue.color}
                        clearable={true}
                        placeholder='请输入'
                        v-slots={{
                          prefix: () => '颜色'
                        }}
                      />
                    </NGi>
                    <NGi>
                      <NInput
                        v-model:value={formValue.fontSize}
                        clearable={true}
                        placeholder='请输入'
                        v-slots={{
                          prefix: () => '大小'
                        }}
                      />
                    </NGi>
                    <NGi>
                      <NInput
                        v-model:value={formValue.fontWeight}
                        clearable={true}
                        placeholder='请输入'
                        v-slots={{
                          prefix: () => '粗细'
                        }}
                      />
                    </NGi>
                    <NGi>
                      <NSelect
                        v-model:value={formValue.textAlign}
                        placeholder='Select'
                        options={alignOptions}
                      />
                    </NGi>
                  </NGrid>
                </NFormItem>
              </NForm>
            )
          }}
        ></NCollapseItem>
      </>
    )

    return (
      <BaseAttrs
        v-slots={{
          default: () => renderCustomAttrs()
        }}
      />
    )
  }
})
