import axios from 'axios'
import { SelectGroupOption, SelectOption } from 'naive-ui'
import type { Ref } from 'vue'

import { altitudeTypeOptions, ImagerProviderType } from '@/common/map-base'
import { MapSourceType } from '@/common/map-base'
import utils from '@/utils'

import { terrainTypeOptions } from './use-form-render'
import { useResourceTree } from './use-resource-tree'

export const useModal = () => {
  const { stateRef } = useResourceTree()

  const formModel = ref({
    name: '',
    dataType: '',
    imageryType: ImagerProviderType.tileMapServer,
    terrainType: terrainTypeOptions[1].value,
    url: '',
    altitudeType: altitudeTypeOptions[0].value,
    feature: {
      markerSize: 6,
      markerColor: '#ffbe76',
      stroke: '#130f40',
      strokeWidth: 2,
      fill: '#3498db',
      clampToGround: true
    },
    special: {
      icon: '',
      label: '',
      width: 24,
      clampToGround: true
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
      markerSize: formModel.value.feature.markerSize,
      markerColor: formModel.value.feature.markerColor,
      stroke: formModel.value.feature.stroke,
      strokeWidth: formModel.value.feature.strokeWidth,
      fill: formModel.value.feature.fill,
      clampToGround: formModel.value.feature.clampToGround
    },
    special: {
      icon: formModel.value.special.icon,
      label: formModel.value.special.label,
      width: formModel.value.special.width,
      clampToGround: formModel.value.special.clampToGround
    }
  })

  return {
    rules,
    formModel,
    specialLabelOptions,
    dataTypeOptions,
    getMapSourceOptions
  }
}
