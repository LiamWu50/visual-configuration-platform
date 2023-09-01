import { FullscreenExitOutlined, FullscreenOutlined } from '@vicons/material'
import { useFullscreen } from '@vueuse/core'
import { NButton, NIcon } from 'naive-ui'

const FullScreen = defineComponent({
  name: 'fullScreen',
  setup() {
    const { isFullscreen, toggle } = useFullscreen()

    return {
      toggle,
      isFullscreen
    }
  },
  render() {
    return (
      <NButton quaternary onClick={this.toggle}>
        <NIcon size={26}>
          {this.isFullscreen ? (
            <FullscreenExitOutlined />
          ) : (
            <FullscreenOutlined />
          )}
        </NIcon>
      </NButton>
    )
  }
})
export default FullScreen
