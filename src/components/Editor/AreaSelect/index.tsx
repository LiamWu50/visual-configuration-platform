import styles from './index.module.scss'

export default defineComponent({
  name: 'AreaSelect',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    return {
      style: computed(() => ({
        left: props.options.start.x + 'px',
        top: props.options.start.y + 'px',
        width: props.options.width + 'px',
        height: props.options.height + 'px'
      }))
    }
  },
  render() {
    return <div style={this.style} class={styles.areaSelect}></div>
  }
})
