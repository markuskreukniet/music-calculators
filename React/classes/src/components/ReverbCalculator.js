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

    const labeledFormula = {
      operator: this.props.calculatorOperation,
      operandLabelCombinations: [
        { operand: this.props.valueOne, label: this.preDelay },
        { operand: this.props.valueTwo, label: this.decay },
      ],
      label: this.totalReverb,
    };

    if (this.props.calculatorOperation === arithmeticOperation.subtraction) {
      labeledFormula.operandLabelCombinations[0].label = this.totalReverb;

      if (this.props.subtractionText === reverb.preDelay) {
        labeledFormula.operandLabelCombinations[1].label = this.preDelay;
        labeledFormula.label = this.decay;
      } else {
        labeledFormula.operandLabelCombinations[1].label = this.decay;
        labeledFormula.label = this.preDelay;
      }
    }

    return (
      <Calculator tempo={this.props.tempo} labeledFormula={labeledFormula} />
    );
  }
}

export default ReverbCalculator;
