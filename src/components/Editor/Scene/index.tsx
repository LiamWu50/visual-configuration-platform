import styles from './index.module.scss'

const Scene = defineComponent({
  name: 'scene',
  setup() {
    return {}
  },
  render() {
    return (
      <div class={styles.container}>
        <div id='mapScene'></div>
      </div>
    )
  }
})
export default Scene
