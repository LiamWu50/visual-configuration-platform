import styles from './header.module.scss'

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Header',
  setup() {},
  render() {
    return <div class={styles.header}>这是设计区域头部</div>
  }
})
