import { CaretForwardOutline } from '@vicons/ionicons5'
import { NCollapse, NCollapseItem, NIcon } from 'naive-ui'

import imageSrc from '@/assets/images/projects/gis-banner.png'

import styles from './index.module.scss'
import { Scene, SceneOptions, useState } from './use-state'

export default defineComponent({
  name: 'Scene',
  setup() {
    const { state, getSceneOptions } = useState()

    watchEffect(() => getSceneOptions())

    const handleSelectScene = (val: Scene) => {
      console.log(val)
      state.selectedScene = val
    }

    const renderScenes = (item: SceneOptions) =>
      item.scenes.map((item: Scene) => (
        <div
          key={item.id}
          class={[
            styles.scnene,
            state.selectedScene?.id === item.id && styles.active
          ]}
          onClick={() => handleSelectScene(item)}
        >
          <span>{item.label}</span>
          <img src={imageSrc} />
        </div>
      ))

    return () => (
      <div class={styles.container}>
        <NCollapse
          v-slots={{
            arrow: () => (
              <NIcon size={12}>
                <CaretForwardOutline />
              </NIcon>
            )
          }}
        >
          {state.sceneOptions.map((item) => (
            <NCollapseItem title={item.label} name={item.key}>
              <div class={styles.scnenes}>{renderScenes(item)}</div>
            </NCollapseItem>
          ))}
        </NCollapse>
      </div>
    )
  }
})
