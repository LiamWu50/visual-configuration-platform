import Chart from './chart/index'
import Header from './layout/header'
import Map from './map/index'
import { useDesignSpace } from './use-design-space'

export default defineComponent({
  name: 'DesignSpace',
  setup() {
    const { variables } = useDesignSpace()

    const handelToChartEditor = () => {
      variables.stage = 'chart'
    }

    return {
      ...toRefs(variables),
      handelToChartEditor
    }
  },
  render() {
    const { stage, handelToChartEditor } = this
    return (
      <n-layout>
        <n-layoutHeader>
          <Header />
        </n-layoutHeader>
        <n-layoutContent>
          <Chart v-show={stage === 'chart'} />
          <Map
            v-show={stage === 'map'}
            onToChartEdirtor={handelToChartEditor}
          />
        </n-layoutContent>
      </n-layout>
    )
  }
})
