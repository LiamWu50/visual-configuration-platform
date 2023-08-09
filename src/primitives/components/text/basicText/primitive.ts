import { Primitive } from '@/primitives/primitive'

export const cName = 'BasicText'

class BasicTextPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      name: '基础文字',
      width: 240,
      height: 40,
      icon: ''
    })
  }
}

export default BasicTextPrimitive
