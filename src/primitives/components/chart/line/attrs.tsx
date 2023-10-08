import BaseAttrs from '@/primitives/attrs/base'

import { ChartGrid, ChartXAxis, ChartYAxis } from '../../../attrs/index'

export default defineComponent({
  name: 'LineChartAttrs',
  setup() {
    return () => (
      <BaseAttrs
        v-slots={{
          default: () => (
            <>
              <ChartGrid />
              <ChartXAxis />
              <ChartYAxis />
            </>
          )
        }}
      />
    )
  }
})
