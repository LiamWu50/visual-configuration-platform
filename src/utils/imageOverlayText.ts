const imageOverlayText = (imageUrl: string, text: string) => {
  const img = new Image()
  img.src = imageUrl
  img.setAttribute('crossOrigin', 'Anonymous')

  return new Promise((resolve, reject) => {
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        ctx.drawImage(img, 0, 0)
        ctx.fillStyle = '#000'
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 2
        ctx.fillRect(20, 20, 150, 50)
        ctx.strokeRect(20, 20, 150, 50)
        ctx.fillStyle = '#fff'
        ctx.font = '24px sans-serif'
        ctx.fillText(text, 30, 50)
        resolve(canvas.toDataURL())
      } catch (err) {
        console.log(err)
        reject(err)
      }
    }
  })
}

export default imageOverlayText
