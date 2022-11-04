import React from "react";

import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import reverb from "../constants/reverb.constants.js";

import Calculator from "./Calculator.js";

class ReverbCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.preDelay = this.addParentheses(reverb.preDelay);
    this.decay = this.addParentheses(reverb.decay);
    this.totalReverb = this.addParentheses(reverb.totalReverb);
  }

  addParentheses(string) {
    return `(${string})`;
  }

  render() {
    if (
      !this.props.calculatorOperation ||
      !this.props.tempo ||
      !this.props.valueOne ||
      !this.props.valueTwo ||
      (this.props.calculatorOperation === arithmeticOperation.subtraction &&
        !this.props.subtractionText)
    ) {
      return;
    }

    let valueOneText = this.preDelay;
    let valueTwoText = this.decay;
    let resultTextPart = this.totalReverb;

    if (this.props.calculatorOperation === arithmeticOperation.subtraction) {
      valueOneText = this.totalReverb;

      if (this.props.subtractionText === reverb.preDelay) {
        valueTwoText = this.preDelay;
        resultTextPart = this.decay;
      } else {
        valueTwoText = this.decay;
        resultTextPart = this.preDelay;
      }
    }

    return (
      <Calculator
        tempo={this.props.tempo}
        valueOne={this.props.valueOne}
        valueTwo={this.props.valueTwo}
        valueOneText={valueOneText}
        valueTwoText={valueTwoText}
        resultTextPart={resultTextPart}
        calculatorOperation={this.props.calculatorOperation}
      />
    );
  }
}

export default ReverbCalculator;