import { Primitive } from '@/primitives/primitive'

export const cName = 'barChart'

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
      show: false,
      left: '30',
      top: '30',
      right: '30',
      bottom: '30'
    },
    xAxis: {
      name: 'X',
      type: 'category',
      nameTextStyle: {
        color: '#000000',
        fontSize: 12,
        borderDashOffset: 0
      },
      axisLabel: {
        show: true,
        color: '#000000',
        fontSize: 12,
        borderDashOffset: 0
      },
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#000000',
          width: 1
        }
      },
      axisTick: {
        show: true,
        length: 3
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#FFFFFF',
          width: 1,
          type: 'solid'
        }
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      name: 'Y',
      type: 'value',
      nameTextStyle: {
        color: '#000000',
        fontSize: 12,
        borderDashOffset: 0
      },
      axisLabel: {
        show: true,
        color: '#000000',
        fontSize: 12,
        borderDashOffset: 0
      },
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#000000',
          width: 1
        }
      },
      axisTick: {
        show: true,
        length: 3
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#FFFFFF',
          width: 1,
          type: 'solid'
        }
      }
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
