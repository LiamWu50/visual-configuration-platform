import LiquidChartPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./liquid-chart.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: LiquidChartPrimitive
}
