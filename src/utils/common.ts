import type { Component } from 'vue'

import Image_404 from '@/assets/images/image-404.png'

/**
 * * 获取错误处理图片，默认 404 图
 * @returns url
 */
export const requireErrorImg = () => {
  return Image_404
}

/**
 * 渲染图标
 * @param icon Component
 * @param size Number
 * @returns
 */
export const renderIcon =
  (icon: Component, size = 18) =>
  () =>
    h(NIcon, { size }, { default: () => h(icon) })
