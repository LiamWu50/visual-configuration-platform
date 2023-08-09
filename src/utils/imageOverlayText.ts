const imageOverlayText = (imageUrl: string, text: string) => {
  const img = new Image()
  // 设置图片的src属性为在线地址
  img.src = imageUrl
  // 当图片加载完成后执行回调函数
  img.onload = () => {
    // 创建一个Canvas元素
    const canvas = document.createElement('canvas')
    // 设置Canvas的尺寸与图片一致
    canvas.width = img.width
    canvas.height = img.height
    // 获取Canvas的上下文对象
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // 在Canvas上绘制图片
    ctx.drawImage(img, 0, 0)
    // 添加背景色和边框色
    ctx.fillStyle = '#000' // 设置背景色
    ctx.strokeStyle = '#fff' // 设置边框色
    ctx.lineWidth = 2 // 设置边框宽度
    // 绘制矩形
    ctx.fillRect(20, 20, 150, 50) // 绘制填充矩形
    ctx.strokeRect(20, 20, 150, 50) // 绘制边框矩形
    // 添加文字
    ctx.fillStyle = '#fff' // 设置文字颜色
    ctx.font = '24px sans-serif' // 设置文字样式
    ctx.fillText(text, 30, 50) // 绘制文字

    return canvas.toDataURL()
  }
}

export default imageOverlayText
