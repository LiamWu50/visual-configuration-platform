export default defineComponent({
  name: 'LineChart',
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
