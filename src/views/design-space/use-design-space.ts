import { useRoute } from 'vue-router'

export const useDesignSpace = () => {
  const route = useRoute()
  const variables = reactive({
    stage: ref()
  })

  watchEffect(() => {
    const { source } = route.query
    variables.stage = source
  })

  return {
    variables
  }
}
