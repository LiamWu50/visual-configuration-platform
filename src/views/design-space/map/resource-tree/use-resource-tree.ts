import { DropdownOption, TreeOption } from 'naive-ui'

import { MapSourceType } from '@/common/map-base'

export const useResourceTree = () => {
  const treeData: TreeOption[] = [
    {
      label: '影像服务',
      key: MapSourceType.IMAGE_SERVICE,
      children: []
    },
    {
      label: '地形服务',
      key: MapSourceType.TERRAIN_SERVICE,
      children: []
    },
    {
      label: '3dTiles',
      key: MapSourceType.TILE_SET,
      children: []
    },
    {
      label: 'GLTF模型',
      key: MapSourceType.GLTF_MODEL,
      children: []
    },
    {
      label: '矢量图层',
      key: MapSourceType.FEATURE,
      children: []
    },
    {
      label: '专题图层',
      key: MapSourceType.SPECIAL_SUBJECT,
      children: []
    }
  ]

  const createMenusOpt = (isDirectory: boolean) =>
    isDirectory
      ? [
          {
            label: '属性',
            key: 'ATTRIBUTES'
          },
          {
            label: '飞到',
            key: 'FLY_TO'
          },
          {
            label: '删除',
            key: 'DELETE'
          }
        ]
      : [
          {
            label: '添加数据',
            key: 'ADD'
          }
        ]

  const stateRef = reactive({
    treeData: ref(treeData),
    rightObj: {} as TreeOption, // 右键选择的菜单项
    showDropdown: ref(false),
    x: ref(0),
    y: ref(0),
    options: ref<DropdownOption[]>([])
  })

  const nodeProps = ({ option }: { option: TreeOption }) => ({
    onClick() {},
    onContextmenu(e: MouseEvent): void {
      stateRef.rightObj = option
      stateRef.options = createMenusOpt(!!option.isLeaf)
      stateRef.showDropdown = true
      stateRef.x = e.clientX
      stateRef.y = e.clientY
      e.preventDefault()
    }
  })

  return {
    stateRef,
    nodeProps
  }
}
