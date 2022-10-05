function ReverbCalculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    that.calculator = new Calculator(that.parent);
  };

  this.render = function (
    durationResult,
    tempo,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    that.calculator.render();
  };

  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
