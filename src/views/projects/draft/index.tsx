import ChartList from './components/chart-list'
import DashboardHeader from './components/dashboard-header'
import MapList from './components/map-list'
import ThreeList from './components/three-list'
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
    const module = this.selectedModuleRef
    return (
      <div class={styles.container}>
        <div class={styles['project-header']}>
          <DashboardHeader v-model={this.selectedModuleRef} />
        </div>
        <div class={styles['project-content']}>
          <ChartList v-show={module === 'chart'} />
          <MapList v-show={module === 'map'} />
          <ThreeList v-show={module === 'three'} />
        </div>
      </div>
    )
  }
})

export default draft
