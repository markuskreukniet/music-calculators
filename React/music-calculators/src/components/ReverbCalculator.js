import React from 'react';

class ReverbCalculator extends React.Component { // TODO: should be specialization a of Calculator
  constructor(props) {
    super(props);
  }

  determineResult() {
    if (!this.props.tempo || !this.props.preDelay || !this.props.decay) {
      return;
    }

    const noteInMs = this.props.determineNoteInMs(this.props.tempo);

    const valueToMsWithMaxTwoDecimals = this.props.valueToMsWithMaxTwoDecimals;
    const preDelay = valueToMsWithMaxTwoDecimals(this.props.preDelay, noteInMs);
    const decay = valueToMsWithMaxTwoDecimals(this.props.decay, noteInMs);

    const result = preDelay + decay;
    return this.props.toMaxTwoDecimals(result);
  }

  render() {
    return <div>{this.determineResult()}</div>;
  }
}

export default ReverbCalculator;
