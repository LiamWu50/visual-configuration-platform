import 'vue3-sketch-ruler/lib/style.css'

import SketchRule from 'vue3-sketch-ruler'

import eyeIcon from '@/assets/images/editor/eye.png'
import closeEyeIcon from '@/assets/images/editor/eyeOffSharp.png'
import { useEditorStore } from '@/store/editor/index'
import { useThemeStore } from '@/store/theme'

import styles from './index.module.scss'

export default defineComponent({
  name: 'SketchRuler',
  setup() {
    const state = reactive({
      thick: 16,
      startX: ref(0),
      startY: ref(0),
      lines: reactive({ h: [], v: [] })
    })

    const editorStore = useEditorStore()
    const themeStore = useThemeStore()
    const { editorScale } = storeToRefs(editorStore)

    // 页面滚动事件
    const handleResizeRuler = () => {
      const screensRect = document
        .querySelector('#screen')
        ?.getBoundingClientRect()
      const canvasRect = document
        .querySelector('#editor')
        ?.getBoundingClientRect()

      // 标尺开始的刻度
      const startX =
        ((screensRect!.left + state.thick - canvasRect!.left) /
          editorScale.value) *
        100
      const startY =
        ((screensRect!.top + state.thick - canvasRect!.top) /
          editorScale.value) *
        100
      state.startX = startX
      state.startY = startY
    }

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
            bgColor: '#fff',
            longfgColor: '#cbcbcb',
            shortfgColor: '#cbcbcb',
            fontColor: '#ababab',
            shadowColor: '#fff',
            borderColor: '#e2e2e2',
            cornerActiveColor: 'blue'
          }
    )

    return {
      ...toRefs(state),
      editorScale,
      containerRect,
      handleResizeRuler,
      paletteStyle,
      eyeIcon,
      closeEyeIcon
    }
  },
  render() {
    return (
      <SketchRule
        class={styles.sketchRule}
        thick={this.thick}
        eyeIcon={eyeIcon}
        closeEyeIcon={closeEyeIcon}
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
