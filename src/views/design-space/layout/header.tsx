import styles from './header.module.scss'
import NavMenu from './nav-menu'

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Header',
  setup() {
    return () => (
      <div class={styles.header}>
        <NavMenu />
        <div>这是设计区域头部</div>
        <div></div>
      </div>
    )
  }
})
