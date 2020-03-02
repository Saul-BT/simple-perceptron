export default class Perceptron {
  constructor() {
    this.weights = new Array(2)

    // Assing random weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.floor(Math.random() * 3) - 1
    }
  }

  // Step 1 - SUM
  guess(inputs) {
    let sum = 0

    this.weights.forEach((weight, index) => {
      sum += inputs[index] * weight
    });

    return this.sign(sum)
  }

  // Step 2 - ACTIVATION FUNCTION
  sign(num) {
    return num >= 0 ? 1 : -1
  }
}