import styles from './index.module.scss'

export default defineComponent({
  name: 'SelectedArea',
  props: {
    styleOptitons: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const style = computed(() => ({
      left: props.styleOptitons.startX + 'px',
      top: props.styleOptitons.startY + 'px',
      width: props.styleOptitons.width + 'px',
      height: props.styleOptitons.height + 'px'
    }))

    return () => <div style={style.value} class={styles.area}></div>
  }
})
