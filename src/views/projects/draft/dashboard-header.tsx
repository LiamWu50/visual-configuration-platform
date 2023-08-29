import { AddFilled } from '@vicons/material'
import { NButton, NGi, NGrid, NIcon, NTabPane, NTabs } from 'naive-ui'

const DashboardHeader = defineComponent({
  name: 'dashboard-header',
  setup() {
    return {}
  },
  render() {
    return (
      <div>
        <NGrid xGap='12' cols='4'>
          <NGi>
            <NTabs type='line' animated barWidth={0} defaultValue='chart'>
              <NTabPane name='chart' tab='可视化图表设计'>
                可视化图表设计
              </NTabPane>
              <NTabPane name='map' tab='三维地图设计'>
                三维地图设计
              </NTabPane>
            </NTabs>
          </NGi>
          <NGi offset='2'>
            <NButton
              icon-placement='left'
              secondary
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
