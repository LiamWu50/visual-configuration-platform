import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'ChartGrid',
  setup() {
    const formValue = ref({
      show: true,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    })

    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    onMounted(() => {
      const { grid } = curPrimitive.value?.chartOptions || {}
      formValue.value = grid
    })

    watch(
      formValue,
      (val) => {
        const primitive = curPrimitive.value as Primitive
        const options = Object.assign(primitive.chartOptions.grid || {}, val)
        primitive.chartOptions.grid = options
      },
      { deep: true }
    )

    return {
      formValue
    }
  },
  render() {
    const { formValue } = this

    return (
      <NCollapseItem
        title='网格'
        name='grid'
        v-slots={{
          default: () => (
            <NForm size='small' labelPlacement='top' labelAlign='left'>
              <NFormItem label=' 距离'>
                <NGrid xGap={12} yGap={6} cols={2}>
                  <NGi>
                    <NInput
                      v-model:value={formValue.left}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '左侧'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NInput
                      v-model:value={formValue.right}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '右侧'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NInput
                      v-model:value={formValue.top}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '上侧'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NInput
                      v-model:value={formValue.bottom}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '下侧'
                      }}
                    />
                  </NGi>
                </NGrid>
              </NFormItem>
            </NForm>
          )
        }}
      ></NCollapseItem>
    )
  }
})
