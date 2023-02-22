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

    that.calculator = new MusicCalculator(that.parent);
  };

  this.render = function (
    calculatorOperation,
    tempo,
    valueOne,
    valueTwo,
    subtractionText
  ) {
    const labeledFormula = {
      operator: calculatorOperation,
      operandLabelCombinations: [
        { operand: valueOne, label: that.preDelay },
        { operand: valueTwo, label: that.decay },
      ],
      label: that.totalReverb,
    };

    if (calculatorOperation === arithmeticOperation.subtraction) {
      labeledFormula.operandLabelCombinations[0].label = that.totalReverb;

      if (subtractionText === reverb.preDelay) {
        labeledFormula.operandLabelCombinations[1].label = that.preDelay;
        labeledFormula.label = that.decay;
      } else {
        labeledFormula.operandLabelCombinations[1].label = that.decay;
        labeledFormula.label = that.preDelay;
      }
    }

    that.calculator.render(tempo, labeledFormula);
  };

  this.init = function () {
    that.create();
  };

  this.init();

  return this;
}
