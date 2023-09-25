import mapSources, { MapSources } from '@/common/map-sources'
import utils from '@/utils'

export interface Scene {
  id: string
  label: string
  type: string
  dataSource: MapSources[]
}

export interface SceneOptions {
  label: string
  key: string
  scenes: Scene[]
}

export function useState() {
  const state = reactive({
    selectedScene: ref<Scene>(),
    sceneOptions: ref<SceneOptions[]>([
      {
        label: '三维地图',
        key: 'map',
        scenes: []
      },
      {
        label: '三维场景',
        key: 'three',
        scenes: []
      }
    ])
  })

  const getSceneOptions = () => {
    state.sceneOptions.forEach((item) => {
      item.scenes = [
        {
          id: utils.createId(),
          label: '测试三维地图',
          type: item.key,
          dataSource: mapSources
        },
        {
          id: utils.createId(),
          label: '四川三维场景',
          type: item.key,
          dataSource: mapSources
        }
      ]
    })
  }

  return {
    state,
    getSceneOptions
  }
}
