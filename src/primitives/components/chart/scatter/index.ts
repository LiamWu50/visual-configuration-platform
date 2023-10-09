import ScatterChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./scatter-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: ScatterChartPrimitive
}
