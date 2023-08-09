import { DropdownOption } from 'naive-ui'
import type { Router } from 'vue-router'
import { useRouter } from 'vue-router'

export function useDropDown() {
  const router: Router = useRouter()

  const handleSelect = (key: string | number, unused: DropdownOption) => {
    if (key === 'logout') {
      useLogout()
    } else if (key === 'password') {
      router.push({ path: '/password' })
    } else if (key === 'profile') {
      router.push({ path: '/profile' })
    }
  }

  const useLogout = () => {}

  return {
    handleSelect
  }
}
