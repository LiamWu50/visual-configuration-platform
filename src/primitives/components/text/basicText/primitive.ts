import { Primitive } from '@/primitives/primitive'

export const cName = 'basicText'

class BasicTextPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      name: '基础文字',
      group: 'text',
      width: 240,
      height: 40,
      icon: ''
    })
  }

  public textOptions = {
    text: '基础文字',
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: 1.5,
    letterSpacing: 0,
    opacity: 1
  }
}

export default BasicTextPrimitive
