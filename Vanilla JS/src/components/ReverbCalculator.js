function ReverbCalculator(parent) {
  let that = this;
  this.parent = parent;

  this.create = function () {
    function addParentheses(string) {
      return `(${string})`;
    }

    that.preDelay = addParentheses(reverb.preDelay);
    that.decay = addParentheses(reverb.decay);
    that.totalReverb = addParentheses(reverb.totalReverb);

    that.calculator = new Calculator(that.parent);
  };

  this.render = function (
    calculatorOperation,
    tempo,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    let valueOneText = that.preDelay;
    let valueTwoText = that.decay;
    let resultTextPart = that.totalReverb;

    if (calculatorOperation === arithmeticOperation.subtraction) {
      valueOneText = that.totalReverb;

      if (subtractionText === reverb.preDelay) {
        valueTwoText = that.preDelay;
        resultTextPart = that.decay;
      } else {
        valueTwoText = that.decay;
        resultTextPart = that.preDelay;
      }
    }

    that.calculator.render(
      calculatorOperation,
      tempo,
      valueOne,
      valueTwo,
      subtractionText
    );
  };

  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
