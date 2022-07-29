import React from "react";
import Calculator from "./Calculator.js";

class ReverbCalculator extends React.Component {
  render() {
    if (
      this.props.arithmeticOperation &&
      this.props.tempo &&
      this.props.preDelay &&
      this.props.valueTwo
    ) {
      return (
        <Calculator
          tempo={this.props.tempo}
          valueOne={this.props.preDelay}
          valueTwo={this.props.valueTwo}
          arithmeticOperation={this.props.arithmeticOperation}
        />
      );
    } else {
      return;
    }
  }
}

export default ReverbCalculator;
