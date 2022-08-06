import React from "react";
import arithmeticOperation from "../constants/arithmeticOperation.constants.js";
import Calculator from "./Calculator.js";

class ReverbCalculator extends React.Component {
  render() {
    if (
      this.props.arithmeticOperation &&
      this.props.tempo &&
      this.props.valueOne &&
      this.props.valueTwo
    ) {
      const preDelay = "(pre-delay)";

      return (
        <Calculator
          tempo={this.props.tempo}
          valueOne={this.props.valueOne}
          valueTwo={this.props.valueTwo}
          valueOneText={
            this.props.arithmeticOperation === arithmeticOperation.addition // TODO: duplicate conditional (ternary) operator
              ? preDelay
              : "(total reverb)"
          }
          valueTwoText={
            this.props.arithmeticOperation === arithmeticOperation.addition
              ? "(decay)"
              : preDelay
          }
          arithmeticOperation={this.props.arithmeticOperation}
        />
      );
    } else {
      return;
    }
  }
}

export default ReverbCalculator;
