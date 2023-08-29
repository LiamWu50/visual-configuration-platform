import {
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  useMessage
} from 'naive-ui'

import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { useDataList } from './use-dataList'

const Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Content',
  setup() {
    window.$message = useMessage()

    const { state } = useDataList()

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <NLayout has-sider style='height: 100%'>
        <NLayoutSider bordered collapseMode='transform' width={240}>
          <SideBar />
        </NLayoutSider>
        <NLayoutHeader style='height: 65px'>
          <NavBar
            class='tab-horizontal'
            userDropdownOptions={this.userDropdownOptions}
          />
        </NLayoutHeader>
        <NLayout position='absolute' style='top: 65px'>
          <NLayoutContent
            native-scrollbar={false}
            style='padding: 16px 22px'
            contentStyle={'height: 100%'}
          >
            <router-view key={this.$route.fullPath} />
          </NLayoutContent>
        </NLayout>
      </NLayout>
    )
  }
})

export default Content
