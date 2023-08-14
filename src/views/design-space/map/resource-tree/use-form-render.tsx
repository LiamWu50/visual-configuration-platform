import {
  NColorPicker,
  NFormItem,
  NInput,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NSelect,
  NSpace,
  SelectGroupOption,
  SelectOption
} from 'naive-ui'
import type { Ref } from 'vue'

import { ImagerProviderType, TerrainType } from '@/common/map-base'

const imageryTypeOptions = [
  { label: 'arcGisMapServer', value: ImagerProviderType.arcGisMapServer },
  { label: 'bingMap', value: ImagerProviderType.bingMap },
  { label: 'tileMapServer', value: ImagerProviderType.tileMapServer },
  { label: 'mapBox', value: ImagerProviderType.mapBox },
  { label: 'singleTile', value: ImagerProviderType.singleTile },
  { label: 'urlTemplate', value: ImagerProviderType.urlTemplate },
  { label: 'webMapService', value: ImagerProviderType.webMapService },
  { label: 'webMapTileService', value: ImagerProviderType.webMapTileService }
]

const terrainTypeOptions = [
  { label: '无地形', value: TerrainType.ellipsoidTerrain },
  { label: '自定义地形', value: TerrainType.cesiumTerrain },
  { label: 'Cesium自带地形', value: TerrainType.worldTerrain }
]

export const useFormRender = ({
  formModel,
  specialLabelOptions
}: {
  formModel: Ref<any>
  specialLabelOptions: Ref<Array<SelectOption | SelectGroupOption>>
}) => {
  // 渲染影像服务的表单项
  const renderImageryForm = () => (
    <NFormItem label='影像类型' path='imageryType'>
      <NSelect
        v-model:value={formModel.value.imageryType}
        options={imageryTypeOptions}
        placeholder='请选择影像类型'
      />
    </NFormItem>
  )

  // 渲染地形服务的表单项
  const renderTerrainForm = () => (
    <NFormItem label='地形类型' path='terrainType'>
      <NSelect
        v-model:value={formModel.value.terrainType}
        options={terrainTypeOptions}
        placeholder='请选择地形类型'
      />
    </NFormItem>
  )

  // 渲染矢量要素的表单项
  const renderFeatureForm = () => (
    <>
      <NFormItem label='marker大小' path='markerSize'>
        <NInputNumber
          v-model:value={formModel.value.feature.markerSize}
          placeholder='请输入marker大小'
          style={{ width: '120px' }}
        />
      </NFormItem>
      <NFormItem label='marker颜色' path='markerColor'>
        <NColorPicker v-model:value={formModel.value.feature.markerColor} />
      </NFormItem>
      <NFormItem label='边框颜色' path='stroke'>
        <NColorPicker v-model:value={formModel.value.feature.stroke} />
      </NFormItem>
      <NFormItem label='边框宽度' path='strokeWidth'>
        <NInputNumber
          v-model:value={formModel.value.feature.strokeWidth}
          placeholder='请输入边框宽度'
          style={{ width: '120px' }}
        />
      </NFormItem>
      <NFormItem label='填充颜色' path='fill'>
        <NColorPicker v-model:value={formModel.value.feature.fill} />
      </NFormItem>
      <NFormItem label='是否贴地' path='clampToGround'>
        <NRadioGroup v-model:value={formModel.value.feature.clampToGround}>
          <NSpace>
            <NRadio label='是' value={true} />
            <NRadio label='否' value={false} />
          </NSpace>
        </NRadioGroup>
      </NFormItem>
    </>
  )

  // 渲染专题图层的表单项
  const renderSpecialForm = () => (
    <>
      <NFormItem label='图标在线地址' path='icon'>
        <NInput
          v-model:value={formModel.value.special.icon}
          placeholder='输入图标在线地址'
        />
      </NFormItem>
      <NFormItem label='标签字段' path='label'>
        <NSelect
          v-model:value={formModel.value.special.label}
          placeholder='请选择标签字段'
          options={specialLabelOptions.value}
        />
      </NFormItem>
      <NFormItem label='图标大小' path='specialSize'>
        <NInputNumber
          v-model:value={formModel.value.special.size}
          placeholder='请输入图标大小'
          style={{ width: '120px' }}
        />
      </NFormItem>
    </>
  )

  return {
    renderImageryForm,
    renderTerrainForm,
    renderFeatureForm,
    renderSpecialForm
  }
}
