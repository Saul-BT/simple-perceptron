export default class Perceptron {
  constructor() {
    this.weights = new Array(2)
    this.learningRate = 0.1

    // Assing random weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.floor(Math.random() * 3) - 1
    }
  }

  // Step 1 - SUM
  guess(inputs) {
    let sum = 0

    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i]
    };

    return this.sign(sum)
  }

  // Step 2 - ACTIVATION FUNCTION
  sign(num) {
    return num >= 0 ? 1 : -1
  }

  train(inputs, target) {
    let guess = this.guess(inputs)
    let error = target - guess

    // Tune weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate
    }
  }
}