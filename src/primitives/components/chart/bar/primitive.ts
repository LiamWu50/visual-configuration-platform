import { Primitive } from '@/primitives/primitive'

export const cName = 'BarChart'

class BarChartPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      group: 'chart',
      name: '基础柱状图',
      width: 320,
      height: 240,
      icon: ''
    })
  }

  public _customStyleAttrs = []

  public chartOptions = {
    grid: {
      left: 80
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    }
  }

  public chartSeries = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

export default BarChartPrimitive
