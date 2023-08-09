export const useDesignSpace = () => {
  const variables = reactive({
    stage: ref('chart')
  })

  return {
    variables
  }
}
