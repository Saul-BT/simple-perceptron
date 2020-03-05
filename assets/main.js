import Perceptron from './Perceptron.js'
import Point from './training.js'

var perceptron = new Perceptron()

var points = new Array(100)
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

ctx.lineWidth = 2;

setUpCanvas()
showCheck()


canvas.addEventListener('click', () => {
  points.forEach(point => {
    let inputs = [point.x, point.y]
    let target = point.label

    perceptron.train(inputs, target)
  })
  showCheck()
})

function setUpCanvas() {
  Point.setCanvasDimens(canvas.width, canvas.height)

  for (let i = 0; i < points.length; i++) {
    points[i] = new Point()
  }
}

function showCheck() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Drawind divisor
  ctx.beginPath()
  ctx.strokeStyle = '#aaa'
  ctx.moveTo(0, 0)
  ctx.lineTo(canvas.width, canvas.height)
  ctx.stroke()
  
  points.forEach(point => {
    let inputs = [point.x, point.y]
    let target = point.label
  
    let guess = perceptron.guess(inputs)
  
    point.show(ctx, guess)
  })
}