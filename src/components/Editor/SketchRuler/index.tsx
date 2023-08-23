import 'vue3-sketch-ruler/lib/style.css'

import SketchRule from 'vue3-sketch-ruler'

import { useEditorStore } from '@/store/editor/index'
import { useThemeStore } from '@/store/theme'

export default defineComponent({
  name: 'SketchRuler',
  setup() {
    const startX = ref(0)
    const startY = ref(0)
    const lines = reactive({ h: [], v: [] })

    const editorStore = useEditorStore()
    const themeStore = useThemeStore()
    const { editorScale } = storeToRefs(editorStore)

    // 计算画布大小
    const containerRect = computed(() => {
      const containerDom = document.getElementById('editorContainer')
      console.log('containerDom', containerDom)

      if (containerDom) {
        return {
          width: containerDom.clientWidth,
          height: containerDom.clientHeight
        }
      }
      return {
        width: width.value,
        height: height.value
      }
    })

    const paletteStyle = computed(() =>
      themeStore.darkTheme
        ? {
            bgColor: '#18181c',
            longfgColor: '#4d4d4d',
            shortfgColor: '#4d4d4d',
            fontColor: '#4d4d4d',
            shadowColor: '#18181c',
            borderColor: '#18181c',
            cornerActiveColor: '#18181c'
          }
        : {
            bgColor: '#f7f7f7',
            longfgColor: '#4d4d4d',
            shortfgColor: '#4d4d4d',
            fontColor: '#4d4d4d',
            shadowColor: '#18181c',
            borderColor: 'green',
            cornerActiveColor: 'blue'
          }
    )

    console.log(containerRect)

    return {
      startX,
      startY,
      lines,
      editorScale,
      containerRect,
      paletteStyle
    }
  },
  render() {
    return (
      <SketchRule
        thick={16}
        scale={this.editorScale / 100}
        // width={this.containerRect!.width}
        // height={this.containerRect!.height}
        width={1014.66}
        height={795}
        startX={this.startX}
        startY={this.startY}
        lines={this.lines}
        palette={this.paletteStyle}
      />
    )
  }
})
