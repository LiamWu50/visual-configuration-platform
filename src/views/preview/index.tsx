import { useRoute } from 'vue-router'

import Chart from './chart'
import Map from './map'
import Three from './three'

const Preview = defineComponent({
  name: 'preview',
  setup() {
    const route = useRoute()
    const stage = route.query.stage

    return {
      stage
    }
  },
  render() {
    const stage = this.stage
    return (
      <>
        {stage === 'chart' ? <Chart /> : stage === 'map' ? <Map /> : <Three />}
      </>
    )
  }
})
export default Preview
