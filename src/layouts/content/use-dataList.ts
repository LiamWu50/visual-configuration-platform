export function useDataList() {
  const state = reactive({
    isShowSide: false,
    userDropdownOptions: [],
    menuOptions: [],
    headerMenuOptions: [],
    sideMenuOptions: []
  })

  return {
    state
  }
}
