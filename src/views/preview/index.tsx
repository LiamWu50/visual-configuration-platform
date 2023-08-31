import { usePreviewStore } from '@/store/preview'

const Preview = defineComponent({
  name: 'preview',
  setup() {
    const previewStore = usePreviewStore()
    const { chartForPreview } = storeToRefs(previewStore)
    console.log('chartForPreview', chartForPreview)

    return {}
  },
  render() {
    return <div>preview</div>
  }
})
export default Preview
