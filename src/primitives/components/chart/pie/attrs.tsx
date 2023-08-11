import BaseAttrs from '@/primitives/base-attrs'

export default defineComponent({
  name: 'PieChartAttrs',
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
