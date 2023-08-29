import ChartList from './components/chart-list'
import DashboardHeader from './components/dashboard-header'
import MapList from './components/map-list'
import styles from './index.module.scss'

const draft = defineComponent({
  name: 'draft',
  setup() {
    const selectedModuleRef = ref('chart')

    return {
      selectedModuleRef
    }
  },
  render() {
    return (
      <div class={styles.container}>
        <div class={styles['project-header']}>
          <DashboardHeader v-model={this.selectedModuleRef} />
        </div>
        <div class={styles['project-content']}>
          {this.selectedModuleRef === 'chart' ? <ChartList /> : <MapList />}
        </div>
      </div>
    )
  }
})

export default draft
