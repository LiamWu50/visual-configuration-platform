export function useDataList() {
  const state = reactive({
    isShowSide: false,
    userDropdownOptions: [],
    menuOptions: [],
    siderMenuOptions: [],
    sideMenuOptions: []
  })

  const changeMenuOption = (state: any) => {
    state.menuOptions = [
      {
        label: 'home',
        key: 'home'
      }
    ]
  }

  return {
    state,
    changeMenuOption
  }
}
