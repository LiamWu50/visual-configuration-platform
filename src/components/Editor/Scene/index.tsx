import CesiumSceneHelper from '@/helper/cesium-scene-helper'
import { Scene as IScene } from '@/views/design-space/chart/scene/use-state'

import styles from './index.module.scss'
import { useSourceLoader } from './use-source-loader'

const Scene = defineComponent({
  name: 'scene',
  setup() {
    const mapViewer = ref()
    const { loadTypeSource } = useSourceLoader(mapViewer)

    const setEditorScene = (val: IScene) => {
      console.log('setEditorScene', val)
      mapViewer.value = CesiumSceneHelper.initViewer('mapScene')
      loadTypeSource(val.dataSource)
    }

    return {
      setEditorScene
    }
  },
  render() {
    return (
      <div class={styles.container}>
        <div id='mapScene'></div>
      </div>
    )
  }
})
export default Scene
