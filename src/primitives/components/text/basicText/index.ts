import BasicTextPrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./basic-text.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: BasicTextPrimitive
}
