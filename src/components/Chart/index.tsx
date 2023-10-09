import 'echarts-liquidfill'

import {
  BarChart,
  GaugeChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart
} from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import ResizeListener from 'element-resize-detector'

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  VisualMapComponent,
  PieChart,
  BarChart,
  LineChart,
  ScatterChart,
  RadarChart,
  GaugeChart,
  UniversalTransition,
  CanvasRenderer
])

const props = {
  series: {
    type: Array,
    required: true,
    default: () => []
  },
  options: {
    type: Object,
    default: () => ({})
  }
}

export default defineComponent({
  name: 'Chart',
  props,
  emits: ['on-chart-click'],
  setup(props, { emit }) {
    const myChart = ref<HTMLDivElement>()
    let chart: echarts.ECharts

    onMounted(() => {
      chart = echarts.init(myChart.value as HTMLDivElement)
      updateChartView()
      window.addEventListener('resize', handleWindowResize)
      addChartResizeListener()

      chart.on('click', (param) => emit('on-chart-click', param))
    })

    onScopeDispose(() => {
      window.removeEventListener('resize', handleWindowResize)
    })

    /**
     * 更新echart视图
     */
    const updateChartView = () => {
      if (!chart) return

      const options = mergeDataToOption()
      chart.setOption(options, true)
    }

    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    const handleWindowResize = () => {
      chart && chart.resize()
    }

    /**
     * 将业务数据加入到基础样式配置中
     * @returns {Object} 完整的echart配置
     */
    const mergeDataToOption = () =>
      Object.assign(props.options, { series: props.series })

    /**
     * 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
     */
    const addChartResizeListener = () => {
      const instance = ResizeListener({
        strategy: 'scroll',
        callOnAdd: true
      })

      instance.listenTo(myChart.value as HTMLDivElement, () => {
        chart && chart.resize()
      })
    }

    //监听数据变化根据图表数据
    watch(
      () => props,
      () => {
        updateChartView()
      },
      { deep: true }
    )

    return () => (
      <div
        ref={myChart}
        style={{
          width: '100%',
          height: '100%'
        }}
      ></div>
    )
  }
})
