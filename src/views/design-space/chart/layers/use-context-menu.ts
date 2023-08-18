import { Primitive } from '@/primitives/primitive'

export function useContextMenu() {
  const menuOptions = [
    {
      label: '重命名',
      key: 'reName'
    },
    {
      label: '复制',
      key: ' copy'
    },
    {
      label: '粘贴',
      key: 'paste'
    },
    {
      label: '删除',
      key: 'delete'
    },
    {
      label: '锁定',
      key: 'others1'
    },
    {
      label: '清空剪贴板',
      key: 'others1'
    }
  ]

  const handleReName = (primitive: Primitive) => {
    primitive.isReName = true
  }

  const typeHandler = {
    reName: handleReName
  }

  const handleProcess = (
    primitive: Primitive,
    type: keyof typeof typeHandler
  ) => {
    typeHandler[type](primitive)
  }

  return {
    menuOptions,
    typeHandler,
    handleProcess
  }
}
