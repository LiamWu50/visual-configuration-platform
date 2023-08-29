import DashboardHeader from './dashboard-header'
import styles from './index.module.scss'

const draft = defineComponent({
  name: 'draft',
  setup() {
    return {}
  },
  render() {
    return (
      <div class={styles.container}>
        <div class={styles['project-header']}>
          <DashboardHeader />
        </div>
      </div>
    )
  }
})

export default draft
