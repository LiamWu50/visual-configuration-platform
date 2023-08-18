import BaseAttrs from '@/primitives/attrs/base'

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
