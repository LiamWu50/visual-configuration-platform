/// <reference types="vite/client" />

import type { DefineComponent } from 'vue'

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface Window {
    $message: any
  }
}

declare type Nullable<T> = T | null

// 元素类型定义
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
declare type Recordable<T = any> = Record<string, T>

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
