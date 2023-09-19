import { PlayArrowRound } from '@vicons/material'

import { usePreview } from '@/hooks/use-preview'

import Breadcrumb from './breadcrumb'
import styles from './index.module.scss'
import NavMenu from './nav-menu'
import ResizeBox from './resize-box'

export default defineComponent({
  name: 'TheHeader',
  props: {
    stage: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { handlePreview } = usePreview(props.stage)

    return {
      handlePreview
    }
  },
  render() {
    return (
      <div class={styles.header}>
        <div class={styles.left}>
          <NavMenu />
          <Breadcrumb />
        </div>
        <div></div>
        <div class={styles.right}>
          <div class={styles.preview}>
            <NTooltip
              trigger='hover'
              v-slots={{
                trigger: () => (
                  <NButton size='small' quaternary onClick={this.handlePreview}>
                    <NIcon size='26'>
                      <PlayArrowRound />
                    </NIcon>
                  </NButton>
                )
              }}
            >
              预览
            </NTooltip>
          </div>
          {this.stage === 'chart' ? <ResizeBox /> : null}
        </div>
      </div>
    )
  }
})
