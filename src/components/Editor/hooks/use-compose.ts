import { Primitive } from '@/primitives/primitive'
import { useAreaSelectStore } from '@/store/area-select/index'
import { useEditorStore } from '@/store/editor/index'
import utils from '@/utils/index'
import { createGroupStyle, decomposePrimitive } from '@/utils/primitive'

export function useCompose() {
  const editorStore = useEditorStore()
  const areaSelectStore = useAreaSelectStore()
  const { groupStyle, childPrimitives, areaSelectVisible } =
    storeToRefs(areaSelectStore)

  const compose = ({ componentData, editor }) => {
    const components = [] as Primitive[]
    const primitives = childPrimitives.value as Primitive[]
    primitives.forEach((primitive) => {
      if (primitive.cName != 'Group') {
        components.push(primitive)
      } else {
        // 如果要组合的组件中，已经存在组合数据，则需要提前拆分
        const parentStyle = { ...primitive.style }
        const editorRect = editor.getBoundingClientRect()

        primitive.childPrimitives?.forEach((primitive) => {
          decomposePrimitive(primitive, editorRect, parentStyle)
        })

        primitive.childPrimitives?.forEach((p) => components.push(p))
      }
    })

    const groupPrimitive = {
      id: utils.createId(),
      cName: 'Group',
      name: '组合',
      groupStyle: {},
      style: {
        opacity: 1,
        ...groupStyle
      },
      childPrimitives: components
    }

    createGroupStyle(groupPrimitive)

    store.commit('addComponent', {
      component: groupComponent
    })

    eventBus.$emit('hideArea')

    store.commit('batchDeleteComponent', areaData.components)
    store.commit('setCurComponent', {
      component: componentData[componentData.length - 1],
      index: componentData.length - 1
    })

    areaData.components = []
  }

  // 将已经放到 Group 组件数据删除，也就是在 componentData 中删除，因为它们已经从 componentData 挪到 Group 组件中了
  const batchDeleteComponent = ({ componentData }, deleteData) => {
    // deleteData.forEach((component) => {
    //   for (let i = 0, len = componentData.length; i < len; i++) {
    //     if (component.id == componentData[i].id) {
    //       componentData.splice(i, 1)
    //       break
    //     }
    //   }
    // })
  }

  const decompose = ({ curComponent, editor }) => {
    // const parentStyle = { ...curComponent.style }
    // const components = curComponent.propValue
    // const editorRect = editor.getBoundingClientRect()
    // store.commit('deleteComponent')
    // components.forEach((component) => {
    //   decomposeComponent(component, editorRect, parentStyle)
    //   store.commit('addComponent', { component })
    // })
  }

  return {
    compose,
    decompose,
    batchDeleteComponent
  }
}
