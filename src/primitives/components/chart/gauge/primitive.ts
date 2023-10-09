import { Primitive } from '@/primitives/primitive'

export const cName = 'GaugeChart'

class GaugeChartPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      name: '基础仪表盘',
      group: 'chart',
      width: 320,
      height: 240,
      icon: ''
    })
  }

  public _customStyleAttrs = []

  public chartOptions = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    }
  }

  public chartSeries = [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
}

export default GaugeChartPrimitive
