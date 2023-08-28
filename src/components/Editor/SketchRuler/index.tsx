import 'vue3-sketch-ruler/lib/style.css'

import { SketchRule } from 'vue3-sketch-ruler'

import eyeIcon from '@/assets/images/editor/eye.png'
import closeEyeIcon from '@/assets/images/editor/eyeOffSharp.png'
import { useEditorScale } from '@/hooks/use-editor-scale'
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
    const { transByCurScale } = useEditorScale()

    // 页面滚动事件
    const handleResizeRuler = () => {
      const screensRect = document
        .querySelector('#screen')
        ?.getBoundingClientRect()
      const canvasRect = document
        .querySelector('#editor')
        ?.getBoundingClientRect()

      // 标尺开始的刻度
      state.startX = transByCurScale(
        screensRect!.left + state.thick - canvasRect!.left
      )

      state.startY = transByCurScale(
        screensRect!.top + state.thick - canvasRect!.top
      )
    }

    // 计算画布大小
    const containerRect = computed(() => {
      const screenRef = document.getElementById('screen')
      return {
        width: screenRef?.clientWidth,
        height: screenRef?.clientHeight
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
        width={this.containerRect?.width}
        height={this.containerRect?.height}
        startX={this.startX}
        startY={this.startY}
        lines={this.lines}
        cornerActive={true}
        palette={this.paletteStyle}
      />
    )
  }
})
