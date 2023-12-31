import BaseAttrs from '@/primitives/attrs/base'

export default defineComponent({
  name: 'GaugeChartAttrs',
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
