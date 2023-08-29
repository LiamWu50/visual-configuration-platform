import { AddFilled, AreaChartOutlined, PublicTwotone } from '@vicons/material'
import { NButton, NGi, NGrid, NIcon, NTab, NTabs } from 'naive-ui'

const DashboardHeader = defineComponent({
  name: 'dashboard-header',
  props: {
    modelValue: {
      type: String,
      default: 'chart'
    }
  },
  emits: ['update:modelValue'],
  render() {
    return (
      <div>
        <NGrid xGap='12'>
          <NGi span='16'>
            <NTabs
              type='line'
              animated
              barWidth={0}
              value={this.modelValue}
              onUpdate:value={(val) => this.$emit('update:modelValue', val)}
              defaultValue='chart'
            >
              <NTab name='chart'>
                <NIcon style='margin-right: 4px;'>
                  <AreaChartOutlined />
                </NIcon>
                可视化图表设计
              </NTab>
              <NTab name='map'>
                <NIcon style='margin-right: 4px;'>
                  <PublicTwotone />
                </NIcon>
                三维地图设计
              </NTab>
            </NTabs>
          </NGi>
          <NGi span='4' offset='2'>
            <NButton
              icon-placement='left'
              type='primary'
              size='small'
              strong
              v-slots={{
                icon: () => (
                  <NIcon>
                    <AddFilled />
                  </NIcon>
                )
              }}
            >
              新建文件
            </NButton>
          </NGi>
        </NGrid>
      </div>
    )
  }
})
export default DashboardHeader
