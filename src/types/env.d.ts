declare interface Window {
  $message: any
}

declare type Nullable<T> = T | null

// 元素类型定义
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
declare type Recordable<T = any> = Record<string, T>

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
