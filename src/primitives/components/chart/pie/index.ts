import PieChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./pie-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: PieChartPrimitive
}
