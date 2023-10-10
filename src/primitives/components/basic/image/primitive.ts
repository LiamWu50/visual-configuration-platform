import { Primitive } from '@/primitives/primitive'

export const cName = 'basicImage'

class BasicImagePrimitive extends Primitive {
  constructor() {
    super({
      cName,
      name: '图片',
      group: 'basic',
      width: 240,
      height: 120,
      icon: ''
    })
  }

  public url = 'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'
}

export default BasicImagePrimitive
