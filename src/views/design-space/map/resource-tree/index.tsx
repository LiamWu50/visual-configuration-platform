import { NDropdown, NTree } from 'naive-ui'

import { MapSourceType } from '@/common/map-base'
import CesiumSourceLoader from '@/helper/cesium-source-loader'

import { viewerKey } from '../types'
import styles from './index.module.scss'
import SourceModal from './source-modal'
import { useResourceTree } from './use-resource-tree'

export default defineComponent({
  name: 'ResourceTree',
  setup() {
    const resourceModalRef = ref<typeof SourceModal | null>(null)
    const { stateRef, nodeProps } = useResourceTree()

    const mapViewer = inject(viewerKey)
    const cesiumSourceLoader = new CesiumSourceLoader(mapViewer!.value)

    const handleSelect = (key: string | number) => {
      if (key === 'ADD') {
        resourceModalRef.value!.openModal(stateRef.rightObj.key)
      } else if (key === 'DELETE') {
        deleteMapSource()
      } else if (key === 'FLY_TO') {
        flyToMapSource()
      }

      stateRef.showDropdown = false
    }

    const handleClickoutside = () => {
      stateRef.showDropdown = false
    }

    /**
     * 加载地图资源
     */
    const loadMapSource = ({
      url,
      type,
      options
    }: {
      url: string
      type: keyof typeof MapSourceType
      options: any
    }) => {
      // 将资源加载到地图上
      cesiumSourceLoader.addSource(url, type, options)

      // 将数据添加到树节点上
      const parentNode = stateRef.treeData.find((t) => t.key === type)
      parentNode?.children!.push({
        label: options.name,
        key: options.id,
        isLeaf: true,
        parentType: type
      })
    }

    /**
     * 删除选中的地图资源
     */
    const deleteMapSource = () => {
      // 删除地图上加载的资源
      const { key, parentType } = stateRef.rightObj
      cesiumSourceLoader.deleteSource(key as string, parentType as string)

      // 删除树节点的资源
      const parentNode = stateRef.treeData.find((t) => t.key === parentType)
      const index = parentNode?.children!.findIndex((c) => c.key === key)
      if (!index || index < 0) return
      parentNode?.children!.splice(index, 1)
    }

    /**
     * 飞到选中的底图数据
     */
    const flyToMapSource = () => {
      const { key, parentType } = stateRef.rightObj
      cesiumSourceLoader.flyTo(key as string, parentType as string)
    }

    return () => (
      <div class={styles.resourceTree}>
        <NTree
          data={stateRef.treeData}
          node-props={nodeProps}
          checkable
          expand-on-click
          default-expand-all
          selectable
        />
        <NDropdown
          trigger='manual'
          placement='bottom-start'
          show={stateRef.showDropdown}
          options={stateRef.options as any}
          x={stateRef.x}
          y={stateRef.y}
          onSelect={handleSelect}
          onClickoutside={handleClickoutside}
        />
        <SourceModal ref={resourceModalRef} onLoadMapSource={loadMapSource} />
      </div>
    )
  }
})
