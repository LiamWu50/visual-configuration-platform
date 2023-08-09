import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NModal,
  NSelect,
  NSpace
} from 'naive-ui'

import { MapSourceType } from '@/common/map-scene-config'

import { useFormRender } from './use-form-render'
import { useModal } from './use-modal'

export default defineComponent({
  name: 'SourceModal',
  emits: ['loadMapSource'],
  setup(props, ctx) {
    const showModalRef = ref(false)
    const formRef = ref()

    const { formModel, specialLabelOptions, ...rest } = useModal()

    const { ...renderRest } = useFormRender({ formModel, specialLabelOptions })

    /**
     * 打开对话框
     */
    const openModal = (key: string) => {
      formModel.value.dataType = key
      showModalRef.value = true
    }

    /**
     * 提交数据
     */
    const submitCallback = () => {
      const url = formModel.value.url
      const type = formModel.value.dataType
      const options = rest.getMapSourceOptions()
      ctx.emit('loadMapSource', { url, type, options })
      showModalRef.value = false
    }

    /**
     * 关闭对话框
     */
    const cancelCallback = () => {
      showModalRef.value = false
    }

    ctx.expose({
      openModal
    })

    return {
      showModal: showModalRef,
      formRef,
      formModel,
      ...rest,
      ...renderRest,
      submitCallback,
      cancelCallback
    }
  },
  render() {
    const {
      showModal,
      formModel,
      rules,
      renderImageryForm,
      renderTerrainForm,
      renderFeatureForm,
      renderSpecialForm,
      submitCallback,
      cancelCallback
    } = this
    return (
      <NModal
        v-model:show={showModal}
        closable={false}
        showIcon={false}
        preset='card'
        title='添加数据'
        bordered={false}
        style={{ width: '600px' }}
        v-slots={{
          footer: () => (
            <NSpace justify='end'>
              <NButton onClick={cancelCallback}>取消</NButton>
              <NButton type='primary' onClick={submitCallback}>
                确定
              </NButton>
            </NSpace>
          )
        }}
      >
        <NForm
          ref='formRef'
          label-width='auto'
          model={formModel}
          rules={rules}
          size='medium'
        >
          <NFormItem label='数据名称' path='name'>
            <NInput v-model:value={formModel.name} placeholder='输入数据名称' />
          </NFormItem>
          <NFormItem label='数据类型' path='age'>
            <NSelect
              v-model:value={formModel.dataType}
              disabled
              options={this.dataTypeOptions}
            />
          </NFormItem>
          {formModel.dataType === MapSourceType.IMAGE_SERVICE
            ? renderImageryForm()
            : formModel.dataType === MapSourceType.TERRAIN_SERVICE
            ? renderTerrainForm()
            : formModel.dataType === MapSourceType.FEATURE
            ? renderFeatureForm()
            : formModel.dataType === MapSourceType.SPECIAL_SUBJECT
            ? renderSpecialForm()
            : null}
          <NFormItem label='数据地址' path='url'>
            <NInput
              v-model:value={formModel.url}
              placeholder='请输入数据地址'
            />
          </NFormItem>
          <NFormItem label='高程模式' path='age'>
            <NSelect
              v-model:value={formModel.altitudeType}
              placeholder='Select'
              options={this.altitudeTypeOptions}
            />
          </NFormItem>
          <NFormItem label='中心坐标' path='url'>
            <NSpace align='center' justify='end'>
              <span>经度：</span>
              <NInputNumber
                v-model:value={formModel.longitude}
                placeholder='请输入经度'
                style={{ width: '120px' }}
              />
              <span>纬度：</span>
              <NInputNumber
                v-model:value={formModel.latitude}
                placeholder='请输入经度'
                style={{ width: '120px' }}
              />
              <span>高程：</span>
              <NInputNumber
                v-model:value={formModel.altitude}
                placeholder='请输入经度'
                style={{ width: '120px' }}
              />
            </NSpace>
          </NFormItem>
        </NForm>
      </NModal>
    )
  }
})
