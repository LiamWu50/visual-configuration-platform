import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

import { PrimitiveType } from './types'

export const primitivesList: Record<string, any> = {}

export default {
  install: (app: App) => {
    const moduleFilesTs: any = import.meta.glob('./components/**/index.ts', {
      eager: true
    })
    console.log('moduleFilesTs', moduleFilesTs);
    
    Object.keys(moduleFilesTs).forEach((key: string) => {
      const options = moduleFilesTs[key]?.default

      if (options) {
        primitivesList[options.name] = options.primitive as PrimitiveType

        // 注册异步组件
        const asyncComp = defineAsyncComponent(options.component)
        const asyncAttrsComp = defineAsyncComponent(options.attrsComp)

        app.component(options.name, asyncComp)
        app.component(`${options.name}Attrs`, asyncAttrsComp)
      } else {
        console.error(`${key} is not a valid component`)
      }
    })
  }
}
