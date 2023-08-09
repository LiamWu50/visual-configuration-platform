import { MenuOption } from 'naive-ui'
import type { Router } from 'vue-router'
import { LocationQueryRaw, useRouter } from 'vue-router'

export function useMenuClick() {
  const router: Router = useRouter()

  const handleMenuClick = (key: string, menuOption: MenuOption) => {
    router.push({
      path: `${key}`,
      query: menuOption.payload ? (menuOption.payload as LocationQueryRaw) : {}
    })
  }

  return {
    handleMenuClick
  }
}
