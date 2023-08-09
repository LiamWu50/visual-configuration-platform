import { NImage } from 'naive-ui'

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
        previewDisabled
        src={props.dataSource.dataset}
        fallbackSrc={requireErrorImg()}
        width={props.dataSource.width}
        height={props.dataSource.height}
      ></NImage>
    )
  }
})
