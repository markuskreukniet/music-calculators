function ReverbCalculator(parent) {
  let that = this;
  this.parent = parent;

  this.render = function (
    durationResult,
    tempo,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    new Calculator(that.parent);
  };

  return this;
}
