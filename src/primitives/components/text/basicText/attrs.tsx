import BaseAttrs from '@/primitives/attrs/base'

export default defineComponent({
  name: 'BasicTextAttrs',
  setup() {
    return () => (
      <BaseAttrs
        v-slots={{
          default: () => <div>222</div>
        }}
      />
    )
  }
})
