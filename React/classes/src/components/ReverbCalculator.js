import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import reverb from "../constants/reverb.constants.js";
import MusicCalculator from "./MusicCalculator.js";

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
      <MusicCalculator
        tempo={this.props.tempo}
        labeledFormula={labeledFormula}
      />
    );
  }
}

export default ReverbCalculator;
