import { NLayout, NLayoutContent, NLayoutHeader, useMessage } from 'naive-ui'

import Chart from './chart/index'
import Header from './layout/header'
import Map from './map/index'
import Three from './three/indx'
import { useDesignSpace } from './use-design-space'

export default defineComponent({
  name: 'DesignSpace',
  setup() {
    window.$message = useMessage()

    const { variables } = useDesignSpace()

    return {
      ...toRefs(variables)
    }
  },
  render() {
    const { stage } = this
    return (
      <NLayout>
        <NLayoutHeader>
          <Header stage={stage} />
        </NLayoutHeader>
        <NLayoutContent>
          <Chart v-show={stage === 'chart'} />
          <Map v-show={stage === 'map'} />
          <Three v-show={stage === 'three'} />
        </NLayoutContent>
      </NLayout>
    )
  }
})
