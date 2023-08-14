import axios from 'axios'
import { SelectGroupOption, SelectOption } from 'naive-ui'
import type { Ref } from 'vue'

import { MapSourceType } from '@/common/map-base'
import utils from '@/utils'

import { useResourceTree } from './use-resource-tree'

export const useModal = () => {
  const { stateRef } = useResourceTree()

  const formModel = ref({
    name: '',
    dataType: '',
    imageryType: '',
    terrainType: '',
    url: '',
    altitudeType: '',
    feature: {} as {
      markerColor: string
      stroke: string
      strokeWidth: number
      fill: string
      clampToGround: boolean
    },
    special: {} as {
      icon: string
      label: string
      size: number
    },
    longitude: 116.411161,
    latitude: 39.90607,
    altitude: 2300
  })

  const rules = {
    name: {
      required: true,
      message: '请输入数据名称',
      trigger: ['input']
    },
    url: {
      required: true,
      message: '请输入数据地址',
      trigger: ['input']
    }
  }

  const dataTypeOptions = stateRef.treeData.map(({ label, key }) => ({
    label,
    value: key
  }))

  const altitudeTypeOptions = [
    { label: '贴 地', value: 'ON_TERRAIN' },
    { label: '绝对高程', value: 'ABSOLUTE' },
    { label: '相对高程', value: 'RELATIVE' }
  ]

  const specialLabelOptions: Ref<Array<SelectOption | SelectGroupOption>> = ref(
    []
  )

  watch(
    () => formModel.value.url,
    (val) => {
      if (formModel.value.dataType !== MapSourceType.SPECIAL_SUBJECT) return

      axios.get(val).then((response) => {
        const geojson = response.data
        if (!geojson.features) return []
        specialLabelOptions.value = Object.keys(
          geojson.features[0].properties
        ).map((item) => ({ label: item, value: item }))
      })
    }
  )

  /**
   * 获取地图加载配置项
   */
  const getMapSourceOptions = () => ({
    id: utils.createId(),
    name: formModel.value.name,
    imageryType: formModel.value.imageryType,
    altitudeType: formModel.value.altitudeType,
    terrainType: formModel.value.terrainType,
    position: {
      longitude: formModel.value.longitude,
      latitude: formModel.value.latitude,
      altitude: formModel.value.altitude
    },
    feature: {
      markerColor: formModel.value.feature.markerColor,
      stroke: formModel.value.feature.stroke,
      strokeWidth: formModel.value.feature.strokeWidth,
      fill: formModel.value.feature.fill,
      clampToGround: formModel.value.feature.clampToGround
    },
    special: {
      icon: formModel.value.special.icon,
      label: formModel.value.special.label,
      size: formModel.value.special.size
    }
  })

  return {
    rules,
    formModel,
    specialLabelOptions,
    dataTypeOptions,
    altitudeTypeOptions,
    getMapSourceOptions
  }
}
