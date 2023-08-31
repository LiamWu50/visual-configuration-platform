import {
  AddFilled,
  AreaChartOutlined,
  HiveSharp,
  PublicTwotone
} from '@vicons/material'
import { NButton, NGi, NGrid, NIcon, NTab, NTabs } from 'naive-ui'
import type { Router } from 'vue-router'
import { useRouter } from 'vue-router'

const DashboardHeader = defineComponent({
  name: 'dashboard-header',
  props: {
    modelValue: {
      type: String,
      default: 'chart'
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const router: Router = useRouter()

    const handleCreateProject = () => {
      router.push({
        name: 'design-space',
        query: { source: props.modelValue }
      })
    }

    return {
      handleCreateProject
    }
  },
  render() {
    return (
      <div>
        <NGrid xGap='12'>
          <NGi span='20'>
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
              <NTab name='three'>
                <NIcon style='margin-right: 4px;'>
                  <HiveSharp />
                </NIcon>
                三维场景设计
              </NTab>
            </NTabs>
          </NGi>
          <NGi span='4' style='text-align:right;'>
            <NButton
              icon-placement='left'
              type='primary'
              onClick={this.handleCreateProject}
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
