import BaseAttrs from '@/primitives/attrs/base'

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
