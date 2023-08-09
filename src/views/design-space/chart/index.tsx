import Configuration from './configuration'
import Container from './container'
import styles from './index.module.scss'
import Layers from './layers'
import Primitives from './primitives'

export default defineComponent({
  name: 'Chart',
  components: { Container, Layers, Primitives, Configuration },
  setup() {},
  render() {
    return (
      <div class={styles.chart}>
        <div class={styles.sider}>
          <Primitives />
          <Layers />
        </div>
        <div class={styles.container}>
          <Container />
        </div>
        <div class={styles.config}>
          <Configuration />
        </div>
      </div>
    )
  }
})
