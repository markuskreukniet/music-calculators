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
          valueOneText={"pre-delay"} // TODO: determine if this string should be a global constant
          valueTwoText={
            this.props.arithmeticOperation === "addition" // TODO: addition should be a constant
              ? "delay"
              : "total reverb"
          } // TODO: determine if these strings should be global constants
          arithmeticOperation={this.props.arithmeticOperation}
        />
      );
    } else {
      return;
    }
  }
}

export default ReverbCalculator;
