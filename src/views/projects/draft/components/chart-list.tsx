import banner from '@/assets/images/projects/banner.png'

import Filters from './filters'
import styles from './list.module.scss'

const ChartList = defineComponent({
  name: 'chart-list',
  setup() {
    const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    return {
      list
    }
  },
  render() {
    const renderItem = () =>
      this.list.map(() => (
        <div class={styles.item}>
          <div class={styles.banner}>
            <img src={banner} />
          </div>
          <div class={styles.info}>
            <div class={styles.name}>数据可视化大屏</div>
            <div class={styles['last-time']}>更新于4月13日 19:26</div>
          </div>
        </div>
      ))

    return (
      <div class={styles.container}>
        <div class={styles.sort}>
          <Filters />
        </div>
        <div class={styles.list}>{renderItem()}</div>
      </div>
    )
  }
})
export default ChartList
