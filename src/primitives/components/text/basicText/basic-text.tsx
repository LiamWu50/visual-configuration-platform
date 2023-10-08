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
    const { textOptions } = this.dataSource

    return (
      <div
        style={{
          color: textOptions.color,
          fontSize: textOptions.fontSize + 'px',
          fontWeight: textOptions.fontWeight,
          textAlign: textOptions.textAlign
        }}
      >
        {textOptions.text}
      </div>
    )
  }
})
