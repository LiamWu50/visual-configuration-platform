import BaseAttrs from '@/primitives/attrs/base'
import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'RadarChartAttrs',
  setup() {
    const formValue = ref({
      backgroundColor: ''
    })

    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    onMounted(() => {
      formValue.value.backgroundColor = curPrimitive.value?.chartOptions
        .backgroundColor as string
    })

    watch(
      () => formValue.value.backgroundColor,
      (val) => {
        const primitive = curPrimitive.value as Primitive
        primitive.chartOptions.backgroundColor = val
      },
      { deep: true }
    )

    const renderCustomAttrs = () => (
      <NCollapseItem
        title='样式'
        name='backgroundAttrs'
        v-slots={{
          default: () => (
            <NForm size='small' labelPlacement='left' labelAlign='left'>
              <NFormItem label='背景'>
                <NColorPicker v-model:value={formValue.value.backgroundColor} />
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
