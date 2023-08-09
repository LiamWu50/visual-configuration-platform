import BasicImagePrimitive, { cName } from './primitive.ts'

export default {
  name: cName,
  component: () => import('./basic-image.tsx'),
  attrsComp: () => import('./attrs.tsx'),
  primitive: BasicImagePrimitive
}
