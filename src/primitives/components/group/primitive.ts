import { Primitive } from '@/primitives/primitive'

export const cName = 'group'

class GroupPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      group: 'group',
      name: '组合',
      width: 0,
      height: 0,
      icon: ''
    })
  }

  public _customStyleAttrs = []
}

export default GroupPrimitive
