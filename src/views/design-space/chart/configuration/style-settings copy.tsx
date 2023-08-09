import { debounce } from 'lodash'
import {
  NCollapse,
  NCollapseItem,
  NForm,
  NFormItem,
  NInputNumber
} from 'naive-ui'

import { AttrFormTypes } from '@/common/attr-form-types'
import { AttrType, StyleAttrs } from '@/primitives/types'
import { useEditorStore } from '@/store/editor'
import utils from '@/utils'

import styles from './index.module.scss'

const { defaultValue } = utils

export default defineComponent({
  name: 'StyleSettings',
  setup() {
    const editorStore = useEditorStore()

    const { curPrimitive } = storeToRefs(editorStore)
    const curStyleAttrs = computed(() => curPrimitive.value?.styleAttrs)

    // 监听表单变化，动态修改primitive样式
    const handleChangStyle = debounce((key: string, val: any) => {
      const locationKeys = ['top', 'left', 'width', 'height']
      if (locationKeys.includes(key)) {
        curPrimitive.value?.updateStyleByKey(key, val)
      }
    }, 300)

    const renderFormItem = (item: AttrType) => {
      switch (item.type) {
        case AttrFormTypes.NUMBER:
          const numberMax = defaultValue(item.options['max'], 999999)
          const numberMin = defaultValue(item.options['min'], -999999)
          const precision = defaultValue(item.options['precision'], undefined)

          return (
            <NInputNumber
              v-model:value={item.options.value}
              onUpdateValue={(event) => handleChangStyle(item.prop, event)}
              max={numberMax}
              min={numberMin}
              precision={precision}
              clearable={true}
              placeholder='请输入'
            />
          )
      }
    }

    const renderForm = (data: StyleAttrs) => (
      <NForm size='small' labelPlacement='left' labelAlign='left'>
        {data.children.map((item) => (
          <NFormItem
            key={`${curPrimitive.value?.id}${item.prop}`}
            label={item.label}
            showLabel={item.showLabel}
          >
            {renderFormItem(item)}
          </NFormItem>
        ))}
      </NForm>
    )

    return () => (
      <div class={styles.chart}>
        <NCollapse default-expanded-names='0' accordion>
          {curStyleAttrs.value?.map((item, index) => (
            <NCollapseItem
              key={index}
              title={item.label}
              name={index}
              v-slots={{
                default: () => renderForm(item)
              }}
            ></NCollapseItem>
          ))}
        </NCollapse>
      </div>
    )
  }
})
