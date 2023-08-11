import LineChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./line-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: LineChartPrimitive
}
