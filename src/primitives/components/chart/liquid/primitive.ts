import { Primitive } from '@/primitives/primitive'

export const cName = 'liquidChart'

class LiquidChartPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      group: 'chart',
      name: '水球图',
      width: 320,
      height: 320,
      icon: ''
    })
  }

  public _customStyleAttrs = []

  public chartOptions = {}

  public chartSeries = [
    {
      type: 'liquidFill',
      label: {
        formatter: () => '60%',
        fontSize: 28
      },
      data: [0.6, 0.5, 0.4, 0.3]
    }
  ]
}

export default LiquidChartPrimitive
