import { CSSProperties } from 'vue'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    return {
      options: [
        {
          label: '操作 1',
          key: 1
        },
        {
          label: '操作 2',
          key: 2
        }
      ]
    }
  },
  render() {
    const triggerStyle = {
      color: 'hsla(var(--theme-color),0.9)',
      fontWeight: 'bold'
    } as CSSProperties

    return (
      <NBreadcrumb style='marginLeft: 12px'>
        <NBreadcrumbItem>草稿箱</NBreadcrumbItem>
        <NBreadcrumbItem>
          <NDropdown options={this.options}>
            <div style={triggerStyle}>测试大屏可视化系统</div>
          </NDropdown>
        </NBreadcrumbItem>
      </NBreadcrumb>
    )
  }
})
