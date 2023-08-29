import {
  CategoryTwotone,
  ContentCopyTwotone,
  ContentPasteTwotone,
  DataThresholdingTwotone,
  LogOutOutlined,
  PersonOutlined
} from '@vicons/material'

import { renderIcon } from '@/utils/common'

export function useDataList() {
  const state = reactive({
    userDropdownOptions: [],
    menuOptions: [],
    sideMenuOptions: []
  })

  const changeMenuOption = (state: any) => {
    state.menuOptions = [
      {
        label: '草稿',
        key: '/projects/draft',
        icon: renderIcon(ContentPasteTwotone)
      },
      {
        label: '模板',
        key: '/projects/template',
        icon: renderIcon(ContentCopyTwotone)
      },
      {
        label: '组件库',
        key: '/projects/component-library',
        icon: renderIcon(CategoryTwotone)
      },
      {
        label: '数据管理',
        key: '/projects/data-manage',
        icon: renderIcon(DataThresholdingTwotone)
      }
    ]
  }

  const changeUserDropdown = (state: any) => {
    state.userDropdownOptions = [
      {
        label: '个人设置',
        key: 'personalSettings',
        icon: renderIcon(PersonOutlined, 16)
      },
      {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon(LogOutOutlined, 16)
      }
    ]
  }

  return {
    state,
    changeMenuOption,
    changeUserDropdown
  }
}
