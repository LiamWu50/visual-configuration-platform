import RadarChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./radar-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: RadarChartPrimitive
}
