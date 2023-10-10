import { Primitive } from '@/primitives/primitive'

export const cName = 'scatterChart'

class ScatterChartPrimitive extends Primitive {
  constructor() {
    super({
      cName,
      group: 'chart',
      name: '基础散点图',
      width: 320,
      height: 200,
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
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
    }
  ]
}

export default ScatterChartPrimitive
