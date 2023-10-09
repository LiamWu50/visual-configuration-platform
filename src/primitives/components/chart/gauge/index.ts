import GaugeChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./gauge-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: GaugeChartPrimitive
}
