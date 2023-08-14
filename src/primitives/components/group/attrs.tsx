import BaseAttrs from '@/primitives/base-attrs'

export default defineComponent({
  name: 'BarChartAttrs',
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
