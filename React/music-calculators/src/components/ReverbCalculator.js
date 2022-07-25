import React from 'react';
import Calculator from './Calculator.js';

class ReverbCalculator extends React.Component {
  render() {
    if (this.props.tempo && this.props.preDelay && this.props.decay) {
      return (
        <Calculator
          tempo={this.props.tempo}
          valueOne={this.props.preDelay}
          valueTwo={this.props.decay}
          arithmeticOperation={"addition"} />
      );
    } else {
      return;
    }
  }
}

export default ReverbCalculator;
