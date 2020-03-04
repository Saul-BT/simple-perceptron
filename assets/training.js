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

  show(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI)

    if (this.label == 1) ctx.stroke()
    else ctx.fill()
  }
}