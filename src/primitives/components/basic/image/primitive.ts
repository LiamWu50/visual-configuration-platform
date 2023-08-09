import { Primitive } from '@/primitives/primitive'

export const cName = 'BasicImage'

class BasicImagePrimitive extends Primitive {
  constructor() {
    super({
      cName,
      name: '图片',
      width: 240,
      height: 40,
      icon: ''
    })
  }
}

export default BasicImagePrimitive
