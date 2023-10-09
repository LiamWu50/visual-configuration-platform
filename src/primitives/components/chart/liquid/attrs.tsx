import BaseAttrs from '@/primitives/attrs/base'

export default defineComponent({
  name: 'LiquidChartAttrs',
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
