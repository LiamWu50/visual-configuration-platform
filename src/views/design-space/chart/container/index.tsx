import Editor from '@/components/Editor/index'

import styles from './index.module.scss'
import { useContainer } from './use-container'

export default defineComponent({
  name: 'Container',
  components: { Editor },
  setup() {
    const { ...restFunc } = useContainer()

    return {
      ...restFunc
    }
  },
  render() {
    return (
      <>
        <div
          class={styles.container}
          onDrop={this.handleDrop}
          onDragover={this.handleDragOver}
          onMousedown={this.handleMouseDown}
          onMouseup={this.handleMouseUp}
        >
          <Editor />
        </div>
      </>
    )
  }
})
