export default defineComponent({
  name: 'ScatterChart',
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { chartOptions, chartSeries } = props.dataSource
    return () => <Chart options={chartOptions} series={chartSeries} />
  }
})
