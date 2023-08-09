import BarChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./bar-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: BarChartPrimitive
}
