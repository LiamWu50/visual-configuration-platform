export default defineComponent({
  name: 'PixelGrid',
  render() {
    return (
      <svg
        style={{ position: 'absolute', top: 0, left: 0 }}
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <pattern
            id='smallGrid'
            width='7.236328125'
            height='7.236328125'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 7.236328125 0 L 0 0 0 7.236328125'
              fill='none'
              stroke='#E5E5E5'
              stroke-width='1'
            ></path>
          </pattern>
          <pattern
            id='grid'
            width='36.181640625'
            height='36.181640625'
            patternUnits='userSpaceOnUse'
          >
            <rect
              width='36.181640625'
              height='36.181640625'
              fill='url(#smallGrid)'
            ></rect>
            <path
              d='M 36.181640625 0 L 0 0 0 36.181640625'
              fill='none'
              stroke='#eee'
              stroke-width='1'
            ></path>
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)'></rect>
      </svg>
    )
  }
})
