export default class Point {

  constructor() {
    this.x = Math.random() * Point.canvasWidth
    this.y = Math.random() * Point.canvasHeight

    this.label = this.x > this.y ? 1 : -1
  }

  static setCanvasDimens(width, height) {
    Point.canvasWidth = width
    Point.canvasHeight = height
  }

  show(ctx, guess) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI)

    let color = guess == this.label
                  ? '#006666'
                  : '#92153b'

    ctx.fillStyle = color
    ctx.strokeStyle = color

    if (guess == 1) ctx.stroke()
    else ctx.fill()
  }
}