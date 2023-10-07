import { requireErrorImg } from '@/utils'

export default defineComponent({
  name: 'BasicImage',
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => (
      <NImage
        previewDisabled={true}
        objectFit='cover'
        src={props.dataSource.url}
        fallbackSrc={requireErrorImg()}
        width={props.dataSource.style.width}
        height={props.dataSource.style.height}
      ></NImage>
    )
  }
})
