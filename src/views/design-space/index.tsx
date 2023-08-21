import { NLayout, NLayoutContent, NLayoutHeader } from 'naive-ui'

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
      <NLayout>
        <NLayoutHeader>
          <Header />
        </NLayoutHeader>
        <NLayoutContent>
          <Chart v-show={stage === 'chart'} />
          <Map
            v-show={stage === 'map'}
            onToChartEdirtor={handelToChartEditor}
          />
        </NLayoutContent>
      </NLayout>
    )
  }
})
