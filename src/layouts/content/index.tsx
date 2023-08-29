import {
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  useMessage
} from 'naive-ui'
import { useRoute } from 'vue-router'

import { useRouteStore } from '@/store/route/route'

import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { useDataList } from './use-dataList'

const Content = defineComponent({
  name: 'TheContent',
  setup() {
    window.$message = useMessage()

    const route = useRoute()
    const routeStore = useRouteStore()
    const { state, changeMenuOption, changeUserDropdown } = useDataList()
    const sideKeyRef = ref()

    onMounted(() => {
      changeMenuOption(state)
      getSideMenu(state)
      changeUserDropdown(state)
    })

    const getSideMenu = (state: any) => {
      state.sideMenuOptions = state.menuOptions
    }

    watch(
      () => route.path,
      () => {
        if (route.path !== '/login') {
          routeStore.setLastRoute(route.path)

          const currentSide = route.matched[1].path as string
          sideKeyRef.value = currentSide
        }
      },
      { immediate: true }
    )

    return {
      ...toRefs(state),
      sideKeyRef
    }
  },
  render() {
    return (
      <NLayout has-sider style='height: 100%'>
        <NLayoutSider bordered collapseMode='transform' width={240}>
          <SideBar
            sideMenuOptions={this.sideMenuOptions}
            sideKey={this.sideKeyRef}
          />
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
