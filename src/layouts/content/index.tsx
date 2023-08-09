import { NLayout, NLayoutContent, NLayoutHeader, useMessage } from 'naive-ui'
import { useRoute } from 'vue-router'

import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { useDataList } from './use-dataList'

const Content = defineComponent({
  name: 'DSContent',
  setup() {
    window.$message = useMessage()

    const route = useRoute()
    const { state } = useDataList()
    const sideKeyRef = ref()

    onMounted(() => {
      getSideMenu(state)
    })

    const getSideMenu = (state: any) => {
      const key = route.meta.activeMenu
      state.sideMenuOptions =
        state.menuOptions.filter((menu: { key: string }) => menu.key === key)[0]
          ?.children || state.menuOptions
      state.isShowSide = route.meta.showSide
    }

    return {
      ...toRefs(state),
      sideKeyRef
    }
  },
  render() {
    return (
      <NLayout style='height: 100%'>
        <NLayoutHeader style='height: 65px'>
          <NavBar
            class='tab-horizontal'
            headerMenuOptions={this.headerMenuOptions}
            userDropdownOptions={this.userDropdownOptions}
          />
        </NLayoutHeader>
        <NLayout has-sider position='absolute' style='top: 65px'>
          {this.isShowSide && (
            <SideBar
              sideMenuOptions={this.sideMenuOptions}
              sideKey={this.sideKeyRef}
            />
          )}
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
