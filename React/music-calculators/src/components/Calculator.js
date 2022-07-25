import React from 'react';
import ReverbCalculator from './ReverbCalculator.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.minInMs = 60000; // 1 minute = 60000 milliseconds

    this.determineNoteInMs = this.determineNoteInMs.bind(this);
    this.toMaxTwoDecimals = this.toMaxTwoDecimals.bind(this);
    this.valueToMsWithMaxTwoDecimals = this.valueToMsWithMaxTwoDecimals.bind(this);
  }

  determineNoteInMs(tempo) {
    const beatInMs = this.minInMs / tempo; // tempo is in BPM (beats per minute)
    return beatInMs * 4;
  }

  valueToMs(value, note) {
    // if ms value, return its number
    let msString = " ms";
    if (value.includes(msString)) {
      msString = value.replace(msString, "");
      return parseFloat(msString); // return float
    }

    // determine ms value
    let result = -1;
    
    const tripletString = " triplet";
    const dottedString = " dotted";
    const fractionString = "1/";

    let isTriplet = false;
    let isDotted = false;
    let isFraction = false;

    value = value.replace(" note", "");

    if (value.includes(tripletString)) {
      isTriplet = true;
      value = value.replace(tripletString, "");
    } else if (value.includes(dottedString)) {
      isDotted = true;
      value = value.replace(dottedString, "");
    }

    if (value.includes(fractionString)) {
      isFraction = true;
      value = value.replace(fractionString, "");
    }

    if (isFraction) {
      result = note / value;
    } else {
      result = note * value;
    }
    
    if (isTriplet) {
      result = (value / 3) * 2;
    } else if (isDotted) {
      result *= 1.5;
    }

    return result;
  }

  hasAtLeastTwoDecimals(value) {
    const valueString = String(value);
    const dotString = ".";
    if (
      valueString.includes(dotString) &&
      valueString.split(dotString)[1].length > 2
      ) {
        return true;
    } else {
      return false;
    }
  }

  toMaxTwoDecimals(value) {
    if (this.hasAtLeastTwoDecimals(value)) {
      const stringResult = value.toFixed(2); // to string with two decimals
      return parseFloat(stringResult); // return float
    } else {
      return value;
    }
  }

  valueToMsWithMaxTwoDecimals(value, noteInMs) {
    const ms = this.valueToMs(value, noteInMs);
    return this.toMaxTwoDecimals(ms);
  }

  render() {
    return (
      <ReverbCalculator
        tempo={this.props.tempo}
        preDelay={this.props.preDelay}
        decay={this.props.decay}

        determineNoteInMs={this.determineNoteInMs}
        toMaxTwoDecimals={this.toMaxTwoDecimals}
        valueToMsWithMaxTwoDecimals={this.valueToMsWithMaxTwoDecimals} />
    );
  }
}

export default Calculator;
