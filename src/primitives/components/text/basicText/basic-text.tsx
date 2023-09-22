export default defineComponent({
  name: 'BasicText',
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {},
  render() {
    return <span>普通文本</span>
  }
})
