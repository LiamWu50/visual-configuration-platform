import BaseAttrs from '@/primitives/attrs/base'

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
