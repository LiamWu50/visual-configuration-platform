import { useThemeStore } from '@/store/theme'

type Style = {
  width: string
  height: string
  backgroundColor: string
  thumbColor: string
  thumbHoverColor: string
}

export function useScrollbar() {
  const themeStore = useThemeStore()

  const getDarkTheme = () => ({
    width: '6px',
    height: '6px',
    backgroundColor: 'rgba(0,0,0,0)',
    thumbColor: '#31C48D',
    thumbHoverColor: '#31C48D'
  })

  const getLightTheme = () => ({
    width: '6px',
    height: '6px',
    backgroundColor: 'rgba(0,0,0,0)',
    thumbColor: 'rgba(144, 146, 152, 0.3)',
    thumbHoverColor: 'rgba(144, 146, 152, 0.6)'
  })

  const scrollbarStyle = ref<Style>(getLightTheme())

  const setScrollbarStyle = (style = getLightTheme()) => {
    const scrollBarStyle = `
        ::-webkit-scrollbar {
          width: ${style.width};
          height: ${style.height};
        }
    
        ::-webkit-scrollbar-track {
          border-radius: 2px;
          background-color: ${style.backgroundColor};
        }
    
        ::-webkit-scrollbar-thumb {
         border-radius: 4px;
          background-color: ${style.thumbColor};
        }
    
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${style.thumbHoverColor};
        }
      `
    const styleElement = document.createElement('style')
    styleElement.innerHTML = scrollBarStyle
    document.head.appendChild(styleElement)
  }

  watchEffect(() => {
    const typeTheme = themeStore.darkTheme ? getDarkTheme : getLightTheme
    scrollbarStyle.value = typeTheme()
    setScrollbarStyle(scrollbarStyle.value)
  })

  return {
    scrollbarStyle,
    setScrollbarStyle
  }
}
