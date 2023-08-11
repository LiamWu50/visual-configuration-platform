import BaseAttrs from '@/primitives/base-attrs'

export default defineComponent({
  name: 'LineChartAttrs',
  setup() {
    return () => (
      <BaseAttrs
        v-slots={{
          default: () => <div></div>
        }}
      />
    )
  }
})
