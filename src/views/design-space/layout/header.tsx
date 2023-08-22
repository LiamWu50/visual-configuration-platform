import Breadcrumb from './breadcrumb'
import styles from './index.module.scss'
import NavMenu from './nav-menu'
import ResizeBox from './resize-box'

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Header',
  setup() {
    return () => (
      <div class={styles.header}>
        <div class={styles['header-left']}>
          <NavMenu />
          <Breadcrumb />
        </div>
        <div>这是设计区域头部</div>
        <div class={styles['header-right']}>
          <ResizeBox />
        </div>
      </div>
    )
  }
})
