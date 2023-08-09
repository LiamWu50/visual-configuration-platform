import BaseAttrs from '@/primitives/base-attrs'

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
