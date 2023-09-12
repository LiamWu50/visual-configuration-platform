import Editor from '@/components/Editor/index'

import { Scene } from '../scene/use-state'
import styles from './index.module.scss'
import { useContainer } from './use-container'

export default defineComponent({
  name: 'Container',
  components: { Editor },
  setup() {
    const editorRef = ref()
    const { ...restFunc } = useContainer()

    const setEditorScene = (val: Scene) => {
      editorRef.value.setEditorScene(val)
    }

    return {
      editorRef,
      ...restFunc,
      setEditorScene
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
          <Editor ref='editorRef' />
        </div>
      </>
    )
  }
})
