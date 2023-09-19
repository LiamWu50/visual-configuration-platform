import { Primitive } from '@/primitives/primitive'
import { useEditorStore } from '@/store/editor'

export default defineComponent({
  name: 'ChartXAxis',
  setup() {
    const formValue = ref({
      name: '',
      nameTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        borderDashOffset: 0
      },
      axisLabel: {
        show: true,
        color: '#FFFFFF',
        fontSize: 12,
        borderDashOffset: 0
      },
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#FFFFFF',
          width: 1
        }
      },
      axisTick: {
        show: true,
        length: 3
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#FFFFFF',
          width: 1,
          type: 'solid'
        }
      }
    })

    const editorStore = useEditorStore()
    const { curPrimitive } = storeToRefs(editorStore)

    const splitLineTypeOptions = [
      {
        label: '实线',
        value: 'solid'
      },
      {
        label: '虚线',
        value: 'dashed'
      },
      {
        label: '圆点',
        value: 'dotted'
      }
    ]

    const axisPositionOptions = [
      {
        label: '顶部',
        value: 'top'
      },
      {
        label: '底部',
        value: 'bottom'
      }
    ]

    watch(
      formValue,
      (val) => {
        const primitive = curPrimitive.value as Primitive
        const options = Object.assign(primitive.chartOptions.xAxis, val)
        primitive.chartOptions.xAxis = options
      },
      { deep: true }
    )

    return {
      formValue,
      axisPositionOptions,
      splitLineTypeOptions
    }
  },
  render() {
    const { formValue, splitLineTypeOptions } = this

    return (
      <NCollapseItem
        title='X轴'
        name='xAxis'
        v-slots={{
          default: () => (
            <NForm size='small' labelPlacement='top' labelAlign='left'>
              <NFormItem label='单位'>
                <NGrid xGap={12} cols={2}>
                  <NGi>
                    <NInput
                      v-model:value={formValue.name}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '名称'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NColorPicker
                      v-model:value={formValue.nameTextStyle.color}
                    />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.nameTextStyle.fontSize}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '大小'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.nameTextStyle.borderDashOffset}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '偏移量'
                      }}
                    />
                  </NGi>
                </NGrid>
              </NFormItem>
              <NFormItem label='标签'>
                <NGrid xGap={12} cols={2}>
                  <NGi>
                    <NRadioGroup
                      v-model:value={formValue.axisLabel.show}
                      name='top-size'
                    >
                      <NRadioButton value={true}>显示</NRadioButton>
                      <NRadioButton value={false}>隐藏</NRadioButton>
                    </NRadioGroup>
                  </NGi>
                  <NGi>
                    <NColorPicker v-model:value={formValue.axisLabel.color} />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.axisLabel.fontSize}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '大小'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.axisLabel.borderDashOffset}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入偏移量'
                      v-slots={{
                        prefix: () => '偏移量'
                      }}
                    />
                  </NGi>
                </NGrid>
              </NFormItem>
              <NFormItem label='轴线'>
                <NGrid xGap={12} cols={2}>
                  <NGi>
                    <NRadioGroup
                      v-model:value={formValue.axisLine.show}
                      name='top-size'
                    >
                      <NRadioButton value={true}>显示</NRadioButton>
                      <NRadioButton value={false}>隐藏</NRadioButton>
                    </NRadioGroup>
                  </NGi>
                  <NGi>
                    <NColorPicker
                      v-model:value={formValue.axisLine.lineStyle.color}
                    />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.axisLine.lineStyle.width}
                      max={10}
                      min={1}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '粗细'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NSelect
                      v-model:value={formValue.position}
                      placeholder='Select'
                      options={this.axisPositionOptions}
                    />
                  </NGi>
                </NGrid>
              </NFormItem>
              <NFormItem label='刻度'>
                <NGrid xGap={12} cols={2}>
                  <NGi>
                    <NRadioGroup
                      v-model:value={formValue.axisTick.show}
                      name='top-size'
                    >
                      <NRadioButton value={true}>显示</NRadioButton>
                      <NRadioButton value={false}>隐藏</NRadioButton>
                    </NRadioGroup>
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.axisTick.length}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '长度'
                      }}
                    />
                  </NGi>
                </NGrid>
              </NFormItem>
              <NFormItem label='分割线'>
                <NGrid xGap={12} cols={2}>
                  <NGi>
                    <NRadioGroup
                      v-model:value={formValue.splitLine.show}
                      name='top-size'
                    >
                      <NRadioButton value={true}>显示</NRadioButton>
                      <NRadioButton value={false}>隐藏</NRadioButton>
                    </NRadioGroup>
                  </NGi>
                  <NGi>
                    <NColorPicker
                      v-model:value={formValue.splitLine.lineStyle.color}
                    />
                  </NGi>
                  <NGi>
                    <NInputNumber
                      v-model:value={formValue.splitLine.lineStyle.width}
                      max={999}
                      min={0}
                      showButton={false}
                      precision={0}
                      clearable={true}
                      placeholder='请输入'
                      v-slots={{
                        prefix: () => '粗细'
                      }}
                    />
                  </NGi>
                  <NGi>
                    <NSelect
                      v-model:value={formValue.splitLine.lineStyle.type}
                      placeholder='Select'
                      options={splitLineTypeOptions}
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
