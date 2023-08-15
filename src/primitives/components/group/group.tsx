import { Primitive } from '@/primitives/primitive'

import styles from './index.module.scss'

export default defineComponent({
  name: 'Group',
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  render() {
    return (
      <div class={styles.group}>
        <div class={styles.container}>
          {this.dataSource.childPrimitives.map((item: Primitive) =>
            h(resolveComponent(item.cName), {
              id: 'primitive' + item.id,
              class: styles.primitive,
              style: item.groupStyle,
              dataSource: item
            })
          )}
        </div>
      </div>
    )
  }
})
