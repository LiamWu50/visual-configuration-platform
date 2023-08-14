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
    const style = computed(() => ({
      left: props.options.start.x + 'px',
      top: props.options.start.y + 'px',
      width: props.options.width + 'px',
      height: props.options.height + 'px'
    }))

    return () => <div style={style.value} class={styles.areaSelect}></div>
  }
})
