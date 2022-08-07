import React from "react";

import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import reverb from "../constants/reverb.constants.js";

import Calculator from "./Calculator.js";

class ReverbCalculator extends React.Component {
  addParentheses(string) {
    return `(${string})`;
  }

  render() {
    if (
      this.props.arithmeticOperation &&
      this.props.tempo &&
      this.props.valueOne &&
      this.props.valueTwo
    ) {
      let valueOneText = this.addParentheses(reverb.preDelay);
      let valueTwoText = this.addParentheses(reverb.decay);

      if (arithmeticOperation.subtraction) {
        valueTwoText = valueOneText;
        valueOneText = this.addParentheses(reverb.totalReverb);
      }

      return (
        <Calculator
          tempo={this.props.tempo}
          valueOne={this.props.valueOne}
          valueTwo={this.props.valueTwo}
          valueOneText={valueOneText}
          valueTwoText={valueTwoText}
          arithmeticOperation={this.props.arithmeticOperation}
        />
      );
    } else {
      return;
    }
  }
}

export default ReverbCalculator;
