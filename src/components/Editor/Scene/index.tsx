import CesiumSceneHelper from '@/helper/cesium-scene-helper'
import { useCesiumSourceLoader } from '@/hooks/use-cesium-source-loader'
import { usePreviewStore } from '@/store/preview'
import { Scene as IScene } from '@/views/design-space/chart/scene/use-state'

import styles from './index.module.scss'

const Scene = defineComponent({
  name: 'scene',
  setup() {
    const sceneType = ref()
    const mapViewer = ref()

    const previewStore = usePreviewStore()
    const { loadCesiumSource } = useCesiumSourceLoader(mapViewer)

    const setEditorScene = async (scene: IScene) => {
      sceneType.value = scene.type
      await nextTick()
      if (scene.type === 'map') {
        mapViewer.value = CesiumSceneHelper.initViewer('mapScene')
        loadCesiumSource(scene.dataSource)
        previewStore.saveCanvasScene({
          type: 'map',
          scene: scene.dataSource
        })
      }
    }

    return {
      sceneType,
      setEditorScene
    }
  },
  render() {
    return (
      <div class={styles.container}>
        {this.sceneType === 'map' ? (
          <div id='mapScene'></div>
        ) : (
          <div id='threeScene'></div>
        )}
      </div>
    )
  }
})
export default Scene
