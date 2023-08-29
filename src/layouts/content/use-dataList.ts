export function useDataList() {
  const state = reactive({
    userDropdownOptions: [],
    siderMenuOptions: [],
    sideMenuOptions: []
  })

  return {
    state
  }
}
