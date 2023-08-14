import { Primitive } from '@/primitives/primitive'

import styles from './index.module.scss'

export default defineComponent({
  name: 'Group',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
    // element: {
    //   type: Object,
    //   default: () => {}
    // }
  },
  render() {
    return (
      <div class={styles.group}>
        <div class={styles.container}>
          {/* <component
                is="item.component"
                v-for="item in propValue"
                :id="'component' + item.id"
                :key="item.id"
                class="component"
                :style="item.groupStyle"
                :prop-value="item.propValue"
                :element="item"
                :request="item.request"
            /> */}
          {/* {this.dataSource.map((item) =>
            h(resolveComponent(item.cName), {
              id: 'primitive' + item.id,
              class: styles.primitive,
              dataSource: item
            })
          )} */}
        </div>
      </div>
    )
  }
})
