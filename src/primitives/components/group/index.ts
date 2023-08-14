import GroupPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./group.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: GroupPrimitive
}
